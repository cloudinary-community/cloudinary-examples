# Solid Cloudinary Product Gallery Widget

You can use the Product Gallery widget to display an image gallery in your
application.

View Demo: [COLBY DEPLOY THIS ON NETLIFY PLS]

## 🧰 Using ProductGallery in a Solid project

To use the ProductGallery widget in a Svelte app, first load its script:

```
<script src="https://product-gallery.cloudinary.com/all.js" type="text/javascript">
</script>
```

This will add a `cloudinary` property to the `window` object which will contain
a `productWidget` method that you can use to initialize the widget.

## 🚀 Get Started with This Example

- Create an environment variable file `.env` or copy/rename `sample.env` and inside add:

```
VITE_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
```

(Also ensure you have unticked "Resource List" from Restricted media types in [Settings > Security](https://console.cloudinary.com/settings/security))

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

- Visit the project at <http://127.0.0.1:5173/>!