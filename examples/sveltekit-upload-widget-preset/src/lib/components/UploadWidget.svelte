<script>
	import { env } from '$env/dynamic/public';
	import { onMount } from 'svelte';

	/**
	 * Reference to the element that will render the widget
	 * @typedef {{close: () => void, open: () => void}} Widget
	 * @type {Widget} widget
	 */

	let widget;

	/**
	 * prop that allow the parent component to perform some action when upload process is done
	 * The default value is a simple loggin function
	 * @param {string} error
	 * @param {Object} result
	 * @param {Widget} widget
	 */

	export let onUpload = (error, result, widget) => {
		console.log('upload done', error, result, widget);
	};

	// Providing only a Cloud Name along with an Upload Preset allows you to use the
	// widget without requiring an API Key or Secret. This however allows for
	// "unsigned" uploads which may allow for more usage than intended. Read more
	// about unsigned uploads at: https://cloudinary.com/documentation/upload_images#unsigned_upload

	const cldOptions = {
		cloudName: env.PUBLIC_CLOUDINARY_CLOUD_NAME,
		uploadPreset: env.PUBLIC_CLOUDINARY_UPLOAD_PRESET
	};

	/**
	 * callback function to be executed when the widget is created
	 * @param {string} error
	 * @typedef {{ event: string}} Result
	 * @param {Result} result
	 */

	function cldCallback(error, result) {
		if (error || result.event === 'success') {
			onUpload && onUpload(error, result, widget);
		}
	}

	onMount(() => {
		// To help improve load time of the widget on first instance, use requestIdleCallback
		// to trigger widget creation. If requestIdleCallback isn't supported, fall back to
		// setTimeout: https://caniuse.com/requestidlecallback

		function onIdle() {
				if ( !widget ) {
						widget = window.cloudinary.createUploadWidget(cldOptions, cldCallback);
				}
		}

		'requestIdleCallback' in window ? requestIdleCallback(onIdle) : setTimeout(onIdle, 1);
	});

	function handleClick() {
		if (widget) {
			widget.open();
		}
	}
</script>

<button on:click|preventDefault={handleClick}> Upload an image </button>
