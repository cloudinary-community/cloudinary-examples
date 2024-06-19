export default function Footer() {
  return (
    <div className="border-t pt-8">
      <h2 className="mb-3 text-2xl font-bold">Resources</h2>
      <p className="mb-2">
        <a
          href="https://github.com/cloudinary-community/cloudinary-examples/tree/main/examples/nextjs-clduploadwidget-captions"
          className="text-blue-800 hover:underline"
          target="_blank"
        >
          See the code on github.com
        </a>
      </p>
      <p className="mb-2">
        <a
          href="https://cloudinary.com/documentation/cloudinary_ai_content_analysis_addon#ai_based_image_captioning"
          className="text-blue-800 hover:underline"
          target="_blank"
        >
          Read the docs
        </a>
      </p>
      <p>
        Next Cloudinary:{' '}
        <a
          href="https://next.cloudinary.dev/"
          className="text-blue-800 hover:underline"
          target="_blank"
        >
          https://next.cloudinary.dev
        </a>
      </p>
    </div>
  );
}
