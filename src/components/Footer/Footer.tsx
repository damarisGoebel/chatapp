import React from 'react'
import Container from '../Container/Container'
import Button from '../Button/Button'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <form className={styles.form}>
          <input
            className={styles.input}
            type="text"
            id="message"
            placeholder="Message"
          />
          <Button text={'Send'} />
        </form>
      </Container>
    </div>
  )
}

export default Footer
