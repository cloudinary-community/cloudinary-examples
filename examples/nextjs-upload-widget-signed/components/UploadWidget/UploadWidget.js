import Script from 'next/script';

let cloudinary;
let widget;

const UploadWidget = ({ children, onUpload }) => {
  /**
   * handleOnLoad
   * @description Stores the Cloudinary window instance to a ref when the widget script loads
   */

  function handleOnLoad() {
    if ( !cloudinary ) {
      cloudinary = window.cloudinary;
    }

    // To help improve load time of the widget on first instance, use requestIdleCallback
    // to trigger widget creation. If requestIdleCallback isn't supported, fall back to
    // setTimeout: https://caniuse.com/requestidlecallback

    function onIdle() {
      if ( !widget ) {
        widget = createWidget();
      }
    }

    'requestIdleCallback' in window ? requestIdleCallback(onIdle) : setTimeout(onIdle, 1);
  }

  /**
   * generateSignature
   * @description Makes a request to an endpoint to sign Cloudinary parameters as part of widget creation
   */

  function generateSignature( callback, paramsToSign ) {
    fetch(`/api/sign-cloudinary-params`, {
      method: 'POST',
      body: JSON.stringify({
        paramsToSign
      })
    }).then(r => r.json())
      .then(({ signature }) => {
        callback(signature)
      });
  }

  /**
   * createWidget
   * @description Creates a new instance of the Cloudinary widget and stores in a ref
   */

  function createWidget() {
    // When creating a signed upload, you need to provide both your Cloudinary API Key
    // as well as a signature generator function that will sign any paramters
    // either on page load or during the upload process. Read more about signed uploads at:
    // https://cloudinary.com/documentation/upload_widget#signed_uploads

    const options = {
      cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME, // Ex: mycloudname
      apiKey: process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY, // Ex: 1234567890
      uploadSignature: generateSignature,
    }

    return cloudinary?.createUploadWidget(options,
      function (error, result) {
        // The callback is a bit more chatty than failed or success so
        // only trigger when one of those are the case. You can additionally
        // create a separate handler such as onEvent and trigger it on
        // ever occurance
        if ( error || result.event === 'success' ) {
          onUpload(error, result, widget);
        }
      }
    );
  }

  /**
   * open
   * @description When triggered, uses the current widget instance to open the upload modal
   */

  function open() {
    if ( !widget ) {
      widget = createWidget();
    }

    widget && widget.open();
  }

  return (
    <>
      {children({ cloudinary, widget, open })}
      <Script id="cloudinary" src="https://widget.cloudinary.com/v2.0/global/all.js" onLoad={handleOnLoad} />
    </>
  )
}

export default UploadWidget;