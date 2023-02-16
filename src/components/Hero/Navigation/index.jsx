import React, { useEffect, useState } from "react";
import * as styles from "./index.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import MenuIcon from '../../../assets/img/menu.svg';

const Navigation = () => {

  const [colorChange, setColorchange] = useState(false);
  const [displayList, setDisplayList] = useState(false);

  let navbar_height = 80;

  const changeListState = () => {
    setDisplayList((current) => !current);
    if (window.scrollY < navbar_height) {
      setColorchange(true);
    }
  };

  useEffect(() => {
    const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
        setColorchange(true);
      } else {
        setColorchange(false);
      }
    };

    window.addEventListener("scroll", changeNavbarColor);
  }, []);


  return (
    <nav className={colorChange ? `${styles.navigation} ${styles.active}` : styles.navigation}>
      <div className="container">
        <div className={styles.nav_content}>
            <div className={styles.brand}>
                <Link to="/">
                  <StaticImage
                      src="../../../assets/img/logo.png"
                      alt="CARBONN logo"
                      width={136}
                      height={47}
                      placeholder="blurred"
                  />
                </Link>
            </div>
            <div className={displayList ? `${styles.right}` : `${styles.right} ${styles.hidden}`}>
              <ul className={styles.nav_list}>
                  <li>
                  <Link to="#about">About</Link>
                  </li>
                  <li>
                  <Link to="#methodology">Methodology</Link>
                  </li>
                  <li>
                  <Link to="#innovation">Innovation</Link>
                  </li>
                  <li>
                  <Link to="#team">Team</Link>
                  </li>
              </ul>
            </div>
            <div
              className={styles.menu}
              onClick={changeListState}
              onKeyDown={null}
              role='presentation'
            >
              <img src={MenuIcon} alt="menu" />
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
