import Header from "@/components/Header";
import { Inter } from "next/font/google";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

function MyApp({ Component, pageProps }) {
  return (
    <div className={inter.className}>
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
