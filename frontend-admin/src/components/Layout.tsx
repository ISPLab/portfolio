import { ReactNode } from 'react'
import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap'
import { BsSpeedometer2, BsPeople, BsGear, BsChatDots } from 'react-icons/bs'
import Link from 'next/link'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div 
        className="bg-light" 
        style={{ 
          width: '240px', 
          minHeight: '100vh',
          position: 'fixed',
          left: 0,
          top: 0
        }}
      >
        <Navbar bg="primary" variant="dark" className="mb-3">
          <Container>
            <Navbar.Brand href="/">Portfolio Admin</Navbar.Brand>
          </Container>
        </Navbar>
        <Nav className="flex-column">
          <Link href="/" passHref legacyBehavior>
            <Nav.Link className="d-flex align-items-center">
              <BsSpeedometer2 className="me-2" />
              Dashboard
            </Nav.Link>
          </Link>
          <Link href="/users" passHref legacyBehavior>
            <Nav.Link className="d-flex align-items-center">
              <BsPeople className="me-2" />
              Users
            </Nav.Link>
          </Link>
          <Link href="/settings" passHref legacyBehavior>
            <Nav.Link className="d-flex align-items-center">
              <BsGear className="me-2" />
              Settings
            </Nav.Link>
          </Link>
          <Link href="/chat" passHref legacyBehavior>
            <Nav.Link className="d-flex align-items-center">
              <BsChatDots className="me-2" />
              Chat
            </Nav.Link>
          </Link>
        </Nav>
      </div>

      {/* Main content */}
      <div style={{ marginLeft: '240px', width: 'calc(100% - 240px)' }}>
        <main className="p-3">
          {children}
        </main>
      </div>
    </div>
  )
} 