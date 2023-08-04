import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.scss'
import Nav from '@/components/Nav/Nav'

const inter = Inter({ subsets: ['latin'] })

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
        <div className={styles.saidiaTitle}>
          <img
            src={"/saidiaTitle.png"}
            alt={"Saidia Title"}
            className={styles.saidiaText}
          />
        </div>
        <img
          src={"/kayaHead.png"}
          alt={"Saidia"}
          className={styles.saidiaHeadPic}
        />
      </main>
    </>
  );
}
