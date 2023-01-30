<script setup>
import { AdvancedImage } from "@cloudinary/vue";
import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  },
});

console.log('import.meta.env.VITE_CLOUDINARY_CLOUD_NAME', import.meta.env.VITE_CLOUDINARY_CLOUD_NAME)

const props = defineProps({
  imageName: String,
});

const myImg = cld.image(props.imageName);
</script>

<template>
  <AdvancedImage :cldImg="myImg" />
</template>