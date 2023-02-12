import React from 'react'
import * as styles from './index.module.scss'
import Aim from '../../assets/img/aim.svg'
import Chart from '../../assets/img/chart.svg'
import Monitoring from '../../assets/img/monitoring.svg'
import Carbon from '../../assets/img/carbon.svg'
import { StaticImage } from 'gatsby-plugin-image'



const Methodology = () => {
  return (
    <section
        className={styles.methodology}
        id='methodology'
    >
        <div className="container">
            <h2>Methodology</h2>
            <div className={styles.content}>
                <div className={styles.left_col}>
                    <div className={styles.methods}>
                        <div className={styles.method}>
                            <div className={styles.image}>
                                <img src={Aim} alt="aim" />
                            </div>
                            <div className={styles.text}>
                                <p>Identification and segmentation of existing and new dumpsites</p>
                            </div>
                        </div>
                        <div className={styles.method}>
                            <div className={styles.image}>
                                <img src={Chart} alt="chart" />
                            </div>
                            <div className={styles.text}>
                                <p>Methane and CO2 emission estimation</p>
                            </div>
                        </div>
                        <div className={styles.method}>
                            <div className={styles.image}>
                                <img src={Monitoring} alt="monitoring" />
                            </div>
                            <div className={styles.text}>
                                <p>Monitoring with multi & hyperspectral satellite imagery</p>
                            </div>
                        </div>
                        <div className={styles.method}>
                            <div className={styles.image}>
                                <img src={Carbon} alt="carbon" />
                            </div>
                            <div className={styles.text}>
                                <p>Carbon credit with a difference</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
        <div className={styles.right_col}>
            <div className={styles.overview}>
                <StaticImage
                    src='../../assets/img/planet.jpg'
                    alt="Cloud"
                    height={800}
                    width={800}
                    placeholder="blurred"
                />
                <div className={styles.overlay}>
                    <div className={styles.title}>
                        <h3>Project overview</h3>
                    </div>
                    <div className={styles.descr}>
                        <p>
                            CARBONN is a project aimed at creating sustainable ecological solutions and solving environmental problems through the involvement of stakeholders. We are using satellite imagery processing and Artificial Intelligence to offer eco-friendly solutions with commercial benefits for the clients. Our primary focus are companies with large carbon emissions, who would like to optimize their expences by investing in eco-oriented projects with help of CARBONN and reduce their carbon footprint.
                        </p>
                        <p>
                            Our project offers a unique approach to sustainability, by removing illegal landfills and optimizing costs for companies while having a positive impact on the environment. By investing in CARBONN, companies can not only meet their environmental responsibilities but also enjoy commercial benefits and promote a greener future. Join us in our mission to create a sustainable planet by investing in eco-friendly projects today!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Methodology