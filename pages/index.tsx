import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import Nav from "@/components/Nav/Nav";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
        {/* <motion.div
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
          }}
          transition={{ ease: "easeInOut", duration: 1 }}
          className={styles.saidiaTitle}
        >
          <img
            src={"/saidiaTitle.png"}
            alt={"Saidia Title"}
            className={styles.saidiaText}
          />
        </motion.div>
        <motion.img
          src={"/kayaHead.png"}
          alt={"Saidia"}
          className={styles.saidiaHeadPic}
          initial={{
            y: 100,
            scale: 0,
          }}
          animate={{
            y: 0,
            scale: 1,
          }}
          transition={{
            ease: "easeInOut",
            duration: 1,
          }}
        /> */}
        <video controls={false} loop autoplay className={styles.video}>
          <source src="/saidiaVid.mp4" type="video/mp4" />
        </video>
      </main>
    </>
  );
}
