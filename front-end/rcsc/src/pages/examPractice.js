import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../style-sheet/exam-practice.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import GeneralNavbar from "../components/generalNavbar";
import ReadExamPracticeMath from "../components/readExamPracticeMath";
import ReadExamPracticeEnglish from "../components/readExamPracticeEnglish";
import MathExamPracticeResult from "../components/MathExamPracticeResult";
import EnglishExamPracticeResult from "../components/EnglishExamPracticeResult";
import $ from "jquery";

class ExamPractice extends React.Component {
  constructor(props) {
    super(props);
    this.handleDisplay = this.handleDisplay.bind(this);
    this.handleTable = this.handleTable.bind(this);
  }

  handleDisplay = (subject_name) => () => {
    //console.log(id_name);
    // This highlights the border-bottom and the color of the text.
    $(".tabs").removeClass("active");
    $(".tab-header #" + subject_name).addClass("active");

    $(".subjects-parent .subject").removeClass("subject-active");
    $(".subjects-parent #" + subject_name).addClass("subject-active");
  };

  handleTable = (subject_name) => () => {
    //console.log(id_name);
    // This highlights the border-bottom and the color of the text.
    $(".table-tabs").removeClass("active");
    $(".table-tab-header #" + subject_name).addClass("active");

    $(".table-subjects-parent .table-subject").removeClass("table-subject-active");
    $(".table-subjects-parent #" + subject_name).addClass("table-subject-active");
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
          {/* --------------------------------------------------------------------------------------------- */}
          <Row>
            <Col md={"8"}>
              <span> Are you usure you want to submit? </span>
            </Col>
            <Col md={"4"} className={"parent-table-submit-exam"}>
              <Button variant='danger' className={"table-submit-exam"}>
                Submit
              </Button>
            </Col>
          </Row>
          <Row className={"table-tab-header"}>
            <Col md={1} id={"table-math"} className={"table-tabs active"}>
              <button onClick={this.handleTable("table-math")}>Math</button>
            </Col>
            <Col md={1} id={"table-english"} className={"table-tabs"}>
              <button onClick={this.handleTable("table-english")}>English</button>
            </Col>
            <Col md={1} id={"table-dzongkha"} className={"table-tabs"}>
              <button onClick={this.handleTable("table-dzongkha")}>Dzongkha</button>
            </Col>
            <Col md={2} id={"table-data"} className={"table-tabs"}>
              <button onClick={this.handleTable("table-data")}>Data Interpretation</button>
            </Col>
          </Row>
          <br /> <br />
          <Row className={"table-subjects-parent"}>
            <Col md={12}>
              <div id={"table-math"} className={"table-subject table-subject-active"}>
                <MathExamPracticeResult />
              </div>
            </Col>
            <Col md={12}>
              <div id={"table-english"} className={"table-subject"}>
                <EnglishExamPracticeResult />
              </div>
            </Col>
          </Row>
          {/* --------------------------------------------------------------------------------------------- */}
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
            <Col md={2}>
              <Button variant='success' className={"submit-exam"}>
                Submit
              </Button>
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
