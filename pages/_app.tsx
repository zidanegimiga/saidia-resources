import { DarkModeProvider, useDarkMode } from '@/components/ThemeProvider';
import { SidebarProvider } from '@/hooks/SidebarContext';
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import localFont from "next/font/local";
import React, { createContext, useContext, useState } from 'react';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Layout from '@/components/Layout';


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
    <DarkModeProvider>
      <Layout>
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
      </Layout>

    </DarkModeProvider>
  )
}
