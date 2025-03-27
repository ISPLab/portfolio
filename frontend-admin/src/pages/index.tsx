import { Container, Row, Col } from 'react-bootstrap'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <Container fluid>
        <Row className="my-4">
          <Col>
            <h1>Admin Dashboard</h1>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
} 