import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../style-sheet/exam-practice.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import GeneralNavbar from "../components/generalNavbar";
import ReadExamPracticeMath from "../components/readExamPracticeMath";
import ReadExamPracticeEnglish from "../components/readExamPracticeEnglish";
import $ from "jquery";

class ExamPractice extends React.Component {
  constructor(props) {
    super(props);
    this.handleDisplay = this.handleDisplay.bind(this);
  }

  handleDisplay = (subject_name) => () => {
    //console.log(id_name);
    // This highlights the border-bottom and the color of the text.
    $(".tabs").removeClass("active");
    $(".tab-header #" + subject_name).addClass("active");

    $(".subjects-parent .subject").removeClass("subject-active");
    $(".subjects-parent #" + subject_name).addClass("subject-active");
  };

  render() {
    return (
      <React.Fragment>
        {<GeneralNavbar />}
        <Container>
          <br />
          <Row>
            <h3> Practice Exam </h3>
            <hr />
          </Row>
          <br />
          <Row className={"tab-header"}>
            <Col md={2} id={"math"} className={"tabs active"}>
              <button onClick={this.handleDisplay("math")}>Math</button>
            </Col>
            <Col md={2} id={"english"} className={"tabs"}>
              <button onClick={this.handleDisplay("english")}>English</button>
            </Col>
            <Col md={2} id={"dzongkha"} className={"tabs"}>
              <button onClick={this.handleDisplay("dzongkha")}>Dzongkha</button>
            </Col>
            <Col md={3} id={"data"} className={"tabs"}>
              <button onClick={this.handleDisplay("data")}>Data Interpretation</button>
            </Col>
          </Row>
          <br /> <br />
          <Row className={"subjects-parent"}>
            <div id={"math"} className={"subject subject-active"}>
              <ReadExamPracticeMath />
            </div>
            <div id={"english"} className={"subject"}>
              <ReadExamPracticeEnglish />
            </div>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(ExamPractice);
