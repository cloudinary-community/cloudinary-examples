<script setup>
import { AdvancedImage } from "@cloudinary/vue";
import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({
  cloud: {
    cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
  },
});

const props = defineProps({
  alt: String,
  height: String,
  imageName: String,
  width: String,
});

const myImg = cld.image(props.imageName).delivery('q_auto').format('auto');
</script>

<template>
  <AdvancedImage
    :width="props.width"
    :height="props.height"
    :cldImg="myImg"
    :alt="props.alt"
  />
</template>