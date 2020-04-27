import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function GeneralNavigationBar() {
  return (
    <Navbar collapseOnSelect expand='lg' bg='warning'>
      <Navbar.Brand href='#home'>&nbsp;&nbsp;&nbsp;React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='#about'>Dashboard</Nav.Link>
          <Nav.Link href='#contact'>Questions</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href='#login'>Login</Nav.Link>
          <Nav.Link href='#sing-up'>Sign Up</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default GeneralNavigationBar;
