import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./index.module.scss";
import Nav from "@/components/Nav/Nav";

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
      <main className={styles.main}>
        <Nav />
        <div className={styles.mainContentContainer}>
          <div className={styles.mainContent}>
            <div className={styles.aboutDescription}>
              <p>
                Creatives Garage is a multi-disciplinary arts organization that
                provides a platform for creatives network, share ideas,
                collaborate, create new works, gain market access and push
                boundaries.
              </p>
              <p>
                We are unwavering in our commitment to creating content that is
                not only desired by the world but also necessary. We push
                boundaries, challenge censorship, and fearlessly bring African
                narratives to the forefront. Our dedication to empowering
                creatives, fostering a supportive community, and providing
                market platforms ensures that African creativity thrives and
                resonates globally.
              </p>
              <p>
                Creatives Garage was born from a dream to establish a space
                where creatives from diverse backgrounds could come together,
                network, collaborate, and push the boundaries of the creative
                scene. Since our establishment in 2013, we have successfully
                built a community of over 14,000 creatives, creating an
                environment reminiscent of a typical African village where
                multiple families contribute to the well-being of the whole
              </p>
            </div>
            <div className={styles.platformsBadges}>
              <p className={styles.platformText}>
                Saidia game is developed in partnership with:{" "}
              </p>
              <Image src={"/heinrich.png"} width={160} height={61.92} alt="" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
