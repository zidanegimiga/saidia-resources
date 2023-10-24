import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from "next/font/local";
import { useEffect } from 'react';

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
  useEffect(()=>{
    console.log("App loaded")
    window.localStorage.setItem('token', "777")
    const token = window.localStorage.getItem('token')
    console.log("Got token: ", token)
  }, [])
  return (<>
      <style jsx global>{`
        :root {
          /* ... */
          --raster-font: ${raster.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>)
}
