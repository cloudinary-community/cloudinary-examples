import '../styles/globals.css';

export const metadata = {
  title: 'Next Cloudinary CldImage Component',
  description:
    'Find more Cloudinary examples at github.com/colbyfayock/cloudinary-examples',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
