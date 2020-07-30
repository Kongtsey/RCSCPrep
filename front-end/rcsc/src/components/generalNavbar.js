import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import fire from "../config/Fire";
import "../style-sheet/general-navbar.css";
import logo from "../images/web-logo.png";

class GeneralNavigationBar extends Component {
  logout() {
    fire.auth().signOut();
  }
  render() {
    return (
      <Navbar collapseOnSelect expand='lg' bg='warning'>
        <Navbar.Brand href='/'>
          &nbsp;&nbsp;&nbsp;
          <img src={logo} alt='this is the logo' className='logo' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/'>Dashboard</Nav.Link>
            <Nav.Link href='/english_stats_page'>English</Nav.Link>
            <Nav.Link href='/math_stats_page'>Math</Nav.Link>
            <Nav.Link href='/exam'>Exam</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link> {fire.auth().currentUser.displayName}</Nav.Link>
            &nbsp;&nbsp;&nbsp;
            <Nav.Link>
              <FontAwesomeIcon icon={faUserCircle} className='user_profile_picture' />
            </Nav.Link>
            <Nav.Link onClick={this.logout}> LogOut </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default GeneralNavigationBar;
