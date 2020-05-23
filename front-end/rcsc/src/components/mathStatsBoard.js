import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";
import "../style-sheet/math-stats-jumbo-box.css";

function MathStatsBoard() {
  return (
    <React.Fragment>
      <Row>
        <Col md={12} lg={12} sm={12}>
          <Link to={"/math_pratice"} style={{ color: "white" }}>
            <Button>Practice Math</Button>
          </Link>
          <br />
          <br />
          <h2>THIS IS WHERE THE PIE CHART SHOWING THER PROPRTTION OF THE CORRECT AND WORNG ANSWER WILL BE</h2>
          <hr />
          <p>
            Description: <br /> correct =23 <br /> Incorrect= 45
            <br />
          </p>
        </Col>
      </Row>
    </React.Fragment>
  );
}
export default MathStatsBoard;
