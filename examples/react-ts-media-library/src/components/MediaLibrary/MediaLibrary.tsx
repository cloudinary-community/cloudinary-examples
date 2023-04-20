import { useRef, useEffect } from 'react';
import type { MediaLibraryOptions, MediaLibraryProps, MediaLibraryPropsOptions, MediaLibraryInsertResults } from './MediaLibrary.types';

const CLOUDINARY_CLOUD_NAME = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY = import.meta.env.VITE_CLOUDINARY_API_KEY;

const MediaLibrary = ({ children, onClose, onInsert, onOpen, options = {} }: MediaLibraryProps) => {
  const cloudinary: any = useRef();
  const widget: any = useRef();
  const widgetContainerRef: any = useRef();

  const {
    asset,
    buttonCaption,
    buttonClass,
    collection,
    defaultTransformations,
    folder,
    inlineContainer,
    insertCaption,
    maxFiles,
    multiple,
    removeHeader = false,
    search,
    transformation,
    username,
    zIndex,
  } = options as MediaLibraryPropsOptions;

  const callbackOptions = {
    cloudinary: cloudinary.current,
    widget: widget.current,
    close,
    open,
  }

  useEffect(() => {
    // Store the Cloudinary window instance to a ref when the page renders

    if ( !cloudinary.current && typeof window ) {
      cloudinary.current = (window as any).cloudinary;
    }

    // To help improve load time of the mediaLibrary on first instance, use requestIdleCallback
    // to trigger mediaLibrary creation. If requestIdleCallback isn't supported, fall back to
    // setTimeout: https://caniuse.com/requestidlecallback

    function onIdle() {
      if ( !widget.current ) {
        createWidget();
      }
    }

    'requestIdleCallback' in window ? requestIdleCallback(onIdle) : setTimeout(onIdle, 1);

    // eslint-disable-next-line
  }, []);

  /**
   * createWidget
   */

  function createWidget() {
    const mediaLibraryOptions: MediaLibraryOptions = {
      cloud_name: CLOUDINARY_CLOUD_NAME,
      api_key: CLOUDINARY_API_KEY,
      asset: asset,
      button_caption: buttonCaption,
      button_class: buttonClass,
      collection: collection,
      default_transformations: defaultTransformations,
      folder: folder,
      inline_container: inlineContainer,
      insert_caption: insertCaption,
      max_files: maxFiles,
      multiple: multiple,
      remove_header: removeHeader,
      search: search,
      transformation: transformation,
      username: username,
      z_index: zIndex,
    };

    widget.current = cloudinary.current.createMediaLibrary(mediaLibraryOptions,
      {
        showHandler: () => {
          if ( typeof onOpen === 'function' ) {
            onOpen(callbackOptions);
          }
        },
        hideHandler: () => {
          if ( typeof onClose === 'function' ) {
            onClose(callbackOptions);
          }
        },
        insertHandler: (data: MediaLibraryInsertResults) => {
          if ( typeof onInsert === 'function' ) {
            onInsert(data, callbackOptions)
          }
        }
      }
    );
  }

  /**
   * open
   */

  function open() {
    widget.current.show();
  }

  /**
   * close
   */

  function close() {
    widget.current.hide();
  }

  return (
    <>
      { typeof children === 'function' && children(callbackOptions) }
      <div ref={widgetContainerRef}></div>
    </>
  );
}

export default MediaLibrary;