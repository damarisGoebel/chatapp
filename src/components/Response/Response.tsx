import React from 'react'
import styles from './Response.module.css'

const Response = () => {
  return (
    <div className={styles.responseBubble}>
      <p className={styles.text}>Hey Folks! I wanted to get in touch with you regarding the project. Please, let me know how you plan to contribute.</p>
      <p className={styles.smallText}>10 Mar 2018 10:22</p>
    </div>
  )
}

export default Response
