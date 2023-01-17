<script>
	import UploadWidget from '$lib/components/UploadWidget.svelte';

	/**
	 * @type {string | null}
	 */
	let url = null;
	/**
	 * @type {string | null}
	 */
	let error = null;

	/**
	 * Handle the event after upload is done (success or failed)
	 * @param {string} err
	 * @param {Object} result
	 * @param {Object} widget
	 */
	function onUpload(err, result, widget) {
		if (err) {
			console.error(err);
			// Update the error
			error = err;
			widget.close({ quiet: true });
			return;
		}
		// Update the url
		url = result.info.secure_url;
	}
</script>

<main class="main">
	<div class="container">
		<h1 class="title">SvelteKit &amp; Cloudinary Upload Widget</h1>
	</div>

	<div class="container">
		<h2>Unsigned with Upload Preset</h2>
		<UploadWidget {onUpload} />
		{#if error}
			<p>{error}</p>
		{/if}

		{#if url}
			<p><img src={url} alt="Uploaded" /></p>
			<p>{url}</p>
		{/if}
	</div>

	<div class="container">
		<h2>Resources</h2>
		<p>
			<a
				href="https://github.com/colbyfayock/cloudinary-examples/tree/main/examples/sveltekit-upload-widget-preset"
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
