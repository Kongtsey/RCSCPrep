import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { auth } from "firebase";
import "../style-sheet/general-navbar.css";
import logo from "../images/Kongtsey..png";

class GeneralNavigationBar extends Component {
  // constructor(props) {
  //   super(props);
  // }
  // componentDidMount() {
  //   let user = auth().currentUser;
  //   let db = firestore();
  //   let isPracticeExamDone = db.collection(user.email).doc("UserProfile");
  //   isPracticeExamDone
  //     .get()
  //     .then((doc) => {
  //       if (doc.data().practiceExam) {
  //         this.setState({
  //           pending: false,
  //           toShowPieChartPage: true,
  //         });
  //       } else {
  //         this.setState({
  //           pending: false,
  //         });
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }

  logout() {
    auth().signOut();
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
            <Nav.Link href='/feedback'>
              <span className='feedbackLink'>Feedback</span>
            </Nav.Link>
            {/* <Nav.Link href='/tutorial_videos'>Tutorial Videos</Nav.Link> */}
          </Nav>
          <Nav>
            <Nav.Link>
              <span style={{ color: "white", fontSize: "large", cursor: "text" }}>{auth().currentUser.displayName}</span>
            </Nav.Link>
            &nbsp;&nbsp;&nbsp;
            <Nav.Link onClick={this.logout}> Log Out </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default GeneralNavigationBar;
