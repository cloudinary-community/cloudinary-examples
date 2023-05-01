import { error } from '@sveltejs/kit';
import { v2 as cloudinary } from 'cloudinary';
import { CLOUDINARY_API_SECRET, CLOUDINARY_API_KEY } from '$env/static/private';

cloudinary.config({
	cloud_name: 'tutorials',
	api_key: CLOUDINARY_API_KEY,
	api_secret: CLOUDINARY_API_SECRET,
	secure: true
});
/** @type {import('./$types').Actions} */
export const actions = {
	default: async ({ request }) => {
		try {
			/*
			 * @type {FormData}
			 */
			const formData = await request.formData();
			/**
			 * @type {File}
			 */
			const fileData = await formData.get('file');
			const arrayBuffer = await fileData.arrayBuffer();
			const buffer = new Uint8Array(arrayBuffer);
			const uploadStream = await new Promise((resolve, reject) => {
				cloudinary.uploader
					.upload_stream({}, function (error, result) {
						if (error) {
							return reject(error);
						}
						return resolve(result);
					})
					.end(buffer);
			});

			return { success: true, image: uploadStream.url };
		} catch (er) {
			console.error(er);
			return error(er);
		}
	}
};
