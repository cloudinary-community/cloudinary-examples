<script>
	import { CldUploadWidget } from 'svelte-cloudinary';

	let info;
	let error;

	function onUpload(result, widget) {
		if (result.event === 'success') {
			info = result.info;
		} else if (result.event === 'error') {
			error = result.error;
		}

		widget.close();
	}
</script>

<svelte:head>
	<title>Svelte Cloudinary ClduploadWidget Component</title>
	<meta
		name="description"
		content="Find more Cloudinary examples at github.com/colbyfayock/cloudinary-examples"
	/>
</svelte:head>

<main>
	<div class="container">
		<h1 class="title">Svelte Cloudinary CldUploadWidget Component</h1>
	</div>

	<div class="container">
		<CldUploadWidget uploadPreset="svelte-cloudinary-unsigned" let:open let:isLoading {onUpload}>
			<button on:click={open} disabled={isLoading}> Upload an Asset </button>
		</CldUploadWidget>
		{#if error}
			<p>{error.status}</p>
		{/if}

		{#if info}
			<p>
				<img width={info.width} height={info.height} src={info.secure_url} alt="Uploaded image" />
			</p>
			<p>{info?.secure_url}</p>
		{/if}
	</div>

	<div class="container">
		<h2>Resources</h2>
		<p>
			<a
				href="https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/nextjs-clduploadwidget"
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

	.imageTitle {
		font-size: 1.4em;
		margin: 0.4em 0 0;
	}
</style>
