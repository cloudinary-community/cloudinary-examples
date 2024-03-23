<script>
	import { CldImage } from 'svelte-cloudinary';
</script>

<h1>Svelte Cloudinary Lazy Loading Images</h1>

<div>
	<CldImage
		width="2400"
		height="1254"
		crop="fill"
		src={`images/galaxy`}
		sizes="100w"
		effects={[
			{
				background: 'rgb:010A44'
			},
			{
				color: 'rgb:2A005F',
				colorize: '100'
			},
			{
				gradientFade: 'symmetric'
			}
		]}
		overlays={[
			{
				publicId: `images/galaxy`,
				width: 2400,
				height: 1254,
				crop: 'fill',
				effects: [{ opacity: 20 }]
			},
			{
				width: 2000,
				crop: 'fit',
				text: {
					color: 'white',
					fontFamily: 'Merriweather',
					fontSize: 116,
					fontWeight: 'bold',
					lineSpacing: 20,
					text: 'Svelte Cloudinary: Lazy Loading Images'
				},
				position: {
					x: 200,
					y: 200,
					gravity: 'north_west'
				}
			},
			{
				publicId: `images/galaxy`,
				width: 2000,
				height: 4,
				effects: [
					{
						colorize: '100,co_white',
						opacity: 70
					}
				],
				position: {
					x: 200,
					y: 350,
					gravity: 'south_west'
				}
			},
			{
				width: 1400,
				crop: 'fit',
				text: {
					color: 'white',
					fontFamily: 'Lato',
					fontSize: 74,
					fontWeight: 'bold',
					text: 'Svelte Cloudinary'
				},
				position: {
					x: 360,
					y: 200,
					gravity: 'south_west'
				}
			}
		]}
		alt="Svelte Cloudinary Lazy Loading Images"
		priority
	/>

	<CldImage src="images/galaxy" height="1000" width="1000" alt="galaxy" />
	<CldImage src="images/turtle" height="1000" width="1000" alt="turtle" />
	<CldImage src="images/mountain" height="1000" width="1000" alt="turtle" />
	<CldImage src="images/woman-headphones" height="1000" width="1000" alt="turtle" />
	<CldImage src="images/sneakers" height="1000" width="1000" alt="turtle" />
	<CldImage src="images/earth" height="1000" width="1000" alt="turtle" />
</div>

<style>
	div {
		display: flex;
		justify-content: space-between;
		list-style: none;
		flex-direction: column;
        gap: 20px;
	}
</style>
