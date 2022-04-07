import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import logo from "../media/ScotHosts.png";
const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <img src={logo} className="scot__host__logo" />
        <Navbar.Brand href="#home">SCOTHOSTS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="nav__links">
          <Nav className="me-auto ">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">Who We Are</Nav.Link>
            <Nav.Link href="/travelguide">Travel Guide</Nav.Link>
            <Nav.Link href="/visaguide">Visa Guide</Nav.Link>
            <Nav.Link href="/setup">Set Up</Nav.Link>
            <Nav.Link href="/ongoing-support">Ongoing Support</Nav.Link>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            <Nav.Link href="#link">FAQ</Nav.Link>
            {/* <NavDropdown title="View Guides" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
