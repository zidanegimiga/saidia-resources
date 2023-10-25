import React from 'react'
import { Accordion } from '../Accordion';
import styles from "./SideNav.module.scss"
import { business, legal, organizations, inclusivity, events, selfCare, eWaste } from '@/Data/categories';


const SideNav = () => {
  const [isMobileSideBarActive, setMobileSideBarActive] = React.useState<boolean>(false)

  return (
    <div style={{position: "relative"}}>
      <div className={styles.sideNav} style={{transition: "ease-in-out all 0.5s", top: isMobileSideBarActive ? "0%" : "100%", height: isMobileSideBarActive ? "100vh" : "0", display: isMobileSideBarActive ? "block" : "none"}} >
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
      <div className={styles.sidebarToggler} onClick={()=> setMobileSideBarActive(!isMobileSideBarActive)}>
        {
          isMobileSideBarActive ? "Close Categories" : "Open Categories"
        }
      </div>
    </div>
  );
}

export default SideNav