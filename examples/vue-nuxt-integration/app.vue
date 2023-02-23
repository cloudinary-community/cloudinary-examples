<script setup>
const imageUrl = "/upload-demo/aredqpoe5ohy6eipzpmh.jpg"
</script>

<template>
  <div>
    <nuxt-img 
      provider="cloudinary"
      :src="imageUrl"
      width="100"
      :modifiers="{ roundCorner: 'max', effect: 'grayscale' }"
    />
  </div>
</template>
