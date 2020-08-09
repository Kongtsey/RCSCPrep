import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import MathSignUpExam from "./math-exam-sign-up-result";
import EnglishSignUpExam from "./english-exam-sign-up-result";
import "../../style-sheet/sign-up-exam-result.css";

class SignUpExamResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <Container>
          <br />
          <Row>
            <h3 style={{ paddingLeft: "10px" }}> Final Score: 55/100</h3>
          </Row>
          <br />
          <Row>
            <Col md={3} className={"sign-up-exam-subject-result-parent-box"}>
              <div className={"sign-up-exam-subject-result"}>
                <MathSignUpExam />
              </div>
            </Col>
            <Col md={3} className={"sign-up-exam-subject-result-parent-box"}>
              <div className={"sign-up-exam-subject-result"}>
                <EnglishSignUpExam />
              </div>
            </Col>
            <Col md={3} className={"sign-up-exam-subject-result-parent-box"}>
              <div className={"sign-up-exam-subject-result"}>
                <MathSignUpExam />
              </div>
            </Col>
            <Col md={3} className={"sign-up-exam-subject-result-parent-box"}>
              <div className={"sign-up-exam-subject-result"}>
                <MathSignUpExam />
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(SignUpExamResult);
