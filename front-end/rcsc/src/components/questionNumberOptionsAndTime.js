import React, { Component } from "react";
import { Form, Col, Row } from "react-bootstrap";
import "../style-sheet/number-of-question.css";

class NumberOfQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "5" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    console.log("the event value is: ", event.target.value);
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <React.Fragment>
        <Row>
          <Col md={4} lg={4} sm={12}>
            <Form>
              <Form.Group>
                <Form.Control as='select' size='sm' value={this.state.value} onChange={this.handleChange}>
                  <option value='5'>5 Questions</option>
                  <option value='10'>10 Questions</option>
                  <option value='15'>15 Questions</option>
                  <option value='20'>20 Questions</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Col>

          <Col md={4} lg={4} sm={12}>
            <Form>
              <Form.Group>
                <Form.Control as='select' size='sm' custom>
                  <option>Timer: Off</option>
                  <option>Timer: On</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </Col>
          <Col md={4} lg={4} sm={12}>
            <input type='submit' value='Submit' style={{ padding: "2px 10px", background: "#ffcA00", color: "white" }} />
          </Col>
        </Row>
      </React.Fragment>
    );
  }
}
export default NumberOfQuestion;
