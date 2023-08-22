import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from "next/font/local";

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
  return <>
      <style jsx global>{`
        :root {
          /* ... */
          --raster-font: ${raster.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
}
