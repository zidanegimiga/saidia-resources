import React, { useState } from "react";
import styles from "./Accordion.module.scss";
import Link from "next/link";

interface IAccordion {
  categoryTitle: string;
  categoryArticles: any;
}

export const Accordion = ({ categoryTitle, categoryArticles }: IAccordion) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.accordionWrapper}>
      <div
        className={
          open
            ? styles["accordionHeader"] + " " + styles["active"]
            : styles["accordionHeader"]
        }
        onClick={() => setOpen(!open)}
      >
        <Link href={""}>
          <h2 className={styles["accordionHeaderTitle"]}> {categoryTitle}</h2>
        </Link>
        <p>&gt;</p>
      </div>
      {open && (
        <ul className={styles["accordionArticleTitlesList"]}>
          {categoryArticles?.map((article: any, index: number) => {
            return (
              <div key={index}>
                <Link href={article?.url}>
                  <li className={styles.accordionArticleTitle}>
                    {article?.title}
                  </li>
                </Link>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
};
