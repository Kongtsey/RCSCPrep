import React, {Component} from "react";
import { Container, Col, Row, Form, Nav, Navbar, Button, Modal } from "react-bootstrap";
import "../style-sheet/homepage-navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBookReader, faPhoneAlt, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import fire from '../config/Fire';

// const handleClose = () => setShow(false);
// const handleShow = () => setShow(true);
class NavigationBar extends Component{
  constructor(props){
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCloseLogin = this.handleCloseLogin.bind(this);
    this.handleShowLogin = this.handleShowLogin.bind(this);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signUp = this.signUp.bind(this);
    this.state = {
      toShowLogin : false,
      toShowSignUp : false,
      email: 'kzoepa',
      password: ''
    };
  }
  //Functions
  //Modal Functions Start <---
  handleClose(){
    this.setState({toShowSignUp: false});
  }
  handleShow(){
    this.setState({toShowSignUp: true});
  }
  handleCloseLogin(){
    this.setState({toShowLogin: false});
  }
  handleShowLogin(){
    this.setState({toShowLogin: true});
  }
  //Modal Functions end --->

  //Firebase Functions start <--
  handleChange(e){
    this.setState({[e.target.name]:e.target.value});
  }
  login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
      console.log("Logged In")
    }).catch((error)=>{
      console.log(error)
    });
  }
  signUp(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{console.log(u)}).catch((error)=>{
      console.log(error);
    })
  }
  //Firebase functions end --->


  //Render
  render() {
    return (
        <React.Fragment>
          <Container className='navbar-parent-container'>
            <Navbar collapseOnSelect expand='lg'>
              <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
              <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav className='mr-auto'>
                  <Nav.Link href='#about'>About</Nav.Link>
                  <Nav.Link href='#contact'>Contact</Nav.Link>
                </Nav>
                <Nav>
                  <Nav.Link onClick={this.handleShowLogin}>Login</Nav.Link>
                  <Nav.Link onClick={this.handleShow}>Sign Up</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <hr/>
          </Container>

          {/*Sign Up Form*/}
          <Modal show={this.state.toShowSignUp} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group as={Row}>
                  <Form.Label column sm='1'>
                    <FontAwesomeIcon icon={faUser}/>
                  </Form.Label>
                  <Col sm='10' className='form-input'>
                    <Form.Control type='email' placeholder='Full Name'/>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId='formPlaintextEmail'>
                  <Form.Label column sm='1'>
                    <FontAwesomeIcon icon={faEnvelope}/>
                  </Form.Label>
                  <Col sm='10' className='form-input'>
                    <Form.Control type='email' placeholder='Email'/>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId='formPlaintextPassword'>
                  <Form.Label column sm='1'>
                    <FontAwesomeIcon icon={faLock}/>
                  </Form.Label>
                  <Col sm='10' className='form-input'>
                    <Form.Control type='password' placeholder='Password'/>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId='number'>
                  <Form.Label column sm='1'>
                    <FontAwesomeIcon icon={faPhoneAlt}/>
                  </Form.Label>
                  <Col sm='10' className='form-input'>
                    <Form.Control type='number' placeholder='Phone'/>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId='plaintext'>
                  <Form.Label column sm='1'>
                    <FontAwesomeIcon icon={faBookReader}/>
                  </Form.Label>
                  <Col sm='10' className='form-input'>
                    <Form.Control type='text' placeholder='College'/>
                  </Col>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='primary' onClick={this.handleClose}>
                Sign up
              </Button>
            </Modal.Footer>
            <p>Already have an account?</p>
          </Modal>

          {/*For Login Form*/}
          <Modal show={this.state.toShowLogin} onHide={this.handleCloseLogin}>
            <Modal.Header closeButton>
              <Modal.Title>Login</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group as={Row} controlId='formPlaintextEmail'>
                  <Form.Label column sm='1'>
                    <FontAwesomeIcon icon={faUser}/>
                  </Form.Label>
                  <Col sm='10' className='form-input'>
                    <Form.Control value={this.state.email} onChange={this.handleChange} name='email' type='email' placeholder='Username/Email'/>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId='formPlaintextPassword'>
                  <Form.Label column sm='1'>
                    <FontAwesomeIcon icon={faLock}/>
                  </Form.Label>
                  <Col sm='10' className='form-input'>
                    <Form.Control value={this.state.password} onChange={this.handleChange} name='password' type='password' placeholder='Password'/>
                  </Col>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='primary' onClick={this.login}>
                Log in
              </Button>
            </Modal.Footer>
            <p>Forgot Password?</p>
            <p>Create Account</p>
          </Modal>
        </React.Fragment>
    );
  }
}

export default NavigationBar;
