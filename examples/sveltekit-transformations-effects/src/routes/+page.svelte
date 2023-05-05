<script>
	import { Cloudinary } from '@cloudinary/url-gen';
	import { PUBLIC_CLOUDINARY_CLOUD_NAME } from '$env/static/public';

	import images from '../images.json';

	const cld = new Cloudinary({
		cloud: {
			cloudName: PUBLIC_CLOUDINARY_CLOUD_NAME
		}
	});
</script>

<div class="container">
	<h1 class="title">
		Cloudinary SvelteKit Transformations & Effects
	</h1>
</div>

<div class="container">
	<h2>Optimization</h2>
	<p>Format of auto (<code>f_auto</code>) and quality of auto (<code>q_auto</code>).</p>
	<ul class="images">
		{#each images.slice(0, 4) as image}
			<li>
				<img
					width={image.width}
					height={image.height}
					src={cld.image(image.image).quality('auto').format('auto').toURL()}
					alt={image.title}
					loading="lazy"
				/>
			</li>
		{/each}
	</ul>
</div>

<div class="container">
	<h2>Resources</h2>
	<p>
		<a href="https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/sveltekit-transformations-effects">See the code on github.com.</a>
	</p>
	<ul>
		{#each images.slice(0, 4) as image}
			<li>
				{ image.title }: <a href={image.link} rel="noreferrer">{image.link}</a>
			</li>
		{/each}
	</ul>
</div>

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

	.images {
		list-style: none;
		padding: 0;
		margin: 0;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		grid-gap: 3em;
	}
</style>
