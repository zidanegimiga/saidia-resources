import React from "react";
import styles from "./guides.module.scss"
import Nav from "@/components/Nav/Nav";
import Head from "next/head";

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
              <h1>Saidia Guide and Resource center</h1>
              <p>
                Embark on an extraordinary journey with Kaya in &quot;Saidia:
                Embrace the Journey&quot; – a groundbreaking game where
                acceptance and understanding change lives! We are unwavering in
                our commitment to creating content that is not only desired by
                the world but also necessary. We push boundaries, challenge
                censorship, and fearlessly bring African narratives to the
                forefront.
              </p>
            </div>
            <div className={styles.actionBtns}>
              <div className={styles.actionBtnPrimary}>Get Started</div>
              <div className={styles.actionBtn}>View Categories</div>
            </div>
          </div>
        </main>
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>So what&apos;s on Saidia?</h2>
            <p>All the 411 you need ku-saidika in the real world</p>
          </div>
          <div className={styles.categoriesContainer}>
            <div className={styles.categoryContainer}>
              <div className={styles.categoryHeadingContainer}>
                <h3>Legal</h3>
              </div>
              <p>
                All the 411 you need ku-saidika* in the real world All the 411
                you need ku-saidika* in the real world All the 411 you need
                ku-saidika* in the real worldAll the 411 you need ku-saidika* in
                the real world All the 411 you need ku-saidika* in the real
                world All the 411 you need ku-saidika* in the real world
              </p>
            </div>
            <div className={styles.categoryContainer}>
              <div className={styles.categoryHeadingContainer}>
                <h3>Supporting Organizations</h3>
              </div>
              <p>
                All the 411 you need ku-saidika* in the real world All the 411
                you need ku-saidika* in the real world All the 411 you need
                ku-saidika* in the real worldAll the 411 you need ku-saidika* in
                the real world All the 411 you need ku-saidika* in the real
                world All the 411 you need ku-saidika* in the real world
              </p>
            </div>
            <div className={styles.categoryContainer}>
              <div className={styles.categoryHeadingContainer}>
                <h3>Business and Employments</h3>
              </div>
              <p>
                All the 411 you need ku-saidika* in the real world All the 411
                you need ku-saidika* in the real world All the 411 you need
                ku-saidika* in the real worldAll the 411 you need ku-saidika* in
                the real world All the 411 you need ku-saidika* in the real
                world All the 411 you need ku-saidika* in the real world
              </p>
            </div>
            <div className={styles.categoryContainer}>
              <div className={styles.categoryHeadingContainer}>
                <h3>Inclusivity and Diversity</h3>
              </div>
              <p>
                All the 411 you need ku-saidika* in the real world All the 411
                you need ku-saidika* in the real world All the 411 you need
                ku-saidika* in the real worldAll the 411 you need ku-saidika* in
                the real world All the 411 you need ku-saidika* in the real
                world All the 411 you need ku-saidika* in the real world
              </p>
            </div>
            <div className={styles.categoryContainer}>
              <div className={styles.categoryHeadingContainer}>
                <h3>Events and Culture</h3>
              </div>
              <p>
                All the 411 you need ku-saidika* in the real world All the 411
                you need ku-saidika* in the real world All the 411 you need
                ku-saidika* in the real worldAll the 411 you need ku-saidika* in
                the real world All the 411 you need ku-saidika* in the real
                world All the 411 you need ku-saidika* in the real world
              </p>
            </div>
            <div className={styles.categoryContainer}>
              <div className={styles.categoryHeadingContainer}>
                <h3>Self-care</h3>
              </div>
              <p>
                All the 411 you need ku-saidika* in the real world All the 411
                you need ku-saidika* in the real world All the 411 you need
                ku-saidika* in the real worldAll the 411 you need ku-saidika* in
                the real world All the 411 you need ku-saidika* in the real
                world All the 411 you need ku-saidika* in the real world
              </p>
            </div>
          </div>          
        </section>
      </div>
    );
}