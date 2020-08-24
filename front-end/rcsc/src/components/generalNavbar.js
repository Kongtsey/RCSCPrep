import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import {auth,firestore} from "firebase";
import "../style-sheet/general-navbar.css";
import logo from "../images/Kongtsey..png";

class GeneralNavigationBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pending: true,
      toShowPieChartPage: false,
    }
  }
  componentDidMount() {
    let user = auth().currentUser;
    let db = firestore()
    let isPracticeExamDone = db.collection(user.email).doc('UserProfile')
    isPracticeExamDone
        .get()
        .then((doc)=>{
          if(doc.data().practiceExam){
            this.setState({
              pending: false,
              toShowPieChartPage: true
            })
          } else {
            this.setState({
              pending: false,
            })
          }
        })
        .catch((err)=>{
          console.log(err)
        })
  }

  logout() {
    auth().signOut();
  }
  render() {
    if (this.state.pending){
      return <p>loading . . . </p>
    }
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
            {this.state.toShowPieChartPage ? <Nav.Link href='/examPracticePage'>Exam</Nav.Link>: <Nav.Link href='/exam'>Exam</Nav.Link>}
            <Nav.Link href='/feedback'><span className='feedbackLink'>Feedback</span></Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link> {auth().currentUser.displayName}</Nav.Link>
            &nbsp;&nbsp;&nbsp;
            <Nav.Link>
              <FontAwesomeIcon icon={faUserCircle} className='user_profile_picture' />
            </Nav.Link>
            <Nav.Link onClick={this.logout}> LogOut </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default GeneralNavigationBar;
