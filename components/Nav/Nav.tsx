import React, { useState } from "react";
import styles from "./Nav.module.scss";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className={styles.nav}>
      <div className={styles.navContainer}>
        <div className={styles.navBar}>
          <div
            className={styles.menuToggle}
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          >
            <div
              className={
                navOpen
                  ? styles["hamBox"] + " " + styles["hamBoxOpen"]
                  : styles["hamBox"]
              }
            >
              <div
                className={
                  navOpen
                    ? styles["lineTop"] + " " + styles["spin"]
                    : styles["lineTop"]
                }
              ></div>
              <div
                className={
                  navOpen
                    ? styles["lineBottom"] + " " + styles["spin"]
                    : styles["lineBottom"]
                }
              ></div>
            </div>
          </div>
        </div>
        <div className={styles.navOverlay}></div>
      </div>
    </div>
  );
};

export default Nav;
