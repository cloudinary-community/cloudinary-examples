<script>
	import { CldUploadWidget } from 'svelte-cloudinary';

	let info;
	let infoSecure;
	let error;
	let errorSecure

	function onUpload(result, widget) {
		if (result.event === 'success') {
			info = result.info;
		} else if (result.event === 'error') {
			error = result.error;
		}

		widget.close();
	}

	function onUploadSecure(result, widget) {
		if (result.event === 'success') {
			infoSecure = result.info;
		} else if (result.event === 'error') {
			errorSecure = result.error;
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
		<h1 class="title">Unsigned Upload</h1>
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
		<h1 class="title">Signed Upload</h1>
		<CldUploadWidget uploadPreset="svelte-cloudinary-signed" let:open let:isLoading onUpload={onUploadSecure} signatureEndpoint="/api/">
			<button on:click={open} disabled={isLoading}> Secure Upload an Asset </button>
		</CldUploadWidget>
		{#if errorSecure}
			<p>{errorSecure.status}</p>
		{/if}

		{#if infoSecure}
			<p>
				<img width={infoSecure.width} height={infoSecure.height} src={infoSecure.secure_url} alt="Uploaded image" />
			</p>
			<p>{infoSecure?.secure_url}</p>
		{/if}
	</div>

	<div class="container">
		<h2>Resources</h2>
		<p>
			<a
				href="https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/svelte-clduploadwidget"
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
