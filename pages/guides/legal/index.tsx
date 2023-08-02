import React from "react";
import styles from "./legal.module.scss";
import Nav from "@/components/Nav/Nav";
import Head from "next/head";
import Link from "next/link";

interface IAccordion{
    categoryTitle: string,
    categoryArticles: any,
}

const legal = [
  {
    title: "Fines, Cash Bail, and Bonds",
    url: "/guides/legal/#fines-cash-bail-and-bonds",
  },
  {
    title: "Obtain and Replace Your ID",
    url: "/guides/legal/#fines-cash-bail-and-bonds",
  },
  {
    title: "Understanding Police Service",
    url: "/guides/legal/#fines-cash-bail-and-bonds",
  },
];

const Accordion = ({categoryTitle, categoryArticles}: IAccordion) =>{
    return (
      <div className={styles.accordionWrapper}>
        <div className={styles.accordionHeader}>
          <h2> {categoryTitle}</h2>
          <p>&gt;</p>
        </div>
        <ul className={styles.accordionArticleTitlesList}>
          {categoryArticles?.map((article: any, index: number) => {
            return (
              <div key={index}>
                <Link href={article?.url}>
                  <li className={styles.accordionArticleTitle}>{article?.title}</li>
                </Link>
              </div>
            );
          })}
        </ul>
      </div>
    );
}

export default function Guides() {
  return (
    <div className={styles.pageWrapper}>
      <Head>
        <title>Saidia - Guides/Legal</title>
        <meta
          name="description"
          content="A resources website for the Saidia game"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <div className={styles.sideNav}>
        <Accordion categoryTitle="Legal" categoryArticles={legal} />
      </div>
      <div className={styles.article}>
        <h2>
          Understanding Fines, Cash Bail, and Bonds in Kenya&apos;s Legal System
        </h2>
        <p>
          In the Kenyan context, fines, cash bail, and bonds are fundamental
          components of the legal system, each serving unique roles in legal
          proceedings and financial obligations.
        </p>
        <p>
          A fine is a monetary penalty imposed by a court as a form of
          punishment for a criminal offense. When an individual is found guilty
          of a crime, the court may order them to pay a specific amount of money
          as a fine. The purpose of the fine is twofold: to provide a form of
          retribution for the committed offense and to act as a deterrent
          against future unlawful behavior. Failure to pay the fine may lead to
          further legal consequences, such as additional penalties or, in some
          cases, imprisonment.
        </p>
        <p>
          On the other hand, cash bail is a mechanism used to secure the release
          of a defendant from custody while awaiting trial. It serves as a
          guarantee to the court that the accused person will appear for all
          scheduled court hearings. When granted bail, the defendant or their
          representative is required to pay the full bail amount in cash or
          through a bank deposit. The cash bail is refundable, provided that the
          defendant complies with all court requirements, attends all hearings,
          and meets the conditions set by the court. Cash bail is a means of
          ensuring that the defendant remains accountable and appears for their
          trial, thereby safeguarding the integrity of the legal process.
        </p>
        <p>
          In some cases, individuals may not be able to afford the full cash
          bail amount. This is where the concept of a bond, also known as a
          surety bond or bail bond, comes into play. A bond is a written
          agreement involving three parties: the defendant, a surety (often a
          bail bond agent), and the court. Instead of paying the full cash bail
          amount, the defendant or their representative pays a percentage of the
          bail amount (typically around 10%) to the surety. The surety, in turn,
          provides a guarantee to the court that the defendant will fulfill
          their obligations and appear for all court proceedings. If the
          defendant fails to appear, the surety may be held liable for the full
          bail amount, potentially resulting in financial loss for the surety.
        </p>
        <p>
          It&apos;s crucial to recognize that legal procedures and terminology
          can vary depending on the jurisdiction and the nature of the case.
          Seeking the guidance of a qualified lawyer or seeking legal advice is
          highly recommended to gain accurate and up-to-date information on
          these matters. The legal system aims to uphold justice, protect the
          rights of all parties involved, and ensure fair treatment and due
          process for those facing legal issues in Kenya.
        </p>
      </div>

      <div className={styles.article}>
        <h2>How to Obtain and Replace Your Identification Card</h2>

        <p>To get an ID (Identification Card) in Kenya, follow these steps:</p>
        <ol>
          <li>
            Eligibility: You must be a Kenyan citizen and at least 18 years old
            to apply for an ID.
          </li>
          <li>
            Visit the Huduma Centre: Go to the nearest Huduma Centre, which is a
            one-stop shop for various government services, including ID
            registration.
          </li>
          <li>
            Application form: Obtain and fill out an ID application form at the
            Huduma Centre or download it from the official government website.
          </li>
          <li>
            Verification and Interview: Submit your application form and
            supporting documents to the registration officer. You may need to go
            through an interview for verification purposes.
          </li>
          <li>
            Biometric data: Provide your fingerprints and have your photograph
            taken. This is part of the biometric registration process.
          </li>
          <li>
            Processing fee: Pay the required processing fee, which may vary
            depending on the type of application (first-time application,
            replacement, or renewal).
          </li>
          <li>
            Collection: You will be informed about when and where to collect
            your ID card. It may take a few weeks for processing and printing.
          </li>
          <li>
            Receiving the ID card: Visit the designated location on the
            specified date to collect your ID card. Make sure to carry the
            collection slip or any other relevant identification documents.
          </li>
        </ol>
        <p>
          Please note that the specific requirements and procedures may vary, so
          it&apos;s essential to check the official government website or consult
          with the Huduma Centre for the most up-to-date information before
          starting the application process.
        </p>
        
      </div>
    </div>
  );
}
