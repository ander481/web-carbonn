import React from 'react'
import * as styles from './index.module.scss'
import { StaticImage } from 'gatsby-plugin-image'



const Difference = () => {
  return (
    <section
        className={styles.methodology}
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
        </div>
    </section>
  )
}

export default Difference