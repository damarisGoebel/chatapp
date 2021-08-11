import React from 'react'
import styles from './Response.module.css'
import {timeConverter} from "../Message/Message"

type Props = {
  message: string;
  timestamp: number;
}

const Response: React.FC<Props>  = ({ message, timestamp}) => {
  let convertedTimestamp = timeConverter(timestamp)

  return (
    <div className={styles.responseBubble}>
      <p className={styles.text}>{message}</p>
      <p className={styles.smallText}>{convertedTimestamp}</p>
    </div>
  )
}

export default Response
