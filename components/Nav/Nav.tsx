import React, { useState } from "react";
import styles from "./Nav.module.scss";
import Link from "next/link";

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
        <div
          className={styles.navOverlay}
          style={{
            top: navOpen ? "0" : "-100%",
            transitionDelay: navOpen ? "0s" : "0s",
          }}
        >
          <ul className={styles.navLinks}>
            <li className={styles.navItem}>
              <Link href={"/"}>HOME</Link>
              <div className={styles.navItemWrapper}></div>
            </li>
            <li className={styles.navItem}>
              <Link href={"/guides"}>GUIDES & RESOURCES</Link>
              <div className={styles.navItemWrapper}></div>
            </li>
            <li className={styles.navItem}>
              <Link href={"/about"}>ABOUT THE GAME</Link>
              <div className={styles.navItemWrapper}></div>
            </li>
            <li className={styles.navItem}>
              <Link href={"/about-us"}>CREATIVES GARAGE</Link>
              <div className={styles.navItemWrapper}></div>
            </li>
            <li className={styles.navItem}>
              <Link href={"/credits"}>GAME CREDITS</Link>
              <div className={styles.navItemWrapper}></div>
            </li>
          </ul>
          <div className={styles.navFooter}>
            <div className={styles.footerItem}>
              <span>
                <Link href={"/"}>Privacy Policy</Link>
              </span>
            </div>
            <div className={styles.footerItem}>
              <span>
                <Link href={"/"}>Terms and Conditions</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
