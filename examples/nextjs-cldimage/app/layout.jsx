import '../styles/globals.css';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

export const metadata = {
  title: 'Next Cloudinary CldImage Component',
  description:
    'Find more Cloudinary examples at github.com/colbyfayock/cloudinary-examples',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
