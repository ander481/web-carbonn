import React from 'react'
import * as styles from './index.module.scss'
import ArrowIcon from '../../assets/img/arrow_right.svg'



const Roadmap = () => {
  return (
    <section
        className={styles.roadmap}
        id='roadmap'
    >
      <div className="container">
        <div className={styles.loader}>
          <div className={styles.title}>
            <h2>Roadmap</h2>
          </div>
          <div className={styles.line} />
        </div>
        <div className={styles.steps}>
          <div className={styles.step}>
            <div className={styles.milestone}>
              <p>Connection with companies</p>
            </div>
            <img src={ArrowIcon} alt="next" />
          </div>
          <div className={styles.step}>
            <div className={styles.milestone}>
              <p>Mapping illegal dump sites nearby / in the zone of interes</p>
            </div>
            <img src={ArrowIcon} alt="next" />
          </div>
          <div className={styles.step}>
            <div className={styles.milestone}>
              <p>CO2 estimation with stakeholders</p>
            </div>
            <img src={ArrowIcon} alt="next" />
          </div>
          <div className={styles.step}>
            <div className={styles.milestone}>
              <p>Government approval</p>
            </div>
            <img src={ArrowIcon} alt="next" />
          </div>
          <div className={styles.step}>
            <div className={styles.milestone}>
              <p>Project Execution</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Roadmap