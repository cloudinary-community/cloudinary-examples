<script>
	import { Cloudinary } from '@cloudinary/url-gen';
	import { scale } from '@cloudinary/url-gen/actions/resize';
	const cld = new Cloudinary({
		cloud: {
			cloudName: 'tutorials'
		}
	});
	// Instantiate a CloudinaryImage object for a image with public ID
	const myImage = cld.image('cld-sample-5');
	// Perform transformations
	myImage.format('auto').quality('auto');

</script>

<main class="main">
	<div class="container">
		<h1 class="title">SvelteKit &amp; Cloudinary Client SDK</h1>
	</div>

	<div class="container">
		<div>
			<h2>Auto format, Auto Quality</h2>
			<img src={myImage.toURL()} alt="cloudinary image" width={300} />
		</div>
	</div>

	<div class="container">
		<h2>Resources</h2>
		<p>
			<a
				href="https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/sveltekit-client-sdk"
				>See the code on github.com.</a
			>
		</p>
	</div>
</main>

<style>
	.container {
		width: 100%;
		max-width: 1024px;
		padding: 0 1em;
		margin: 0 auto;
		display: flex;
		alig-items: center;
	}

	.title {
		text-align: center;
		margin: 2em 0;
	}

	.subtitle {
		font-weight: normal;
		text-align: center;
		margin: -1em 0 2em;
	}

	.images {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-gap: 3em;
	}

	.imageTitle {
		font-size: 1.4em;
		margin: 0.4em 0 0;
	}
</style>
