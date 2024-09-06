import type { Metadata } from 'next';
import type { PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Next Cloudinary CldUploadWidget - Signed Upload Example',
  description:
    'Find more Cloudinary examples at github.com/cloudinary-community/cloudinary-examples',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
