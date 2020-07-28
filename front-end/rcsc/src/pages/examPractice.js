import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import "../style-sheet/practice-math.css";
import GeneralNavbar from "../components/generalNavbar";
import ReadExamPractice from "../components/readExamPractice";
class ExamPractice extends Component {
  render() {
    return (
      <React.Fragment>
        <GeneralNavbar />
        <br />
        {<ReadExamPractice />}
      </React.Fragment>
    );
  }
}
export default withRouter(ExamPractice);
