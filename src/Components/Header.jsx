import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

import './Header.css';

const Header= () => {
    return(
        <Navbar bg="success" variant="dark" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Kim</Nav.Link>
              <Nav.Link href="#home">Kimmy</Nav.Link>
              <Nav.Link href="#home">Kimberino</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Brand href="#home">Kimmy</Navbar.Brand>
        </Container>
      </Navbar>
    )
};

export default Header;