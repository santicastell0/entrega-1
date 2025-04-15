import React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { Link } from 'react-router-dom'
import './NavBar.css'

function NavBar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="ms-0">
          <img src="Logo/Logo.png" alt="Logo" className="imglogo" />
          VMC REFRIGERACION S.A
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>

            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/categoria/refrigeracion">
                Refrigeración Industrial
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/gas-petroleo">
                Gas y Petróleo
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/categoria/biogas">
                Biogás y Eco VMC
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#about">Contactos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
