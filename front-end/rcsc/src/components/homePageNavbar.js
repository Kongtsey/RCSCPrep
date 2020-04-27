import React from "react";
import { Container, Col, Row, Nav, Navbar, Button, Modal } from "react-bootstrap";
import "../style-sheet/homepage-navbar.css";

function NavigationBar() {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <React.Fragment>
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
              <Nav.Link>Login</Nav.Link>
              <Nav.Link onClick={handleShow}>Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <hr />
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={12} lg={12} sm={12}></Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={handleClose}>
            Sign up
          </Button>
        </Modal.Footer>
        <p>Already have an account?</p>
      </Modal>
    </React.Fragment>
  );
}

export default NavigationBar;
