import React from "react";
import styles from "./guides.module.scss"
import Nav from "@/components/Nav/Nav";
import Head from "next/head";
import Link from "next/link";

export default function Guides(){
    return (
      <div className={styles.pageWrapper}>
        <Head>
          <title>Saidia - Guides</title>
          <meta
            name="description"
            content="A resources website for the Saidia game"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          <Nav />
          <img
            src="/kayaFullBody.png"
            alt="Kaya full body"
            className={styles.kayaFullBody}
          />
          <div className={styles.hero}>
            <div className={styles.heroLeft}>
              <img
                src={"/saidiaTitle.png"}
                alt={"Saidia Title"}
                className={styles.saidiaText}
              />
              <h1>Saidia Guides and Resources center</h1>
              <p>
                Embark on an extraordinary journey with Kaya in &quot;Saidia:
                Embrace the Journey&quot; – a groundbreaking game where
                acceptance and understanding change lives! We are unwavering in
                our commitment to creating content that is not only desired by
                the world but also necessary.
              </p>
            </div>
            <div className={styles.actionBtns}>
              <Link href={"/guides/legal"}>
                <div className={styles.actionBtnPrimary}>Get Started</div>
              </Link>
              <Link href={"/guides/#categories"}>
                <div className={styles.actionBtn}>View Categories</div>
              </Link>
            </div>
          </div>
        </main>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>So what&apos;s on Saidia?</h2>
            <p>All the 411 you need &quot;Ku-saidika&quot; in 6 categories</p>
          </div>
          <div className={styles.categoriesContainer} id={"categories"}>
            <Link href={"/guides/legal"}>
              <div className={styles.categoryContainer}>
                <img
                  src={"/legal.svg"}
                  alt="slef-care icon"
                  className={styles.categoryIcon}
                />
                <div className={styles.categoryHeadingContainer}>
                  <h3>Legal</h3>
                </div>
                <p>
                  Navigating the legal landscape is crucial. Find up-to-date
                  information on LGBTQ rights, anti-discrimination laws, and
                  resources for legal assistance to ensure you&apos;re informed
                  and empowered to assert your rights
                </p>
              </div>
            </Link>
            <Link href={"/guides/organizations"}>
              <div className={styles.categoryContainer}>
                <img
                  src={"/org.svg"}
                  alt="slef-care icon"
                  className={styles.categoryIcon}
                />
                <div className={styles.categoryHeadingContainer}>
                  <h3>Support Organizations and True Stories</h3>
                </div>
                <p>
                  You are never alone on this journey. Access a directory of
                  LGBTQ-focused support organizations, and community groups
                  dedicated to providing assistance, guidance, and a safe space
                  for you.
                </p>
              </div>
            </Link>
            <Link href={"/guides/business"}>
              <div className={styles.categoryContainer}>
                <img
                  src={"/money.svg"}
                  alt="slef-care icon"
                  className={styles.categoryIcon}
                />
                <div className={styles.categoryHeadingContainer}>
                  <h3>Business and Employment</h3>
                </div>
                <p>
                  Empower your entrepreneurial spirit. Whether you are looking
                  to start or grow a business, find resources tailored to LGBTQ
                  entrepreneurs, including funding opportunities, mentorship
                  programs, and business development advice
                </p>
              </div>
            </Link>
            <Link href={"/guides/inclusivity"}>
              <div className={styles.categoryContainer}>
                <img
                  src={"/inclusivity.svg"}
                  alt="slef-care icon"
                  className={styles.categoryIcon}
                />
                <div className={styles.categoryHeadingContainer}>
                  <h3>Inclusivity and Diversity</h3>
                </div>
                <p>
                  Embrace the beauty of diversity. Delve into resources that
                  promote understanding, respect, and acceptance of all
                  identities, fostering a more inclusive and compassionate
                  society for everyone.
                </p>
              </div>
            </Link>
            <Link href={"/guides/events"}>
              <div className={styles.categoryContainer}>
                <img
                  src={"/event.svg"}
                  alt="slef-care icon"
                  className={styles.categoryIcon}
                />
                <div className={styles.categoryHeadingContainer}>
                  <h3>Events and Culture</h3>
                </div>
                <p>
                  Stay connected and engaged with LGBTQ events across Kenya.
                  Explore a calendar of inclusive gatherings, workshops,
                  seminars, and pride celebrations that celebrate diversity and
                  provide opportunities for networking
                </p>
              </div>
            </Link>
            <Link href={"/guides/self-care"}>
              <div className={styles.categoryContainer}>
                <img
                  src={"/selfCare.svg"}
                  alt="slef-care icon"
                  className={styles.categoryIcon}
                />
                <div className={styles.categoryHeadingContainer}>
                  <h3>Self-care</h3>
                </div>
                <p>
                  Taking care of your well-being is essential. Discover a range
                  of self-care resources, from mental health tips and coping
                  strategies to self-acceptance guides, helping you foster a
                  positive and resilient mindset.
                </p>
              </div>
            </Link>
          </div>
        </section>
      </div>
    );
}