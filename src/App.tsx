import React from 'react'
import Footer from './components/Footer/Footer'
import Container from './components/Container/Container'
import Message from './components/Message/Message'
import Response from './components/Response/Response'

import { getAllMessages } from './api/api'

function App() {
  const [messages, setMessages] = React.useState<any>([])
  const [response, setResponse] = React.useState<any>({})

  React.useEffect(() => {
    getAllMessages().then(function (result) {
      let messageArrayWithoutLastOne = result.slice(0,-1);;
      setMessages(messageArrayWithoutLastOne)
      let lastOne = result[result.length - 1]
      setResponse(lastOne)
    })

  }, [])

  return (
    <div>
      <Container>
        {messages.length > 0 && messages.map((message: any, index: number) => {
          return <Message key={index} author={message.author} message={message.message} timestamp={message.timestamp} />
        })
        }
        {response !== {} &&  <Response message={response.message} timestamp={response.timestamp} />
        }
        
      </Container>
      <Footer />
    </div>
  )
}

export default App
