<script>
  import {onMount} from 'svelte'

  onMount(() => {
		const gallery = document.getElementById('gallery');

    if (window && gallery) {
      window.cloudinary
        .galleryWidget({
          container: gallery,
          cloudName: import.meta.env.VITE_CLOUDINARY_CLOUD_NAME,
          aspectRatio: "16:9",
          mediaAssets: [
            {
              tag: "gallery-images",
              transformation: { crop: "fill" },
            },
            {
              tag: "gallery-videos",
              mediaType: "video",
              transformation: { crop: "fill" },
            },
          ],
        })
        .render();
    }
		
	});
</script>

<main class="main">
      <div class="container">
        <h1 class="title">Svelte &amp; Cloudinary Product Gallery</h1>
      </div>

      <div class="container">
        <div id="gallery" />
      </div>

      <div class="container">
        <h2>Resources</h2>
        <p>
          <a href="https://github.com/cloudinary-community/cloudinary-examples/tree/main/examples/svelte-product-gallery">
            See the code on github.com.
          </a>
        </p>
      </div>
</main>

<style>
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
</style>
