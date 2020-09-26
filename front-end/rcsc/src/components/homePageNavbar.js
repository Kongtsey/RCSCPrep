import React, {Component} from "react";
import {Container, Col, Row, Form, Nav, Navbar, Button, Modal} from "react-bootstrap";
import "../style-sheet/homepage-navbar.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faBookReader, faUser, faLock, faMapMarker} from "@fortawesome/free-solid-svg-icons";
import {auth, firestore, analytics} from "firebase";
import logo from "../images/Kongtsey..png";

// import Loading from "./loading-page-after-sign-up/after-sign-up-loading";

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
        this.copyMathDatabase = this.copyMathDatabase.bind(this);
        this.copyEnglishDatabase = this.copyEnglishDatabase.bind(this);
        // this.copyMathSignUpExam = this.copyMathSignUpExam.bind(this);
        // this.copyEnglishSignUpExam = this.copyEnglishSignUpExam.bind(this);
        // this.copyDzongkhaSignUpExam = this.copyDzongkhaSignUpExam.bind(this);
        // this.copyDataIntSignUpExam = this.copyDataIntSignUpExam.bind(this);
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
            dzongkhag: "",
            showRequired: false,
        };
    }

    //Functions
    //Modal Functions Start <---
    handleClose() {
        this.setState({
            toShowSignUp: false,
            errorMessage: "",
        });
    }

    handleShow() {
        this.setState({toShowSignUp: true});
        this.setState({
            name: "",
            email: "",
            password: "",
            errorMessage: "",
            college: "",
            dzongkhag: "",
            showConfirm: false,
            confirmPassword: "",
            showRequired: false,
        });
    }

    handleCloseLogin() {
        this.setState({toShowLogin: false});
        this.setState({
            email: "",
            password: "",
            errorMessage: "",
        });
    }

    handleShowLogin() {
        this.setState({toShowLogin: true});
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    //Modal Functions end --->

    //Firebase Functions start <--

    handleSubmit(e) {
        e.preventDefault();
        this.setState({errorMessage: ""});
        this.setState({showConfirm: false});
        this.setState({showRequired: false});
        let charCodeName = this.state.name.charCodeAt(0);
        let charCodeCollege = this.state.college.charCodeAt(0);
        if (this.state.name === "" || this.state.college === "" || charCodeName === 32 || charCodeCollege === 32) {
            this.setState({showRequired: true});
        } else if (this.state.password !== this.state.confirmPassword) {
            this.setState({showConfirm: true});
        } else {
            this.signUp();
        }
    }

    login(e) {
        e.preventDefault();
        this.setState({errorMessage: ""});
        auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((u) => {
                // console.log("Logged In");
                analytics().logEvent("login");
            })
            .catch((error) => {
                console.log(error);
                if (error.code === "auth/user-not-found") {
                    this.setState({errorMessage: "Incorrect password or email."});
                } else {
                    this.setState({errorMessage: error.message});
                }
            });
    }

    signUp() {
        auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((u) => {
                let user = auth().currentUser;
                console.log(user);
                if (user != null) {
                    user
                        .updateProfile({
                            displayName: this.state.name,
                        })
                        .then((r) => {
                            let db = firestore();
                            let data = {
                                name: this.state.name,
                                email: this.state.email,
                                college: this.state.college,
                                dzongkhag: this.state.dzongkhag,
                                practiceExam: false,
                            };
                            analytics().logEvent("sign_up");
                            return db.collection(this.state.email).doc("UserProfile").set(data);
                        })
                        .then(() => {
                            return this.copyEnglishDatabase();
                        })
                        .then(() => {
                            return this.copyMathDatabase();
                        });
                    // .then(() => {
                    //   return this.copyMathSignUpExam();
                    // })
                    // .then(() => {
                    //   return this.copyEnglishSignUpExam();
                    // })
                    // .then(() => {
                    //   return this.copyDzongkhaSignUpExam();
                    // })
                    // .then(() => {
                    //   return this.copyDataIntSignUpExam();
                    // });
                    // .then(() => {
                    //   this.props.history.push("/loader");
                    // });
                }
            })
            .catch((error) => {
                console.log(error);
                this.setState({errorMessage: error.message});
            });
    }

    copyMathDatabase() {
        let db = firestore();
        return db
            .collection("Questions")
            .get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    db.collection(this.state.email).doc("MathQuestions").collection("Questions").doc(doc.id).set({
                        Category: doc.data().Category,
                        Choice: doc.data().Choice,
                        CorrectAnswer: doc.data().CorrectAnswer,
                        IsCorrectAnswer: doc.data().IsCorrectAnswer,
                        IsWrongAnswer: doc.data().IsWrongAnswer,
                        Question: doc.data().Question,
                        UserHasNotResponded: doc.data().UserHasNotResponded,
                        Marked: doc.data().Marked,
                        explanationURL: doc.data().explanationURL,
                    });
                });
                console.log("done with Math");
            });
    }

    copyEnglishDatabase() {
        let db = firestore();
        return db
            .collection("EnglishQuestions")
            .get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    db.collection(this.state.email).doc("EnglishQuestions").collection("Questions").doc(doc.id).set({
                        Category: doc.data().Category,
                        Choice: doc.data().Choice,
                        CorrectAnswer: doc.data().CorrectAnswer,
                        IsCorrectAnswer: doc.data().IsCorrectAnswer,
                        IsWrongAnswer: doc.data().IsWrongAnswer,
                        Question: doc.data().Question,
                        UserHasNotResponded: doc.data().UserHasNotResponded,
                        Marked: doc.data().Marked,
                        Passage: doc.data().Passage,
                        isPassageQuestion: doc.data().isPassageQuestion,
                        explanationURL: doc.data().explanationURL,
                    });
                });
                console.log("done with English  ");
            });
    }

    // copyMathSignUpExam() {
    //   let db = fire.firestore();
    //   return db
    //     .collection("PracticeExamOnSignUp")
    //     .doc("Math")
    //     .collection("MathQuestions")
    //     .get()
    //     .then((snapshot) => {
    //       snapshot.forEach((doc) => {
    //         db.collection(this.state.email).doc("ExamOnSignUp").collection("Math").doc(doc.id).set({
    //           Category: doc.data().Category,
    //           Choice: doc.data().Choice,
    //           CorrectAnswer: doc.data().CorrectAnswer,
    //           IsCorrectAnswer: doc.data().IsCorrectAnswer,
    //           IsWrongAnswer: doc.data().IsWrongAnswer,
    //           Question: doc.data().Question,
    //           UserHasNotResponded: doc.data().UserHasNotResponded,
    //           QuestionYear: doc.data().QuestionYear,
    //           Marked: doc.data().Marked,
    //         });
    //       });
    //       console.log("done with Math Exam");
    //     });
    // }

    // copyEnglishSignUpExam() {
    //   let db = fire.firestore();
    //   return db
    //     .collection("PracticeExamOnSignUp")
    //     .doc("English")
    //     .collection("EnglishQuestions")
    //     .get()
    //     .then((snapshot) => {
    //       snapshot.forEach((doc) => {
    //         db.collection(this.state.email).doc("ExamOnSignUp").collection("English").doc(doc.id).set({
    //           Category: doc.data().Category,
    //           Choice: doc.data().Choice,
    //           CorrectAnswer: doc.data().CorrectAnswer,
    //           IsCorrectAnswer: doc.data().IsCorrectAnswer,
    //           IsWrongAnswer: doc.data().IsWrongAnswer,
    //           Question: doc.data().Question,
    //           UserHasNotResponded: doc.data().UserHasNotResponded,
    //           QuestionYear: doc.data().QuestionYear,
    //           Marked: doc.data().Marked,
    //           IsPassageQuestion: doc.data().IsPassageQuestion,
    //           Passage: doc.data().Passage,
    //         });
    //       });
    //       console.log("done with Eng exam");
    //     });
    // }
    // copyDzongkhaSignUpExam() {
    //   let db = fire.firestore();
    //   return db
    //     .collection("PracticeExamOnSignUp")
    //     .doc("Dzongkha")
    //     .collection("DzongkhaQuestions")
    //     .get()
    //     .then((snapshot) => {
    //       snapshot.forEach((doc) => {
    //         db.collection(this.state.email).doc("ExamOnSignUp").collection("Dzongkha").doc(doc.id).set({
    //           Category: doc.data().Category,
    //           CorrectAnswer: doc.data().CorrectAnswer,
    //           IsCorrectAnswer: doc.data().IsCorrectAnswer,
    //           IsWrongAnswer: doc.data().IsWrongAnswer,
    //           Question: doc.data().Question,
    //           UserHasNotResponded: doc.data().UserHasNotResponded,
    //           QuestionYear: doc.data().QuestionYear,
    //           Marked: doc.data().Marked,
    //           Choice: doc.data().Choice,
    //         });
    //       });
    //       console.log("done with dzon");
    //     });
    // }

    // copyDataIntSignUpExam() {
    //   console.log("Into data Interpretation Question");
    //   let db = fire.firestore();
    //   return db
    //     .collection("PracticeExamOnSignUp")
    //     .doc("Data_Interpretation")
    //     .collection("DataInterpretationQuestions")
    //     .get()
    //     .then((snapshot) => {
    //       snapshot.forEach((doc) => {
    //         db.collection(this.state.email).doc("ExamOnSignUp").collection("Data").doc(doc.id).set({
    //           Category: doc.data().Category,
    //           CorrectAnswer: doc.data().CorrectAnswer,
    //           IsCorrectAnswer: doc.data().IsCorrectAnswer,
    //           IsWrongAnswer: doc.data().IsWrongAnswer,
    //           Question: doc.data().Question,
    //           UserHasNotResponded: doc.data().UserHasNotResponded,
    //           QuestionYear: doc.data().QuestionYear,
    //           Marked: doc.data().Marked,
    //           Choice: doc.data().Choice,
    //         });
    //       });
    //       console.log("------------------ DONE ----------------------");
    //     });
    // }

    //Render
    render() {
        return (
            <React.Fragment>
                <Container className='navbar-parent-container'>
                    <Navbar collapseOnSelect expand='lg'>
                        <Navbar.Brand href='/' className='companyName'>
                            <img src={logo} alt='this is the logo' className='logo'/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                        <Navbar.Collapse id='responsive-navbar-nav'>
                            <Nav className='mr-auto'>
                                <Nav.Link href='/about_and_contact'>Contact Us</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href='donate'>Donate</Nav.Link>
                            </Nav>
                            <Form inline>
                                <Button variant='link' className='login' onClick={this.handleShowLogin}>
                                    Login
                                </Button>
                                <Button className='button buttonText' onClick={this.handleShow}>
                                    <span>Sign Up</span>
                                </Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>
                    <hr className='hrNavBar'/>
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
                                <Form.Label column='true' sm='1'>
                                    <FontAwesomeIcon icon={faUser}/>
                                </Form.Label>
                                <Col sm='10' className='form-input'>
                                    <Form.Control value={this.state.name} onChange={this.handleChange} name='name'
                                                  type='text' placeholder='Full Name'/>
                                    {this.state.showRequired && <h6 className='error-msg'>Required field!</h6>}
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId='plaintext'>
                                <Form.Label column='true' sm='1'>
                                    <FontAwesomeIcon icon={faBookReader}/>
                                </Form.Label>
                                <Col sm='10' className='form-input'>
                                    <Form.Control value={this.state.college} onChange={this.handleChange} name='college'
                                                  type='text' placeholder='College'/>
                                    {this.state.showRequired && <h6 className='error-msg'>Required field!</h6>}
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId='plaintext'>
                                <Form.Label column='true' sm='1'>
                                    <FontAwesomeIcon icon={faMapMarker}/>
                                </Form.Label>
                                <Col sm='10' className='form-input'>
                                    <Form.Control value={this.state.dzongkhag} onChange={this.handleChange}
                                                  name='dzongkhag' type='text' placeholder='Dzongkhag'/>
                                    {this.state.showRequired && <h6 className='error-msg'>Required field!</h6>}
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId='formPlaintextEmail'>
                                <Form.Label column='true' sm='1'>
                                    <FontAwesomeIcon icon={faEnvelope}/>
                                </Form.Label>
                                <Col sm='10' className='form-input'>
                                    <Form.Control value={this.state.email} onChange={this.handleChange} name='email'
                                                  type='email' placeholder='Email'/>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId='formPlaintextPassword'>
                                <Form.Label column='true' sm='1'>
                                    <FontAwesomeIcon icon={faLock}/>
                                </Form.Label>
                                <Col sm='10' className='form-input'>
                                    <Form.Control value={this.state.password} onChange={this.handleChange}
                                                  name='password' type='password' placeholder='Password'/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId='formPlaintextPasswordConfirm'>
                                <Form.Label column='true' sm='1'>
                                    <FontAwesomeIcon icon={faLock}/>
                                </Form.Label>
                                <Col sm='10' className='form-input'>
                                    <Form.Control value={this.state.confirmPassword} onChange={this.handleChange}
                                                  name='confirmPassword' type='password' placeholder='Renter Password'
                                                  handle={this.handleError}/>
                                    {this.state.showConfirm &&
                                    <h6 className='error-msg'>Passwords do not seem to match</h6>}
                                </Col>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className='alreadyHaveAcc'>
                            <p
                                className='haveAnAcc'
                                onClick={() => {
                                    this.handleClose();
                                    this.handleShowLogin();
                                }}
                            >
                                Already have an account?
                            </p>
                        </div>
                        <div column='true' sm={4}>
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
                                <Form.Label column='true' sm='1'>
                                    <FontAwesomeIcon icon={faUser}/>
                                </Form.Label>
                                <Col sm='10' className='form-input'>
                                    <Form.Control onChange={this.handleChange} name='email' type='email'
                                                  placeholder='Email'/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId='formPlaintextPassword'>
                                <Form.Label column='true' sm='1'>
                                    <FontAwesomeIcon icon={faLock}/>
                                </Form.Label>
                                <Col sm='10' className='form-input'>
                                    <Form.Control onChange={this.handleChange} name='password' type='password'
                                                  placeholder='Password'/>
                                </Col>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        {/*<p>Forgot Password?</p>*/}
                        <Row>
                            <Col xs={8}>
                                <p
                                    className='createAcc'
                                    onClick={() => {
                                        this.handleCloseLogin();
                                        this.handleShow();
                                    }}
                                >
                                    Create Account
                                </p>
                            </Col>
                            <Col xs={4} className='loginBtn'>
                                <Button variant='primary' onClick={this.login} name={this.state.name}>
                                    Log in
                                </Button>
                            </Col>
                        </Row>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }
}

export default NavigationBar;
