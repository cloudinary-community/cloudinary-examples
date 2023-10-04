# Remix Cloudinary Product Gallery Widget

You can use the Product Gallery widget to display an image gallery in your
application.

View Demo: [COLBY DEPLOY THIS ON NETLIFY PLS]

## 🧰 Using ProductGallery in a Remix project

1. To use the ProductGallery widget in a Remix app, first load its script:

```
<script src="https://product-gallery.cloudinary.com/all.js" type="text/javascript">
</script>
```

This will add a `cloudinary` property to the `window` object which will contain
a `productWidget` method that you can use to initialize the widget.

2. In `app/routes/_index.tsx`, we are finding images containing the tags "gallery-images" and videos containing the tags "gallery-videos". Make sure to add these tags to your images and videos in the cloudinary console.
   <img width="1132" alt="image" src="https://github.com/geekysrm/cloudinary-examples/assets/10224804/fab69e46-46b3-4be1-a0a7-a62da7419932">

Alternatively, you can change the tag names in `app/routes/_index.tsx` to match what the images and videos are tagged in your cloudinary console.

## 🚀 Get Started with This Example

- Create an environment variable file `.env.` and inside add:

```
CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
```

- Install the project dependencies with:

```
yarn install
# or
npm install
```

- Start the development server with:

```
yarn dev
# or
npm run dev
```

- Visit the project at <http://127.0.0.1:3000/>!
