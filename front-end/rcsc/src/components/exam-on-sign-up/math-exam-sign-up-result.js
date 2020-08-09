import React from "react";
import { Row, Col } from "react-bootstrap";
import ExamPieChart from "./exam-pie-chart";

function MathSignUpExam() {
  return (
    <React.Fragment>
      <Row>
        <Col md={12} lg={12} sm={12}>
          <h3 className='pieTopic'>Mathematics</h3>
          <h2>{<ExamPieChart subject='Math' />}</h2>
        </Col>
      </Row>
    </React.Fragment>
  );
}
export default MathSignUpExam;
