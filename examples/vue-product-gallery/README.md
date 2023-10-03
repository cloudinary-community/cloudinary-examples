# Vue Cloudinary Product Gallery Widget

You can use the Product Gallery widget to display an image gallery in your
application.

View Demo: [COLBY DEPLOY THIS ON NETLIFY PLS]

## 🧰 Using ProductGallery in a Vue project

1. To use the ProductGallery widget in a Vue app, first load its script( in `index.html` preferrably):

```html
<script src="https://product-gallery.cloudinary.com/all.js" type="text/javascript"></script>
```

This will add a `cloudinary` property to the `window` object which will contain
a `productWidget` method that you can use to initialize the widget.

2. In `CldProductGallery.vue`, we are finding images containing the tags "vue-product-gallery" and videos containing the tags "vue-product-gallery-vids". 
Make sure to add these tags to your images and videos in the cloudinary console.

<img src="./cloudinary-manage-tags.png"  height="350px" alt="manage tags in cloudinary" />

Alternatively, you can change the tag names in `CldProductGallery.vue` to match what the images and videos are tagged in your cloudinary console. Maybe have a dropdown to show the list of tags and show the dynamic gallery based on selection. Or, you can add params for tags and load multiple libraries of your choice!

## 🚀 Get Started with This Example

- Create an environment variable file `.env`, and inside it add:

```
VITE_CLOUDINARY_CLOUD_NAME="<Your Cloud Name>"
```

(Also ensure you have unticked "Resource List" from Restricted media types in [Settings > Security](https://console.cloudinary.com/settings/security))

## 🛠️ Vite + TS + Vue things

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Format the code using Prettier

```sh
npm run format
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
