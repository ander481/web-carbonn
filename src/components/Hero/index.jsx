import React from 'react'
import * as styles from './index.module.scss'
import { StaticImage } from 'gatsby-plugin-image'
import Navigation from './Navigation'
import Button from '../Button'
import Curve from '../../assets/img/bottom_curve.svg'


const Hero = () => {
  return (
    <header className={styles.header}>
        <div className={styles.background}>
            <StaticImage
                src="../../assets/img/background.jpg"
                alt="Carbon emission"
                className={styles.background_image}
                placeholder="dominantColor"
                layout='fullWidth'
                formats={['auto']}
            />
            <div className={styles.overlay} />
            <img className={styles.curve} src={Curve} alt='curve' />
        </div>

        <Navigation />

        <div className={styles.content}>
            <div className={styles.hero_text}>
              <div className="container">
                <div className={styles.title}>
                  <h1>Alternative carbon credit project</h1>
                  <p>Turn trash into cash and reduce your carbon footprint with investing in a sustainable future</p>

                  <Button
                    text='Learn more'
                    link='/'
                  />
                </div>
              </div>
            </div>
        </div>
        
    </header>
  )
}

export default Hero