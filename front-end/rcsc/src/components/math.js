import React from "react";
import { Button, Row, Col } from "react-bootstrap";

function MathJumboBox() {
  return (
    <React.Fragment>
      <Row>
        <Col md={12}>
          <h5> Math </h5>
          <Button>Explore</Button>
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default MathJumboBox;
