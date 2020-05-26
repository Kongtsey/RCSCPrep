import React, { Component } from 'react';
import fire from '../config/Fire';
import NavBar from '../components/homePageNavbar';
import Footer from "../components/footer";
import {Col, Container, Form, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
class Login extends Component {
    constructor(props) {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email: '',
            password: ''
        };
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    login(e) {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            console.log("Logged IN")
        }).catch((error) => {
            console.log(error);
        });
    }

    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        }).then((u)=>{console.log(u)})
            .catch((error) => {
                console.log(error);
            })
    }

// <div className="container">
// <form>
// <div className="form-group">
// <label htmlFor="exampleInputEmail1">Email address</label>
// <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
// </div>
// <div className="form-group">
// <label htmlFor="exampleInputPassword1">Password</label>
// <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
// </div>
// <button type="submit" onClick={this.login} className="btn btn-primary">Login</button>
// <button onClick={this.signup} style={{marginLeft: '25px'}} className="btn btn-success">Signup</button>
// </form>
//
// </div>

// <React.Fragment>
// <Container fluid={true} className="parent-div">
// <NavBar/>
// <Container>
// <Row className="login-div login-form">
// <Col md={6} lg={6} sm={12}>
// <Form>
// <Form.Group controlId="formBasicEmail">
// <Form.Label>Email Address</Form.Label>
// <Form.Control type='email' placeholder='Enter Email'/>
// </Form.Group>
// <Form.Group controlId="formBasicPassword">
// <Form.Label>Password</Form.Label>
// <Form.Control type="password" placeholder="Enter Password"/>
// </Form.Group>
// <Button variant="primary" type="submit">
// Login
// </Button>
// </Form>
// </Col>
// </Row>
// </Container>
// </Container>
// </React.Fragment>
    render() {
        return (
            <div>
                <h1>Whats up</h1>
            </div>
        );
    }
}
export default Login;