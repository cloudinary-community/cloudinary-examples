import Header from '@/components/Header';
import '../styles/globals.css';
import { Toaster } from 'sonner';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <Toaster richColors position="top-right" />
        {children}
      </body>
    </html>
  );
}
