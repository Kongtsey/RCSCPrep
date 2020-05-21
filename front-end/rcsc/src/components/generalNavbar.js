import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "../style-sheet/general-navbar.css";

function GeneralNavigationBar() {
  return (
    <Navbar collapseOnSelect expand='lg' bg='warning'>
      <Navbar.Brand href='#home'>&nbsp;&nbsp;&nbsp;React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls='responsive-navbar-nav' />
      <Navbar.Collapse id='responsive-navbar-nav'>
        <Nav className='mr-auto'>
          <Nav.Link href='#about'>Dashboard</Nav.Link>
          <Nav.Link href='#contact'>English</Nav.Link>
          <Nav.Link href='#contact'>Math</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>Norbu </Nav.Link>
          <Nav.Link>
            <FontAwesomeIcon icon={faUserCircle} className='user_profile_picture' />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default GeneralNavigationBar;
