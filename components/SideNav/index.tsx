import React from 'react'
import { Accordion } from '../Accordion';
import styles from "./SideNav.module.scss"
import { business, legal, organizations, inclusivity, events, selfCare, eWaste } from '@/Data/categories';


const SideNav = () => {
  const [isMobileSideBarActive, setMobileSideBarActive] = React.useState<boolean>(false)

  const sideBarStyles = {
    top: isMobileSideBarActive ? "0%" : "90%",
    height: isMobileSideBarActive ? "100%" : "0%",
    display: isMobileSideBarActive ? "block" : "none",
    transition: "all ease-in-out 0.5s"
  }
  return (
    <div style={{position: "relative"}}>
      <div className={styles.sideNav} style={sideBarStyles}>
        <Accordion categoryTitle="Legal" categoryArticles={legal} />
        <Accordion categoryTitle="E-Waste" categoryArticles={eWaste} />
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
      <div className={styles.sidebarToggler} onClick={()=> setMobileSideBarActive(!isMobileSideBarActive)}>
        {
          isMobileSideBarActive ? "Close Categories" : "Open Categories"
        }
      </div>
    </div>
  );
}

export default SideNav