import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../style-sheet/homepage-navbar.css";

function NavigationBar() {
  return (
    <Container className='navbar-parent-container'>
      <Navbar collapseOnSelect expand='lg'>
        <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#contact'>Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='#login'>Login</Nav.Link>
            <Nav.Link href='#sing-up'>Sign Up</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <hr />
    </Container>
  );
}

export default NavigationBar;
