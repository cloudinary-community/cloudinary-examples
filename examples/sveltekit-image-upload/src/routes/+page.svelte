<script>
	import { enhance, applyAction } from '$app/forms';
	/** @type {import('./$types').ActionData} */
	export let form;

	let isLoading = false;
	function onSubmit() {
		isLoading = true;
		return async ({ result }) => {
			if (result.type === 'success') {
				isLoading = false;
			}
            await applyAction(result)
		};
	}
</script>



<main class="main">
	<div class="container">
		<h1 class="title">SvelteKit &amp; Cloudinary Upload Widget</h1>
	</div>

	<div class="container">
		<form method="POST" action="/" enctype="multipart/form-data" use:enhance={onSubmit}>
			<div class="card-body">
				<div class="form-control">
					<input
						name="file"
						type="file"
						class="file-input file-input-bordered file-input-info w-full max-w-xs"
					/>
				</div>
				<div class="form-control mt-6">
					<button class="btn btn-primary" type="submit" disabled={isLoading}
						>{#if isLoading} Uploading... {:else}Upload{/if}</button
					>
				</div>
			</div>
		</form>

		{#if form?.success && form?.image}
			<img src={form.image} class="max-w-sm rounded-lg shadow-2xl" alt="uploaded" />
		{/if}
		{#if isLoading}
			Uploading your image to Cloudinary...
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
