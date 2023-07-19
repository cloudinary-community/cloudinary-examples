<script lang="ts">
	import { CldImage } from 'svelte-cloudinary';
	import images from '../images.json';
  const TITLE = "Svelte Cloudinary CldImage Component";
</script>

<svelte:head>
	<title>{TITLE}</title>
	<meta
		name="description"
		content="Find more Cloudinary examples at github.com/colbyfayock/cloudinary-examples"
	/>
	<link rel="icon" href="/favicon.ico" />
</svelte:head>

<main class="main">
	<div class="container">
		<h1 class="title">{TITLE}</h1>
	</div>

	<div class="container">
		<h2 class="subtitle">Default</h2>
		<ul class="images">
			{#each images as image}
				<li>
					<CldImage width={image.width} height={image.height} src={image.image} alt={image.title} />
				</li>
			{/each}
		</ul>
	</div>

	<div class="container">
		<h2 class="subtitle">Uniform Cropping</h2>
		<ul class="images">
			{#each images as image}
				<li>
					<CldImage width="600" height="600" crop="fill" src={image.image} alt={image.title} />
				</li>
			{/each}
		</ul>
	</div>

	<div class="container">
		<h2 class="subtitle">With Effects</h2>
		<ul class="images">
			{#each images as image}
				<li>
					<CldImage
						width="600"
						height="600"
						crop="fill"
						src={image.image}
						alt={image.title}
						tint="equalize:80:blue:blueviolet"
						overlays={[
							{
								crop: 'fit',
								width: 500,
								text: {
									color: 'white',
									fontFamily: 'Source Sans Pro',
									fontSize: 100,
									fontWeight: 'bold',
									text: image.title
								}
							}
						]}
					/>
				</li>
			{/each}
		</ul>
	</div>

	<div class="container">
		<h2>Resources</h2>
		<p>
			<a
				href="https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/sveltekit-cldimage"
				>See the code on github.com.</a
			>
		</p>
		<ul>
			<li>
				Svelte Cloudinary: <a href="https://svelte-cloudinary.vercel.app/"
					>https://svelte-cloudinary.vercel.app/</a
				>
			</li>
			{#each images as image}
				<li>
					{image.title}: <a href={image.link} rel="noreferrer">{image.link}</a>
				</li>
			{/each}
		</ul>
	</div>
</main>

<style>
	.container {
		width: 100%;
		max-width: 1024px;
		padding: 0 1em;
		margin: 0 auto;
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
