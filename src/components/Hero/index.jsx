import React from 'react'
import * as styles from './index.module.scss'
import { StaticImage } from 'gatsby-plugin-image'
import Navigation from './Navigation'


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
            <Navigation />
        </div>
        
    </header>
  )
}

export default Hero