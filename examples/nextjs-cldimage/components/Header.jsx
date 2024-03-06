export default function Header() {
  return (
    <header className='mb-12 mt-0 w-full bg-blue-950 py-4 text-center text-white'>
      <div className='mx-auto flex max-w-screen-lg flex-col items-center justify-between px-4 sm:flex-row'>
        <h1 className='flex items-center gap-3 text-xl font-semibold'>
          <a
            href='https://next.cloudinary.dev'
            className='text-blue-200 underline-offset-2 hover:underline'
            target='_blank'
          >
            Next Cloudinary
          </a>
          <code className='font-mono text-lg'>{`<CldImage />`}</code>
        </h1>
        <ul>
          <li>
            <a
              className='text-sm'
              href='https://github.com/cloudinary-community/cloudinary-examples/tree/main/examples/nextjs-cldimage'
              target='_blank'
            >
              View on GitHub
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
