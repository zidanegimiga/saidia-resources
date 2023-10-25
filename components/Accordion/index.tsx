import React, { useState } from "react";
import styles from "./Accordion.module.scss";
import Link from "next/link";
import { useSidebar } from "@/hooks/SidebarContext";

interface IAccordion {
  categoryTitle: string;
  categoryArticles: any;
}

export const Accordion = ({ categoryTitle, categoryArticles }: IAccordion) => {
  const [open, setOpen] = useState(false);
  const { isSidebarOpen, toggleSidebar } = useSidebar();

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
        <div>&gt;</div>
      </div>
      {open && (
        <ul className={styles["accordionArticleTitlesList"]}>
          {categoryArticles?.map((article: any, index: number) => {
            return (
              <div key={index} className={styles.listItem} onClick={toggleSidebar}>
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
