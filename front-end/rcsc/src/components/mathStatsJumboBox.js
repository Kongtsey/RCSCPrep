import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Jumbotron, Button } from "react-bootstrap";
import "../style-sheet/math-stats-jumbo-box.css";

function GeneralNavigationBar() {
  return (
    <React.Fragment>
      <Row>
        <Col md={1} lg={1}>
          <Button>Practice Math</Button>
        </Col>
      </Row>
      <Row>
        <Col md={12} lg={12} sm={12}></Col>
      </Row>
    </React.Fragment>
  );
}
export default GeneralNavigationBar;
