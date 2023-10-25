import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from "next/font/local";
import { useEffect, useState } from 'react';

// Load font
const raster = localFont({
  src: [
    {
      path: "../public/rasticRaster.ttf",
      // weight: "400",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (<div>
    <style jsx global>{`
        :root {
          /* ... */
          --raster-font: ${raster.style.fontFamily};
        }
      `}</style>
    <Component {...pageProps} />
  </div>)
}
