import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./index.module.scss";
import Nav from "@/components/Nav/Nav";
import { motion } from "framer-motion"
import MarketingVideo from "@/components/marketingVideo";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <Head>
        <title>Saidia - About</title>
        <meta
          name="description"
          content="A resources website for the Saidia game"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <MarketingVideo />
      <main className={styles.main}>
        <div className={styles.mainContentContainer}>
          < motion.img 
          initial={{
            x: -150
          }}
          animate={{
            x: 0
          }}
          transition={{
            ease: "easeInOut",
            duration: 2
          }}
          src="/kaya.png" className={styles.kayaImg}/>
          <motion.div 
          initial={{
            y: 50,
            opacity: 0
          }}
          animate={{
            y: 0,
            opacity: 1
          }}
          transition={{
            ease: "easeInOut",
            duration: 2
          }}
          className={styles.mainContent}>
            <div className={styles.aboutDescription}>
              <h3 style={{color: "black"}}>About</h3>
              <p>Kaya, a transgender woman, has recently faced an unjust eviction from her home because her landlord
                suspects her gender identity. She had been offering shelter to several queer individuals who had been evicted from their homes for living authentically. In Saidia, you assist Kaya in navigating her life as a trans woman in Kenya, as she strives to improve her own circumstances and make a positive impact on the lives of others.</p>
              <p>Welcome to Saidia, where the game isn’t just about leveling up; it’s about levelling the playing field for the LGBTQ+ community in Kenya! Join Kaya and her friends on an epic 2D RPG journey that’s all about life, love, and navigating the twists and turns of being a queer Kenyan.</p>
              <p>In Saidia, you’ll delve into a rich narrative that explores the difficulties, triumphs, and everyday moments that shape the lives of LGBTQ+ individuals in Kenya.. Hang out with diverse characters, have heart-to-hearts, and make choices that steer Kaya’s tale in this game-meets-reality adventure that’s a catalyst for understanding.</p>
              <p>Through Kaya’s journey, face challenges head-on, play, explore, and maybe even change your perspective a bit. Saidia isn’t just about scoring points; it’s an opportunity to delve into a world of diversity and gain a deeper understanding of the experiences in Kenya.</p>
              <p>Saidia challenges you to elevate yourself while also uplifting the surrounding community. The goal is to collect money, acquire skills, protect the environment and support the queer community. As you navigate the game, your choices will directly influence your own development and the well-being of those around you.</p>
            </div>
            <div className={styles.platformsBadges}>
              <img
                src={"/googlePlayBadge.png"}
                alt=""
                className={styles.platformBadge}
              />
              <img
                src={"/appleStoreBadge.svg"}
                alt=""
                className={styles.applePlatformBadge}
              />
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
