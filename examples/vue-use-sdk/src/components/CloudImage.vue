<script setup>
import { AdvancedImage } from "@cloudinary/vue";
import { Cloudinary } from "@cloudinary/url-gen";

const cld = new Cloudinary({
  cloud: {
    cloudName: "demo",
  },
});

const props = defineProps({
  imageName: String,
});

const myImg = cld.image(props.imageName);
</script>

<template>
  <AdvancedImage :cldImg="myImg" />
</template>