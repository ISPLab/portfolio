import { useState } from 'react'
import Layout from '../components/Layout'
import { Container, Form, Button, Card } from 'react-bootstrap'

export default function Chat() {
  const [message, setMessage] = useState('')
  const [chatHistory, setCharHistory] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!message.trim()) return

    setIsLoading(true)
    try {
      const response = await puter.ai.chat(message)
      setCharHistory(prev => [...prev, `You: ${message}`, `AI: ${response}`])
      setMessage('')
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Layout>
      <Container>
        <h2 className="mb-4">Chat with AI</h2>
        
        <div className="chat-container mb-4" style={{ height: '60vh', overflowY: 'auto' }}>
          {chatHistory.map((msg, index) => (
            <Card key={index} className="mb-2">
              <Card.Body>{msg}</Card.Body>
            </Card>
          ))}
        </div>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Control
              as="textarea"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              disabled={isLoading}
            />
          </Form.Group>
          <Button 
            type="submit" 
            variant="primary" 
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </Button>
        </Form>
      </Container>
    </Layout>
  )
} 