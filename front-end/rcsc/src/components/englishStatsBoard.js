import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style-sheet/math-stats-jumbo-box.css";

function EnglishStatsBoard() {
  return (
    <React.Fragment>
      <Row>
        <Col md={12} lg={12} sm={12}>
          <Link to={"/english_practice"} style={{ color: "white" }}>
            <Button>Practice English</Button>
          </Link>
          <br />
          <br />
          <h2>THIS IS WHERE THE PIE CHART SHOWING THER PROPRTTION OF THE CORRECT AND WORNG ANSWER WILL BE</h2>
          <hr />
          <p>
            Description: <br /> correct =12 <br /> Incorrect= 1
            <br />
          </p>
        </Col>
      </Row>
    </React.Fragment>
  );
}
export default EnglishStatsBoard;
