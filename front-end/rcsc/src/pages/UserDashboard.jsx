import React, { Component } from "react";
import "../style-sheet/user-dashboard.css";
import fire from "../config/Fire";
import ReadData from "../components/readMathData";
class UserDashboard extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
    fire.auth().signOut();
  }
  render() {
    return (
      <React.Fragment>
        <ReadData />
        <div>
          <h1>WELCOME USER</h1>
          <br />
          <button onClick={this.logout}>Logout</button>
        </div>
      </React.Fragment>
    );
  }
}

export default UserDashboard;
