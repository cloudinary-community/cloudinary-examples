<script setup lang="ts">
import CldProductGallery from './components/CldProductGallery.vue'
</script>

<template>
  <main className="main">
    <div className="container">
      <h1 className="title">Vue Cloudinary Product Gallery</h1>
    </div>

    <div className="container">
      <CldProductGallery />
    </div>

    <div className="container">
      <h2>Resources</h2>
      <p>
        <a
          href="https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/vue-product-gallery"
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
  margin: 3em auto;
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
