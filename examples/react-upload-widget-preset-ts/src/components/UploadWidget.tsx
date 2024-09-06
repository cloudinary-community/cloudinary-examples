import { useEffect, useRef } from 'react';

import { CloudinaryUploadWidgetResults, CloudinaryUploadWidgetError, CloudinaryUploadWidgetInstanceMethods } from '@cloudinary-util/types';

type CloudinaryInstance = any;

interface UploadWidgetProps {
  children?: ({ open }: { open: CloudinaryUploadWidgetInstanceMethods["open"] }) => JSX.Element;
  onUpload?: (error: CloudinaryUploadWidgetError, result: CloudinaryUploadWidgetResults, widget?: CloudinaryUploadWidgetInstanceMethods) => void;
}

let cloudinary: CloudinaryInstance;

const UploadWidget = ({ children, onUpload }: UploadWidgetProps) => {
  const widgetRef = useRef<CloudinaryUploadWidgetInstanceMethods>();
  const cloudinaryRef = useRef<CloudinaryInstance>();

  useEffect(() => {
    // Store the Cloudinary window instance to a ref when the page renders

    if ( !cloudinaryRef.current ) {
      cloudinaryRef.current = (window as any).cloudinary;
    }

    // To help improve load time of the widget on first instance, use requestIdleCallback
    // to trigger widget creation. If requestIdleCallback isn't supported, fall back to
    // setTimeout: https://caniuse.com/requestidlecallback

    function onIdle() {
      if ( !widgetRef.current ) {
        widgetRef.current = createWidget();
      }
    }

    'requestIdleCallback' in window ? requestIdleCallback(onIdle) : setTimeout(onIdle, 1);

    return () => {
      widgetRef.current?.destroy();
      widgetRef.current = undefined;
    }
    // eslint-disable-next-line
  }, []);

  /**
   * createWidget
   * @description Creates a new instance of the Cloudinary widget and stores in a ref
   */

  function createWidget() {
    // Providing only a Cloud Name along with an Upload Preset allows you to use the
    // widget without requiring an API Key or Secret. This however allows for
    // "unsigned" uploads which may allow for more usage than intended. Read more
    // about unsigned uploads at: https://cloudinary.com/documentation/upload_images#unsigned_upload

    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

    if (!cloudName || !uploadPreset) {
      console.warn(`Kindly ensure you have the cloudName and UploadPreset 
      setup in your .env file at the root of your project.`)
    }
    const options = {
      cloudName,
      uploadPreset,
    }

    return cloudinaryRef.current?.createUploadWidget(options,
      function (error: CloudinaryUploadWidgetError, result: CloudinaryUploadWidgetResults) {
        // The callback is a bit more chatty than failed or success so
        // only trigger when one of those are the case. You can additionally
        // create a separate handler such as onEvent and trigger it on
        // ever occurrence
        if ((error || result.event === 'success') && typeof onUpload === 'function' ) {
          onUpload(error, result, widgetRef.current);
        }
      }
    );
  }

  /**
   * open
   * @description When triggered, uses the current widget instance to open the upload modal
   */

  function open() {
    if ( !widgetRef.current ) {
      widgetRef.current = createWidget();
    }
    widgetRef.current && widgetRef.current.open();
  }

  return (
    <>
      {typeof children === 'function' && children({ open })}
    </>
  )
}

export default UploadWidget;