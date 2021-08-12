import React from 'react'
import clsx from 'clsx'
import styles from './Message.module.css'

type Props = {
  author: string
  message: string
  timestamp: number
}

export function timeConverter(timestamp: number) {
  let a = new Date(timestamp)
  let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]
  let year = a.getFullYear()
  let month = months[a.getMonth()]
  let date = a.getDate()
  let hour = a.getHours()
  let min = a.getMinutes()
  let time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min
  return time
}

const Message: React.FC<Props> = ({ author, message, timestamp }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 480;

  let convertedTimestamp = timeConverter(timestamp)

  React.useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);
     window.addEventListener("resize", handleResizeWindow);
     return () => {
       window.removeEventListener("resize", handleResizeWindow);
     };
   }, []);
  return (
    <div className={styles.messageItem}>
      <div
        className={clsx(
          styles.message,
          author === 'Damaris' ? styles.messageOut : styles.messageIn,
        )}
      >
        {width < breakpoint && author === 'Damaris' && <p className={styles.smallText}>You</p>  }
        {author !== 'Damaris' && <p className={styles.smallText}>{author}</p>}
        <p className={styles.text}>{message}</p>
        <p className={styles.smallText}>{convertedTimestamp}</p>
      </div>
    </div>
  )
}

export default Message
