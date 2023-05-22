import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={` ${inter.className} flex flex-col p-5`}>
      <Navbar/>
      <Component {...pageProps} />
    </div>
  );
}
