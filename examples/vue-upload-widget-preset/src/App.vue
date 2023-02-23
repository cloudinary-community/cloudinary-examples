<script setup>
import { ref } from "vue";
import UploadWidget from "./components/UploadWidget.vue";

const url = ref("");
const errorMessage = ref(false);

function onUpload({ error, result }) {
  url.value = result?.info.secure_url;
  errorMessage.value = error ? error : false;
}
</script>

<template>
  <main class="main">
    <div class="container">
      <h1 class="title">Vue.js &amp; Cloudinary Upload Widget</h1>
    </div>

    <div class="container">
      <h2>Unsigned with Upload Preset</h2>

      <UploadWidget @on-upload="onUpload" />

      <p v-if="error">{{ error.message }}</p>

      <p v-if="url">
        <img :src="url" alt="Uploaded resource" />
      </p>
      <p v-if="url">{{ url }}</p>
    </div>

    <div class="container">
      <h2>Resources</h2>
      <p>
        <a
          href="https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/vue-upload-widget-preset"
          >See the code on github.com.</a
        >
      </p>
    </div>
  </main>
</template>

<style scoped>
.container {
  width: 100%;
  max-width: 1024px;
  padding: 0 1em;
  margin: 0 auto;
}

.title {
  text-align: center;
  margin: 2em 0;
}

.subtitle {
  font-weight: normal;
  text-align: center;
  margin: -1em 0 2em;
}
</style>
