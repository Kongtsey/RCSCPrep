import React, {Component} from "react";
import { Container, Col, Row, Form, Nav, Navbar, Button, Modal } from "react-bootstrap";
import "../style-sheet/homepage-navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBookReader, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import fire from '../config/Fire';

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
      email: '',
      password: '',
      errorMessage: '',
      name: '',
      college: ''
    };
  }
  //Functions
  //Modal Functions Start <---
  handleClose(){
    this.setState({toShowSignUp: false});
  }
  handleShow(){
    this.setState({toShowSignUp: true});
    this.setState({
      email: '',
      password: '',
      errorMessage: '',
    })
  }
  handleCloseLogin(){
    this.setState({toShowLogin: false});
    this.setState({
      email: '',
      password: '',
      errorMessage: '',
    })
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
      console.log(error);
      if(error.code==="auth/user-not-found"){
        this.setState({errorMessage: "Incorrect password or email."})
      } else {
        this.setState({errorMessage: error.message});
      }
    });


  }
  signUp(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
      console.log(u);
      let user =fire.auth().currentUser;
      if(user!=null){
        user.updateProfile(
            {
              displayName: this.state.name
            }
        )
        .then(r => {})
      }

    }).catch((error)=>{
      console.log(error);
      this.setState({errorMessage: error.message});
    });
    let db = fire.firestore();
    let data = {
      name: this.state.name,
      email: this.state.email,
      college: this.state.college
    };
    db.collection(this.state.email).doc('UserProfile').set(data);
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
                {this.state.errorMessage && (
                    <h6 className='error-msg'>{this.state.errorMessage}</h6>
                )}
                <Form.Group as={Row}>
                  <Form.Label column sm='1'>
                    <FontAwesomeIcon icon={faUser}/>
                  </Form.Label>
                  <Col sm='10' className='form-input'>
                    <Form.Control value={this.state.name} onChange={this.handleChange} name='name' type='text' placeholder='Full Name'/>
                  </Col>
                </Form.Group>

                <Form.Group as={Row} controlId='formPlaintextEmail'>
                  <Form.Label column sm='1'>
                    <FontAwesomeIcon icon={faEnvelope}/>
                  </Form.Label>
                  <Col sm='10' className='form-input'>
                    <Form.Control value={this.state.email} onChange={this.handleChange} name='email' type='email' placeholder='Email'/>
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

                <Form.Group as={Row} controlId='plaintext'>
                  <Form.Label column sm='1'>
                    <FontAwesomeIcon icon={faBookReader}/>
                  </Form.Label>
                  <Col sm='10' className='form-input'>
                    <Form.Control value={this.state.college} onChange={this.handleChange} name='college' type='text' placeholder='College'/>
                  </Col>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='primary' onClick={this.signUp} name={this.state.name}>
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
                {this.state.errorMessage && (
                    <h6 className='error-msg'>{this.state.errorMessage}</h6>
                )}
                <Form.Group as={Row} controlId='formPlaintextEmail'>
                  <Form.Label column sm='1'>
                    <FontAwesomeIcon icon={faUser}/>
                  </Form.Label>
                  <Col sm='10' className='form-input'>
                    <Form.Control onChange={this.handleChange} name='email' type='email' placeholder='Email'/>
                  </Col>
                </Form.Group>
                <Form.Group as={Row} controlId='formPlaintextPassword'>
                  <Form.Label column sm='1'>
                    <FontAwesomeIcon icon={faLock}/>
                  </Form.Label>
                  <Col sm='10' className='form-input'>
                    <Form.Control onChange={this.handleChange} name='password' type='password' placeholder='Password'/>
                  </Col>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='primary' onClick={this.login} name={this.state.name}>
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
