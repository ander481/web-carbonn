import React from 'react'
import * as styles from './index.module.scss'
import { StaticImage } from 'gatsby-plugin-image'



const Difference = () => {
  return (
    <section
        className={styles.difference}
        id='difference'
    >
        <div className={styles.background}>
            <StaticImage
                src="../../assets/img/forest.jpg"
                alt="Forest"
                className={styles.background_image}
                placeholder="dominantColor"
                layout='fullWidth'
                formats={['auto']}
            />
            <div className={styles.overlay} />
            <div className={styles.gradient} />
        </div>

        <div className={styles.content}>
          <div className='container'>
            <div className={styles.title}>
              <h2>What is the difference between existing carbon credit and <span>CARBONN</span>?</h2>
            </div>
            <div className={styles.blocks}>
              <div className={styles.block}>
                <div className={styles.block_title}>
                  <h3>Existing carbon credit</h3>
                </div>
                <div className={styles.block_descr}>
                  <p>Permits that allow the owner to emit a certain amount of carbon dioxide or other greenhouse gases</p>
                </div>
                <ul className={styles.list}>
                  <li><p>Compensates emission, mostly by forrestation</p></li>
                  <li><p>The circulation is not fully transparent to society</p></li>
                  <li><p>High price</p></li>
                </ul>
              </div>
              
              <div className={styles.block}>
                <div className={styles.block_title}>
                  <h3><span>CARBONN</span> credit <small>NEW!</small></h3>
                </div>
                <div className={styles.block_descr}>
                  <p>Alternative carbon credit aimed to directly decrease emision of carbon dioxide, methane, and other greenhouse gasses</p>
                </div>
                <ul className={styles.list}>
                  <li><p>Decreases emisson by involving stakeholders</p></li>
                  <li><p>Transparent to everyone</p></li>
                  <li><p>Low price</p></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Difference