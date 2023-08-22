import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Nav from "@/components/Nav/Nav";
import { motion } from "framer-motion";
import {useRef, useState, useEffect} from "react"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const videoRef = useRef(null);

  useEffect(()=>{
    console.log(videoRef?.current)
  }, [])

  return (
    <>
      <Head>
        <title>Saidia</title>
        <meta
          name="description"
          content="A resources website for the Saidia game"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Nav />
        <motion.img
          src={"/city.png"}
          alt={"Saidia"}
          className={styles.city}
          initial={{
            y: 400,
          }}
          animate={{
            y: 0,
          }}
          transition={{
            ease: "easeInOut",
            duration: 1.5,
          }}
        />
        <div className={styles.container}>
          <motion.img
            src={"/kayaFullBody.png"}
            className={styles.kayaFullBody}
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              ease: "easeInOut",
              duration: 1.5,
              delay: 1,
              stiffness: 50,
            }}
          />
          <div className={styles.saidiaTextContainer}>
            <motion.h1
              className={styles.saidiaText}
              initial={{
                opacity: 0,
                y: 400,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                ease: "easeInOut",
                duration: 1.5,
                delay: 0,
                stiffness: 50,
              }}
            >
              SAIDIA
            </motion.h1>
            <motion.h1
              className={styles.saidiaTextTop}
              initial={{
                opacity: 0,
                y: -400,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              transition={{
                ease: "easeInOut",
                duration: 1,
                delay: 2,
                stiffness: 180,
              }}
            >
              SAIDIA
            </motion.h1>
          </div>
        </div>

        {/* <video ref={videoRef} controls={false} loop autoPlay className={styles.video} muted>
          <source src="/saidiaVid.mp4" type="video/mp4" />
        </video> */}
      </main>
    </>
  );
}
