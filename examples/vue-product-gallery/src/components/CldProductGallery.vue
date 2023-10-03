<script setup lang="ts">
import { ref, onMounted } from 'vue'

// declare a ref to hold the element reference
// the name must match template ref value
const galleryRef = ref(null)

onMounted(() => {
  if (window && galleryRef) {
    window.cloudinary
      .galleryWidget({
        container: galleryRef.value,
        cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
        aspectRatio: '16:9',
        mediaAssets: [
          {
            // this can be any tag value that you have in your cloudinary account
            tag: 'vue-product-gallery',
            transformation: { crop: 'fill' }
          }, 
          {
            tag: "vue-product-gallery-vids",
            mediaType: "video",
            transformation: { crop: "fill" },
          }
        ]
      })
      .render()
  }
})
</script>

<template>
  <div ref="galleryRef"></div>
</template>
