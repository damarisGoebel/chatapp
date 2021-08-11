import React from 'react'
import Footer from './components/Footer/Footer'
import Container from './components/Container/Container'
import Message from './components/Message/Message'
import Response from './components/Response/Response'

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
        {messages.length > 0 && messages.map((message: any, index: number) => {
          return <Message key={index} author={message.author} message={message.message} timestamp={message.timestamp} />
        })
        }
        <Response />
      </Container>
      <Footer />
    </div>
  )
}

export default App
