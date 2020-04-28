import React from "react";
import { Container, Col, Row, Form, Nav, Navbar, Button, Modal } from "react-bootstrap";
import "../style-sheet/homepage-navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBookReader, faPhoneAlt, faUser, faLock } from "@fortawesome/free-solid-svg-icons";

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
          <Form>
            <Form.Group as={Row}>
              <Form.Label column sm='1'>
                <FontAwesomeIcon icon={faUser} />
              </Form.Label>
              <Col sm='10' className='form-input'>
                <Form.Control type='email' placeholder='Full Name' />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId='formPlaintextEmail'>
              <Form.Label column sm='1'>
                <FontAwesomeIcon icon={faEnvelope} />
              </Form.Label>
              <Col sm='10' className='form-input'>
                <Form.Control type='email' placeholder='Email' />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId='formPlaintextPassword'>
              <Form.Label column sm='1'>
                <FontAwesomeIcon icon={faLock} />
              </Form.Label>
              <Col sm='10' className='form-input'>
                <Form.Control type='password' placeholder='Password' />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId='number'>
              <Form.Label column sm='1'>
                <FontAwesomeIcon icon={faPhoneAlt} />
              </Form.Label>
              <Col sm='10' className='form-input'>
                <Form.Control type='number' placeholder='Phone' />
              </Col>
            </Form.Group>

            <Form.Group as={Row} controlId='plaintext'>
              <Form.Label column sm='1'>
                <FontAwesomeIcon icon={faBookReader} />
              </Form.Label>
              <Col sm='10' className='form-input'>
                <Form.Control type='text' placeholder='College' />
              </Col>
            </Form.Group>
          </Form>
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
