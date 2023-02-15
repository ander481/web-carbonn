import React from 'react'
import * as styles from './index.module.scss'



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
      </div>
    </section>
  )
}

export default Team