import userDashboard from "./pages/UserDashboard";
import React, { Component } from "react";
import fire from "./config/Fire";
import "./App.css";
import UserDashboard from "./pages/UserDashboard";

class SignUpAuth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return <div className='App'>{this.state.user ? <UserDashboard /> : <UserDashboard />}</div>;
  }
}
export default SignUpAuth;
