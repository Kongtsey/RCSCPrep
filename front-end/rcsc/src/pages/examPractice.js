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

  handleDisplay = () => () => {};

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
          <Row>
            <Col md={2} id={"math"} className={"tabs active"}>
              <button onClick={this.handleDisplay}>Math</button>
            </Col>
            <Col md={2} id={"english"} className={"tabs"}>
              <button onClick={this.handleDisplay}>English</button>
            </Col>
            <Col md={2} id={"dzongkha"} className={"tabs"}>
              <button onClick={this.handleDisplay}>Dzongkha</button>
            </Col>
            <Col md={3} id={"data"} className={"tabs"}>
              <button onClick={this.handleDisplay}>Data Interpretation</button>
            </Col>
          </Row>
          <br /> <br />
          <Row>
            <div className={"subjects"}>
              <ReadExamPracticeMath />
            </div>
            <div className={"subjects"}>
              <ReadExamPracticeEnglish />
            </div>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(ExamPractice);
