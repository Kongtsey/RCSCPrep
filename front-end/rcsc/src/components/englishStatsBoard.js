import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style-sheet/math-stats-jumbo-box.css";
import CorrectWrong from "./pieChartData";

function EnglishStatsBoard() {
  return (
    <React.Fragment>
      <Row>
        <Col md={12} lg={12} sm={12}>
          <Link to={"/english_pratice"} style={{ color: "white" }}>
            <Button>Practice English</Button>
          </Link>
          <br />
          <br />
          {<CorrectWrong category={"EnglishQuestions"}/>}
        </Col>
      </Row>
    </React.Fragment>
  );
}
export default EnglishStatsBoard;
