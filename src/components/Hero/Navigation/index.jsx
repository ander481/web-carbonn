import React from "react";
import * as styles from "./index.module.scss";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
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
            <div className={styles.right}>
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
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
