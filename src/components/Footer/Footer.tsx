import React from 'react'
import Container from '../Container/Container'
import Button from '../Button/Button'
import styles from './Footer.module.css'
import {sendMessage} from '../../api/api'

const Footer = () => {

  const [input, setInput] = React.useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault();
    sendMessage({message:input, author:"Damaris"})
    }

  return (
    <div className={styles.footer}>
      <Container>
        <form className={styles.form}>
          <input
            className={styles.input}
            type="text"
            id="message"
            placeholder="Message"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <Button text={'Send'} onClick={handleSubmit} />
        </form>
      </Container>
    </div>
  )
}

export default Footer
