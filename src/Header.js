import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo1.png'; // Assuming the logo is stored in the src folder

function Header() {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm mb-4" style={{ padding: '0.5rem 1rem' }}>
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Logo"
            width="100"
            height="20"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarNavAltMarkup" />
        <Navbar.Collapse id="navbarNavAltMarkup">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="nav-item nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" className="nav-item nav-link">
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" className="nav-item nav-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
