<script setup>
const widget = window.cloudinary.createUploadWidget(
  {
    cloud_name: "kc-cloud",
    upload_preset: "upload-demo",
  },
  (error, result) => {
    if (!error && result && result.event === "success") {
      console.log("Done uploading ... ", result.info);
    }
  }
);

function openUploadWidget() {
  widget.open();
}
</script>

<template>
  <h1>Upload some images</h1>
  <button @click="openUploadWidget()">Upload</button>
</template>


