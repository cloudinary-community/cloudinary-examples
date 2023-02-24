<script setup>
import './style.css';
import images from './images.json';
</script>

<template>
  <main class="main">
    <div class="container">
      <h1 class="title">
        Nuxt Image with Cloudinary Provider
      </h1>
    </div>

    <div class="container">
      <h2>Default</h2>
      <p>No additional configuration or settings.</p>
      <ul class="images">
        <li v-for="image in images" :key="image.id">
          <nuxt-img
            provider="cloudinary"
            :src="image.image"
            :width="image.width"
            :height="image.height"
            :alt="image.title"
          />
        </li>
      </ul>
    </div>

    <div class="container">
      <h2>Transformations</h2>
      <p>Grayscale, rounded corners</p>
      <ul class="images">
        <li v-for="image in images" :key="image.id">
          <nuxt-img
            provider="cloudinary"
            :src="image.image"
            :width="image.width"
            :height="image.height"
            :alt="image.title"
            :modifiers="{
              roundCorner: 150,
              effect: 'grayscale'
            }"
          />
        </li>
      </ul>
    </div>

    <div class="container">
      <h2>Resources</h2>
      <ul>
        <li>
          <a href="https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/nuxt-nuxt-image-provider">
            View Code on GitHub.com
          </a>
        </li>
        <li>
          <a href="https://image.nuxtjs.org/providers/cloudinary">
            Nuxt Image Cloudinary Provider
          </a>
        </li>
      </ul>
      <h2>Images</h2>
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
