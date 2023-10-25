import React from 'react'
import { Accordion } from '../Accordion';
import styles from "./SideNav.module.scss"
import { business, legal, organizations, inclusivity, events, selfCare, eWaste } from '@/Data/categories';
import { useSidebar } from '@/hooks/SidebarContext';


const SideNav = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  return (
    <div style={{position: "relative"}}>
      <div className={styles.sideNav} style={{transition: "ease-in-out all 0.5s", top: isSidebarOpen ? "0%" : "100%", height: isSidebarOpen ? "100vh" : "0", display: isSidebarOpen ? "block" : "none"}} >
        <h2 style={{color: "white", textAlign: "center", fontFamily: "sans-serif", marginBottom: 16}}>Explore Saidia Resources Categories</h2>
        <Accordion categoryTitle="E-Waste" categoryArticles={eWaste} />
        <Accordion
          categoryTitle="Self-care"
          categoryArticles={selfCare}
        />
        <Accordion
          categoryTitle="Support Organizations"
          categoryArticles={organizations}
        />
        <Accordion
          categoryTitle="Business and Employment"
          categoryArticles={business}
        />
        <Accordion categoryTitle="Legal" categoryArticles={legal} />
        <Accordion
          categoryTitle="Events and Culture"
          categoryArticles={events}
        />
        <Accordion
          categoryTitle="Inclusivity and Diversity"
          categoryArticles={inclusivity}
        />
      </div>
      <div className={styles.sidebarToggler} onClick={toggleSidebar}>
        {
          isSidebarOpen ? "Close Categories" : "Open Categories"
        }
      </div>
    </div>
  );
}

export default SideNav