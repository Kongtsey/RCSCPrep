import React, { Component } from "react";
import { Container, Col, Row, Form, Nav, Navbar, Button, Modal } from "react-bootstrap";
import "../style-sheet/homepage-navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBookReader, faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import fire from "../config/Fire";

class NavigationBar extends Component {
  constructor(props) {
    super(props);
    // this.copyData = this.copyData.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCloseLogin = this.handleCloseLogin.bind(this);
    this.handleShowLogin = this.handleShowLogin.bind(this);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signUp = this.signUp.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      questionData: [],
      toShowLogin: false,
      toShowSignUp: false,
      email: "",
      password: "",
      confirmPassword: "",
      showConfirm: false, //show confirm is used to decide whther to show error message" passwords dont match"
      errorMessage: "",
      name: "",
      college: "",
      showRequired: false,
    };
  }
  //Functions
  //Modal Functions Start <---
  handleClose() {
    this.setState({ toShowSignUp: false });
  }
  handleShow() {
    this.setState({ toShowSignUp: true });
    this.setState({
      name: "",
      email: "",
      password: "",
      errorMessage: "",
      college: "",
      showConfirm: false,
      confirmPassword: "",
      showRequired: false,
    });
  }
  handleCloseLogin() {
    this.setState({ toShowLogin: false });
    this.setState({
      email: "",
      password: "",
      errorMessage: "",
    });
  }
  handleShowLogin() {
    this.setState({ toShowLogin: true });
  }
  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  //Modal Functions end --->

  //Firebase Functions start <--

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ errorMessage: "" });
    this.setState({ showConfirm: false });
    this.setState({ showRequired: false });
    let charCodeName = this.state.name.charCodeAt(0);
    let charCodeCollege = this.state.college.charCodeAt(0);
    if (this.state.name === "" || this.state.college === "" || charCodeName === 32 || charCodeCollege === 32) {
      this.setState({ showRequired: true });
    } else if (this.state.password !== this.state.confirmPassword) {
      this.setState({ showConfirm: true });
    } else {
      this.signUp();
    }
  }
  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log("Logged In");
      })
      .catch((error) => {
        console.log(error);
        if (error.code === "auth/user-not-found") {
          this.setState({ errorMessage: "Incorrect password or email." });
        } else {
          this.setState({ errorMessage: error.message });
        }
      });
  }

  signUp() {
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        console.log(u);
        let user = fire.auth().currentUser;
        if (user != null) {
          user
            .updateProfile({
              displayName: this.state.name,
            })
            .then((r) => {
              let db = fire.firestore();
              let data = {
                name: this.state.name,
                email: this.state.email,
                college: this.state.college,
              }
              db.collection(this.state.email).doc("UserProfile").set(data);
              //console.log("email user: ", this.state.email);
              db.collection("Questions")
                .get()
                .then((snapshot) => {
                  let counter = 0;
                  snapshot.forEach((doc) => {
                    console.log(doc.id, " -----> ", doc.data());
                    db.collection(this.state.email).doc("MathQuestions").collection("Questions").doc(doc.id).set({
                      Category: doc.data().Category,
                      Choice: doc.data().Choice,
                      CorrectAnswer: doc.data().CorrectAnswer,
                      IsAnswerCorrect: doc.data().IsAnswerCorrect,
                      Question: doc.data().Question,
                      UserHasResponded: doc.data().UserHasResponded,
                      QuestionYear: doc.data().QuestionYear,
                      Marked: doc.data().Marked,
                    });
                    counter = 1 + counter;
                    console.log(counter);
                  });
                  console.log("done copying the database ");
                });

              db.collection("EnglishQuestions")
                .get()
                .then((snapshot) => {
                  let counter = 0;
                  snapshot.forEach((doc) => {
                    console.log(doc.id, " -----> ", doc.data());
                    db.collection(this.state.email).doc("EnglishQuestions").collection("Questions").doc(doc.id).set({
                      Category: doc.data().Category,
                      Choice: doc.data().Choice,
                      CorrectAnswer: doc.data().CorrectAnswer,
                      IsAnswerCorrect: doc.data().IsAnswerCorrect,
                      Question: doc.data().Question,
                      UserHasResponded: doc.data().UserHasResponded,
                      QuestionYear: doc.data().QuestionYear,
                      Marked: doc.data().Marked,
                      Passage: doc.data().Passage,
                      isPassageQuestion: doc.data().isPassageQuestion,
                    });
                    counter = 1 + counter;
                    console.log(counter);
                  });
                  console.log("done copying the database ");
                });
            });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({ errorMessage: error.message });
      });
  }

  //Render
  render() {
    return (
      <React.Fragment>
        <Container className='navbar-parent-container'>
          <Navbar collapseOnSelect expand='lg'>
            <Navbar.Brand href='#home'>RCSC Prep</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='mr-auto'>
                <Nav.Link href='#about'>About</Nav.Link>
                <Nav.Link href='#contact'>Contact</Nav.Link>
              </Nav>
              <Form inline>
                <Button variant='light' className='login' onClick={this.handleShowLogin}>
                  Login
                </Button>
                <Button className='button buttonText' onClick={this.handleShow}>
                  <span>Sign Up</span>
                </Button>
              </Form>
            </Navbar.Collapse>
          </Navbar>
          <hr />
        </Container>

        {/*Sign Up Form*/}
        <Modal show={this.state.toShowSignUp} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {this.state.errorMessage && <h6 className='error-msg'>{this.state.errorMessage}</h6>}
              <Form.Group as={Row}>
                <Form.Label column sm='1'>
                  <FontAwesomeIcon icon={faUser} />
                </Form.Label>
                <Col sm='10' className='form-input'>
                  <Form.Control value={this.state.name} onChange={this.handleChange} name='name' type='text' placeholder='Full Name' />
                  {this.state.showRequired && <h6 className='error-msg'>Required field!</h6>}
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId='formPlaintextEmail'>
                <Form.Label column sm='1'>
                  <FontAwesomeIcon icon={faEnvelope} />
                </Form.Label>
                <Col sm='10' className='form-input'>
                  <Form.Control value={this.state.email} onChange={this.handleChange} name='email' type='email' placeholder='Email' />
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId='formPlaintextPassword'>
                <Form.Label column sm='1'>
                  <FontAwesomeIcon icon={faLock} />
                </Form.Label>
                <Col sm='10' className='form-input'>
                  <Form.Control value={this.state.password} onChange={this.handleChange} name='password' type='password' placeholder='Password' />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId='formPlaintextPasswordConfirm'>
                <Form.Label column sm='1'>
                  <FontAwesomeIcon icon={faLock} />
                </Form.Label>
                <Col sm='10' className='form-input'>
                  <Form.Control value={this.state.confirmPassword} onChange={this.handleChange} name='confirmPassword' type='password' placeholder='Renter Password' handle={this.handleError} />
                  {this.state.showConfirm && <h6 className='error-msg'>Passwords do not seem to match</h6>}
                </Col>
              </Form.Group>

              <Form.Group as={Row} controlId='plaintext'>
                <Form.Label column sm='1'>
                  <FontAwesomeIcon icon={faBookReader} />
                </Form.Label>
                <Col sm='10' className='form-input'>
                  <Form.Control value={this.state.college} onChange={this.handleChange} name='college' type='text' placeholder='College' />
                  {this.state.showRequired && <h6 className='error-msg'>Required field!</h6>}
                </Col>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <p
              className='haveAnAcc'
              onClick={() => {
                this.handleClose();
                this.handleShowLogin();
              }}
            >
              Already have an account?
            </p>
            <div column sm={4}>
              <Button variant='primary' onClick={this.handleSubmit} name={this.state.name}>
                Sign up
              </Button>
            </div>
          </Modal.Footer>
        </Modal>

        {/*For Login Form*/}
        <Modal show={this.state.toShowLogin} onHide={this.handleCloseLogin}>
          <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              {this.state.errorMessage && <h6 className='error-msg'>{this.state.errorMessage}</h6>}
              <Form.Group as={Row} controlId='formPlaintextEmail'>
                <Form.Label column sm='1'>
                  <FontAwesomeIcon icon={faUser} />
                </Form.Label>
                <Col sm='10' className='form-input'>
                  <Form.Control onChange={this.handleChange} name='email' type='email' placeholder='Email' />
                </Col>
              </Form.Group>
              <Form.Group as={Row} controlId='formPlaintextPassword'>
                <Form.Label column sm='1'>
                  <FontAwesomeIcon icon={faLock} />
                </Form.Label>
                <Col sm='10' className='form-input'>
                  <Form.Control onChange={this.handleChange} name='password' type='password' placeholder='Password' />
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
          <p
            onClick={() => {
              this.handleCloseLogin();
              this.handleShow();
            }}
          >
            Create Account
          </p>
        </Modal>
      </React.Fragment>
    );
  }
}

export default NavigationBar;
