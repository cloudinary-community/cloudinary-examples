import { Inter } from "next/font/google";
import Header from "@/components/Header";
import type { AppProps } from "next/app";
import "next-cloudinary/dist/cld-video-player.css";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inter.className}>
      <Header />
      <Component {...pageProps} />
    </main>
  );
}
