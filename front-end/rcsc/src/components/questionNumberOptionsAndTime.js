import React from "react";
import { Col, Row, Dropdown, DropdownButton } from "react-bootstrap";
import "../style-sheet/number-of-question.css";
function NumberOfQuestion() {
  return (
    <React.Fragment>
      <Row>
        <Col md={8} lg={8} sm={8}>
          <DropdownButton id='dropdown-basic-button' title='Number of questions'>
            <Dropdown.Item>5 questions</Dropdown.Item>
            <Dropdown.Item>10 questions</Dropdown.Item>
            <Dropdown.Item>15 questions</Dropdown.Item>
            <Dropdown.Item>20 questions</Dropdown.Item>
          </DropdownButton>
        </Col>

        <Col md={4} lg={4} sm={4}>
          <DropdownButton id='dropdown-basic-button' title='Timer'>
            <Dropdown.Item>On</Dropdown.Item>
            <Dropdown.Item>Off</Dropdown.Item>
          </DropdownButton>
        </Col>
      </Row>
    </React.Fragment>
  );
}
export default NumberOfQuestion;
