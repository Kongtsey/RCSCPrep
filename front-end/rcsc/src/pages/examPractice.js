import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import "../style-sheet/practice-math.css";
import GeneralNavbar from "../components/generalNavbar";
import ReadExamPracticeMath from "../components/readExamPracticeMath";
class ExamPractice extends Component {
  render() {
    return (
      <React.Fragment>
        <GeneralNavbar />
        <br />
        {<ReadExamPracticeMath />}
      </React.Fragment>
    );
  }
}
export default withRouter(ExamPractice);
