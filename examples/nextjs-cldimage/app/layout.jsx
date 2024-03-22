import Header from '../components/Header';
import '../styles/globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
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
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
