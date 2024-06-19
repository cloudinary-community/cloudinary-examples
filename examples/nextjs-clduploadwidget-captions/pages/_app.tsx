import Header from '@/components/Header';
import { Inter } from 'next/font/google';
import type { AppProps } from 'next/app';
import '@/styles/globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700'],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Header />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
