import { SidebarProvider } from '@/hooks/SidebarContext';
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import localFont from "next/font/local";
import React, { createContext, useContext, useState } from 'react';

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
  return (
    <SidebarProvider>
      <div>
        <style jsx global>{`
        :root {
          /* ... */
          --raster-font: ${raster.style.fontFamily};
        }
      `}</style>
        <Component {...pageProps} />
      </div>
    </SidebarProvider>
  )
}
