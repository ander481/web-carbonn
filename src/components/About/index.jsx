import React from 'react'
import * as styles from './index.module.scss'
import { StaticImage } from "gatsby-plugin-image"
import Curve from '../../assets/img/gray_curve.svg'


const About = () => {
  return (
    <section
        className={styles.about}
        id='about'
    >
        <div className="container">
            <h2>About</h2>
            <div className={styles.descr}>
                <p>
                    We create sustainable <span>ecological solutions</span> by involving stakeholders in saving the environment with commercial benefits using satellite imagery data and machine learning technologies.
                </p>
                <hr className={styles.dash} />
                <StaticImage
                    src="../../assets/img/logo_dark.png"
                    alt="CARBONN logo"
                    width={153}
                    height={47}
                    placeholder="blurred"
                />
            </div>
            <div className={styles.cards}>
                <div className={styles.col_left}>
                    <div className={styles.card}>
                        <div className={styles.image}>
                            <StaticImage
                                src="../../assets/img/partners.jpg"
                                alt="CARBONN logo"
                                width={500}
                                height={325}
                                placeholder="blurred"
                            />
                            <div className={styles.overlay}>
                                <div className={styles.outline}>
                                    <h3>Clients and stakeholders</h3>
                                </div>
                            </div>
                        </div>
                        <ul>
                            <li><p>Companies with large-scale CO2 emissions</p></li>
                            <li><p>Governments</p></li>
                            <li><p>Academia institutions</p></li>
                            <li><p>NGOs (Non-governmental organizations)</p></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.col_right}>
                    <div className={styles.card}>
                        <div className={styles.image}>
                            <StaticImage
                                src="../../assets/img/building.jpg"
                                alt="CARBONN logo"
                                width={500}
                                height={325}
                                placeholder="blurred"
                            />
                            <div className={styles.overlay}>
                                <div className={styles.outline}>
                                    <h3>Benefits</h3>
                                </div>
                            </div>
                        </div>
                        <p className={styles.benefit}>Invest in eco-oriented projects to remove illegal landfils, optimize costs and impact</p>
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.background}>
            <StaticImage
                src="../../assets/img/cloud.png"
                alt="Cloud"
                width={928}
                height={396}
                placeholder="blurred"
            />
            <img className={styles.curve} src={Curve} alt='curve' />
        </div>
    </section>
  )
}

export default About