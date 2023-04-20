import { useRef, useState, useEffect } from 'react';

interface MediaLibraryProps {
  children?: (options: MediaLibraryCallbackOptions) => JSX.Element;
  onClose?: Function;
  onError?: Function;
  onOpen?: Function;
  options?: object;
}

interface MediaLibraryCallbackOptions {
  cloudinary?: any;
  widget?: any;
  close?: Function;
  open?: Function;
  error?: string;
}

const MediaLibrary = ({ children, onClose, onError, onOpen, options }: MediaLibraryProps) => {
  const cloudinary: any = useRef();
  const widget: any = useRef();
  const widgetContainerRef: any = useRef();

  const [error, setError] = useState();

  const callbackOptions = {
    cloudinary: cloudinary.current,
    widget: widget.current,
    close,
    open,
    error,
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
    widget.current = cloudinary.current.createMediaLibrary(
      {
        cloud_name: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
        api_key: import.meta.env.VITE_CLOUDINARY_API_KEY,
        remove_header: false,
        max_files: "1",
        insert_caption: "Insert",
        ...options
      },
      {
        showHandler: (one: any, two: any) => {
          if ( typeof onOpen === 'function' ) {
            onOpen(callbackOptions);
          }
        },
        hideHandler: (one: any, two: any) => {
          if ( typeof onClose === 'function' ) {
            onClose(callbackOptions);
          }
        },
        // insertHandler: function (data) {
        //   data.assets.forEach((asset) => {
        //     console.log("Inserted asset:", JSON.stringify(asset, null, 2));
        //   });
        // }
      },
      document.getElementById("open-btn")
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