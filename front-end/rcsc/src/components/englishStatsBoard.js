import React from "react";
import { Row, Col } from "react-bootstrap";
import "../style-sheet/math-stats-jumbo-box.css";
import CorrectWrong from "./pieChartData";

function EnglishStatsBoard() {
  return (
    <React.Fragment>
      <Row>
        <Col md={12} lg={12} sm={12}>
          <h3 className='pieTopic'>English</h3>
          <h2>{<CorrectWrong category={"EnglishQuestions"} />}</h2>
        </Col>
      </Row>
    </React.Fragment>
  );
}
export default EnglishStatsBoard;
