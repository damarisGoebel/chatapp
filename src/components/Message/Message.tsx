import React from 'react'
import styles from './Message.module.css'

const Message = () => {

    return (
        <div className={styles.messageBubble}>
            <p className={styles.smallText}>Patricia</p>
            <p className={styles.text}>Sounds good to me!</p>
            <p className={styles.smallText}>10 Mar 2018 10:22</p>
        </div>
    )
}

export default Message;