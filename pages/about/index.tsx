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
            <img
            src="/kaya.png"
            className={styles.kayaImg}
            />
            <div className={styles.aboutDescription}>
              <p>
                Embark on an extraordinary journey with Kaya in &quot;Saidia:
                Embrace the Journey&quot; – a groundbreaking game where
                acceptance and understanding change lives!
              </p>
              <p>
                Join Kaya as she defies injustice and uplifts her community in
                Kenya. Help her find a safe haven and blaze a trail of
                empowerment. Build a supportive safe house and educate the
                community on LGBTQ issues.
              </p>
              <p>
                Confront dynamic challenges, triumph over hate, and witness the
                power of love and acceptance. Unleash your creativity in bonus
                dream levels and unlock Kaya&apos;s true potential!
              </p>
              <p>
                Ready to make a difference? Play &quot;Saidia: Embrace the
                Journey&quot; now and experience compassion in action!
              </p>
              <p>
                Embrace the Journey! Available on all platforms. Download now
                and change lives today!
              </p>
            </div>
            <div className={styles.platformsBadges}>
              <Image
                src={"/googlePlayBadge.png"}
                width={160}
                height={61.92}
                alt=""
              />
              <Image
                src={"/googlePlayBadge.png"}
                width={160}
                height={61.92}
                alt=""
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
