<script setup>
import { AdvancedImage } from '@cloudinary/vue';
import { Cloudinary } from '@cloudinary/url-gen';

import CloudImage from "./components/CloudImage.vue";

import images from "./images.json";

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  },
});
</script>

<template>
  <main class="main">
    <div class="container">
      <h1 class="title">
        Cloudinary React SDK AdvancedImage Component
      </h1>
    </div>

    <div class="container">
      <h2>Default</h2>
      <p>No additional configuration or settings.</p>
      <ul class="images">
        <li v-for="image in images" :key="image.id">
          <AdvancedImage
            :width="image.width"
            :height="image.height"
            :cldImg="cld.image(image.image)"
            :alt="image.title"
          />
        </li>
      </ul>
    </div>

    <div class="container">
      <h2>Optimized</h2>
      <p>Format of auto (<code>f_auto</code>) and quality of auto (<code>q_auto</code>).</p>
      <ul class="images">
        <li v-for="image in images" :key="image.id">
          <AdvancedImage
            :width="image.width"
            :height="image.height"
            :cldImg="cld.image(image.image).delivery('q_auto').format('auto')"
            :alt="image.title"
          />
        </li>
      </ul>
    </div>

    <div class="container">
      <h2>Custom CloudImage Component</h2>
      <ul class="images">
        <li v-for="image in images" :key="image.id">
          <CloudImage
            :width="image.width"
            :height="image.height"
            :imageName="image.image"
            :alt="image.title"
          />
        </li>
      </ul>
    </div>

    <div class="container">
      <h2>Resources</h2>
      <p>
        <a href="https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/vue-advanced-image">See the code on github.com.</a>
      </p>
      <ul>
        <li v-for="image in images" :key="image.id">
          {{ image.title }}: <a :href="image.link" rel="noreferrer">{{ image.link }}</a>
        </li>
      </ul>
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

.images {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 3em;
}

.imageTitle {
  font-size: 1.4em;
  margin: .4em 0 0;
}
</style>
