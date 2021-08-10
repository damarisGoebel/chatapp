import Footer from './components/Footer/Footer'
import Container from './components/Container/Container'
import Message from './components/Message/Message'
import Response from './components/Response/Response'

function App() {
  return (
    <div>
      <Container>
        <Message />
        <Message />

        <Response />

      </Container>
      <Footer />
    </div>
  )
}

export default App
