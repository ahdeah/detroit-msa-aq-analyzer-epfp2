import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const AppNavbar = () => {
  return (
    <div>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Analysis Summary</Nav.Link>
            <NavDropdown title="Analysis" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Site Comparison</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Time Trends
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Geographic Map</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">About Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default AppNavbar