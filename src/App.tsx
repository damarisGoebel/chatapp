import React from 'react'
import Footer from './components/Footer/Footer'
import Container from './components/Container/Container'
import Message from './components/Message/Message'

import { getAllMessages } from './api/api'

function App() {
  const messagesEndRef = React.useRef(null)

  const scrollToBottom = () => {
    // @ts-ignore
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const [messages, setMessages] = React.useState<any>([])

  React.useEffect(() => {
    scrollToBottom()
  }, [messages])

  React.useEffect(() => {
    getAllMessages().then(function (result) {
      setMessages(result)
    })
  }, [])

  return (
    <div>
      <Container>
        <div>
          {messages.length > 0 &&
            messages.map((message: any, index: number) => {
              return (
                <Message
                  key={index}
                  author={message.author}
                  message={message.message}
                  timestamp={message.timestamp}
                />
              )
            })}
        </div>
        <div ref={messagesEndRef} />
      </Container>
      <Footer />
    </div>
  )
}

export default App
