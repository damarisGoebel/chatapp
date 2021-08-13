import React from 'react'
import Container from '../Container/Container'
import styles from './Footer.module.css'
import {sendMessage} from '../../api/api'
import {encode} from 'html-entities';

const Footer = () => {

  const [input, setInput] = React.useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let encodedInput = encode(input)

    sendMessage({message:encodedInput, author:"Damaris"})
    setInput('')
  }

  return (
    <div className={styles.footer}>
      <Container>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            type="text"
            id="message"
            placeholder="Message"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <input className={styles.button} type="submit" value={'Send'} />
        </form>
      </Container>
    </div>
  )
}

export default Footer
