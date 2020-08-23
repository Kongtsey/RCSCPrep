import React from "react";
import { withRouter } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import "../../style-sheet/sign-up-exam-result.css";
import ExamPieChart from "./exam-pie-chart";

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
            <h3 style={{ paddingLeft: "10px" }}> Final Score: need to aggregate all the scores</h3>
          </Row>
          <br />
          <Row>
            <Col md={3} className={"sign-up-exam-subject-result-parent-box"}>
              <div className={"sign-up-exam-subject-result"}>
                <ExamPieChart subject='Math' />
              </div>
            </Col>
            <Col md={3} className={"sign-up-exam-subject-result-parent-box"}>
              <div className={"sign-up-exam-subject-result"}>
                <ExamPieChart subject={"English"} />
              </div>
            </Col>
            <Col md={3} className={"sign-up-exam-subject-result-parent-box"}>
              <div className={"sign-up-exam-subject-result"}>
                <ExamPieChart subject={"Dzongkha"} />
              </div>
            </Col>
            <Col md={3} className={"sign-up-exam-subject-result-parent-box"}>
              <div className={"sign-up-exam-subject-result"}>
                <ExamPieChart subject={"Data"} />
              </div>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(SignUpExamResult);
