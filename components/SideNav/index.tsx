import React from 'react'
import { Accordion } from '../Accordion';
import styles from "./SideNav.module.scss"
import { business, legal, organizations, inclusivity, events, selfCare } from '@/Data/categories';

const SideNav = () => {
  return (
    <div className={styles.sideNav}>
      <Accordion categoryTitle="Legal" categoryArticles={legal} />
      <Accordion
        categoryTitle="Business and Employment"
        categoryArticles={business}
      />
      <Accordion
        categoryTitle="Support Organizations"
        categoryArticles={organizations}
      />
      <Accordion
        categoryTitle="Events and Culture"
        categoryArticles={events}
      />
      <Accordion
        categoryTitle="Inclusivity and Diversity"
        categoryArticles={inclusivity}
      />
      <Accordion
        categoryTitle="Self-care"
        categoryArticles={selfCare}
      />
    </div>
  );
}

export default SideNav