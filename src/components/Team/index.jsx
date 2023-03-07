import React from 'react'
import * as styles from './index.module.scss'
import { StaticImage } from "gatsby-plugin-image"



const Team = () => {
  return (
    <section
        className={styles.team}
        id='team'
    >
      <div className="container">
        <div className={styles.title}>
          <h2>Meet our team!</h2>
        </div>
        <div className={styles.content}>
          <div className={styles.profiles}>
            <div className={styles.profile}>
              <div className={styles.photo}>
                <StaticImage
                  src="../../assets/img/Khrystodulov.png"
                  alt="Andrii Khrystodulov"
                  width={220}
                  height={220}
                  placeholder="blurred"
                />
              </div>
              <div className={styles.descr}>
                <h4>Andrii Khrystodulov</h4>
                <p>GIS Specialist with Land Management background. Software development lead</p>
                <div>
                  <p>M: khrystodulov@carbonn.eu</p>
                  <p>P: +420 722 658 522</p>
                </div>
              </div>
            </div>
            <div className={styles.profile}>
              <div className={styles.photo}>
                <StaticImage
                  src="../../assets/img/Trubin.png"
                  alt="Alex Trubin"
                  width={220}
                  height={220}
                  placeholder="blurred"
                />
              </div>
              <div className={styles.descr}>
                <h4>Ph.D. Alex Trubin</h4>
                <p>Senior Data Analyst. Specializes in Remote Sensing and Machine Learning, AI</p>
                <div>
                  <p>M: trubin@carbonn.eu</p>
                  <p>P: +420 774 511 297</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.showcase}>
            <div className={styles.slogan}>
              <h3>Working together for the better future!</h3>
            </div>
            <div className={styles.row}>
              <div className={styles.number}>
                <p>{'>20'}<small>years</small></p>
              </div>
              <div className={styles.experience}>
                <p>Environmental science and climate expertise</p>
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.number}>
                <p>{'>10'}<small>years</small></p>
              </div>
              <div className={styles.experience}>
                <p>Remote Sensing & Machine learning</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team