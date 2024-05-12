<script>
  import { setContext } from "svelte"
  import Header from "$lib/Header.svelte"
  import "./styles.css"

  setContext("products", [
    {
      "public-id": "demo/grey-pants",
      name: "Grey pants",
      alt: "Man wearing grey pants",
      unsplash:
        "unsplash.com/photos/man-wearing-brown-fitted-jeans-and-sneakers-standing-on-road-at-daytime-jC7nVH_Sw8k",
    },
    {
      "public-id": "demo/white-shirt",
      name: "White shirt",
      alt: "White shirt on hanger",
      unsplash: "unsplash.com/photos/white-crew-neck-t-shirt-acn5ERAeSb4",
    },
    {
      name: "Red sneaker",
      "public-id": "demo/red-sneaker",
      alt: "Red sneaker with white sole hanging in air",
      unsplash:
        "unsplash.com/photos/red-converse-all-star-high-top-sneaker-0BKZfcamvGg",
    },
    {
      name: "Grey shirt",
      "public-id": "demo/grey-shirt",
      alt: "Man wearing grey shirt",
      unsplash:
        "unsplash.com/photos/smiling-man-swearing-gray-sweater-and-black-bottoms-standing-and-looking-his-right-side-5b9cjjgjXKE",
    },
    {
      name: "Colorful Sneakers",
      "public-id": "demo/colorful-sneaker",
      alt: "Color pair of sneakers",
      unsplash:
        "unsplash.com/photos/white-and-blue-nike-air-force-1-high-jvoZ-Aux9aw",
    },
    {
      name: "Pink Jacket",
      "public-id": "demo/pink-jacket",
      alt: "Lady on pink jacket",
      unsplash:
        "unsplash.com/photos/women-wearing-pink-hoodie-jacket-close-up-photography-g5GXUqF_QDI",
    },
  ])
</script>

<div class="app">
  <Header />
  <slot />
</div>
