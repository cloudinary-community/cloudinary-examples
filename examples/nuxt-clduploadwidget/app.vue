<template>
  <!-- Usage of `CldUploadWidget.vue` component -->
  <CldUploadWidget
    v-slot="{ open }"
    upload-preset="nuxt-cloudinary-unsigned"
  >
    <button
      type="button"
      @click="open"
    >
      Upload an Image
    </button>
  </CldUploadWidget>
</template>
