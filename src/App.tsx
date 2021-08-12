import React from 'react'
import Footer from './components/Footer/Footer'
import Container from './components/Container/Container'
import Message from './components/Message/Message'

import { getAllMessages } from './api/api'

function App() {
  const [messages, setMessages] = React.useState<any>([])

  React.useEffect(() => {
    getAllMessages().then(function (result) {
      setMessages(result)
    })
  }, [])

  return (
    <div>
      <Container>
        <div>
        {messages.length > 0 && messages.map((message: any, index: number) => {
          return <Message key={index} author={message.author} message={message.message} timestamp={message.timestamp} />
        })
        }
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default App
