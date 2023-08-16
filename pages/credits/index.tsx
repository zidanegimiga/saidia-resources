import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./index.module.scss";
import Nav from "@/components/Nav/Nav";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <Head>
        <title>Saidia - Credits</title>
        <meta
          name="description"
          content="A resources website for the Saidia game"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Nav />
        <div className={styles.mainContentContainer}>
          <motion.img
            initial={{
              x: -150,
            }}
            animate={{
              x: 0,
            }}
            transition={{
              ease: "easeInOut",
              duration: 2,
            }}
            src="/kaya.png"
            className={styles.kayaImg}
          />
          <motion.div
            initial={{
              y: 50,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              ease: "easeInOut",
              duration: 2,
            }}
            className={styles.mainContent}
          >
            <div className={styles.aboutDescription}>
              <h1>SAIDIA CREDITS</h1>
              <p>
                Concept - <span>Adam Kiboi</span>
              </p>
              <p>
                Concept Development - <span>Liz Kilili, Bukonola Ngobi</span>
              </p>
              <p>
                Writer - <span>Thayu</span>
              </p>
              <p>
                Editor - <span>Adam Kiboi, Bukonola Ngobi</span>
              </p>
              <p>
                Illustration - <span>JR Pencil</span>
              </p>
              <p>
                Developer - <span> MRT </span>
              </p>
              <p>
                Research - <span>Steve Collins, Cynthia Atieno</span>
              </p>
              <p>
                Sound -
                <span>Martin &apos;Santuri&apos; Karugu, Wilson Mwangemi </span>
              </p>
              <p>
                Web Developers – <span>Zidane Gimiga, Henry Mutua </span>
              </p>
              <p>
                Support staff – 
                <span>
                  Faith Nyambura, Sonia Kamau, Diana Kavaya, Isaac Muriuki,
                  Frankie Muhoro, Steven Wanaina
                </span>
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
