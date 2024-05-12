<script>
  import { CldImage } from "svelte-cloudinary"
  import { getContext } from "svelte"

  const products = getContext("products")
</script>

<main>
  <div class="container">
    <div class="single-image">
      <CldImage
        width={960}
        height={600}
        src="demo/red-sneaker"
        alt="Color pair of sneakers"
      />
      <span class="single-image__unsplash">
        unsplash.com/photos/red-converse-all-star-high-top-sneaker-0BKZfcamvGg
      </span>
    </div>
    <div class="images_list">
      {#each products as product (product["public-id"])}
        <div class="images__item">
          <CldImage
            width={960}
            height={600}
            src={product["public-id"]}
            alt={product.alt}
            overlays={[
              {
                text: {
                  text: "Brand",
                  color: "white",
                  fontFamily: "Poppins",
                  fontSize: 100,
                  fontWeight: "black",
                },
                effects: [{
                    opacity: 50
                }]
              },
            ]}
          />
          <span class="images__item__unsplash">
            {product.unsplash}
          </span>
        </div>
      {/each}
    </div>
  </div>
</main>

<style>
  .images_list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    margin-top: 50px;
  }
  .images__item,
  .single-image {
    box-shadow: 1px 1px 10px color-mix(in srgb, black, transparent 90%);
  }

  .images__item__unsplash,
  .single-image__unsplash {
    font-size: 10px;
    display: block;
    padding: 10px 20px;
  }
</style>
