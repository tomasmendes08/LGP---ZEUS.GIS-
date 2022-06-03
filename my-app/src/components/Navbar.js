import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap'

function NavbarComponent() {
  return (
    <Navbar className="navbarZeus position-fixed w-100" collapseOnSelect expand="lg" bg="light">
      <Container className="col-12">
      <Navbar.Brand href="/" className="col-2">
        <img src="./images/logo192.png" alt="ZEUS.GIS" width='140' height='22'></img>
      </Navbar.Brand> 
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navLinks fs-5 ms-lg-auto ms-2">
          <Nav.Link href="/contact" className="me-4 text-dark fw-bold">Contact</Nav.Link>
          <Nav.Link href="/about" className="me-4 text-dark fw-bold">About</Nav.Link>
          <Nav.Link href="/products" className="me-4 text-dark fw-bold">Products</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent