<script>
import { ref } from 'vue'

const cloudinary = ref(undefined);
const widget = ref(undefined);

export default {
  name: 'UploadWidget',
  props: {
    onUpload: Function,
  },
  created() {
    // Store the Cloudinary window instance to a ref when the page renders

    if ( !cloudinary.value ) {
      cloudinary.value = window.cloudinary;
    }

    // To help improve load time of the widget on first instance, use requestIdleCallback
    // to trigger widget creation. If requestIdleCallback isn't supported, fall back to
    // setTimeout: https://caniuse.com/requestidlecallback

    const onIdle = () => {
      if ( !widget.value ) {
        widget.value = this.createWidget();
      }
    }

    'requestIdleCallback' in window ? requestIdleCallback(onIdle) : setTimeout(onIdle, 1);
  },
  methods: {
    createWidget() {
      // Providing only a Cloud Name along with an Upload Preset allows you to use the
      // widget without requiring an API Key or Secret. This however allows for
      // "unsigned" uploads which may allow for more usage than intended. Read more
      // about unsigned uploads at: https://cloudinary.com/documentation/upload_images#unsigned_upload

      const options = {
        cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME, // Ex: mycloudname
        uploadPreset: import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET, // Ex: myuploadpreset
      }

      return cloudinary.value.createUploadWidget(options,
        (error, result) => {
          // The callback is a bit more chatty than failed or success so
          // only trigger when one of those are the case. You can additionally
          // create a separate handler such as onEvent and trigger it on
          // ever occurance
          if ( error || result.event === 'success' ) {
            this.$emit('on-upload', { error, result, widget: widget.value });
          }
        }
      );
    },
    onClick() {
      if ( !widget.value ) {
        widget.value = this.createWidget();
      }
      widget.value && widget.value.open();
    }
  }
}
</script>

<template>
  <button @click="onClick()">Upload</button>
</template>