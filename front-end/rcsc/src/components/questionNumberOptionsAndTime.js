import React, { Component } from "react";
import { Form, Col, Row, Container } from "react-bootstrap";
import "../style-sheet/number-of-question.css";
import MathList from "../components/readMathData";
import ReadEnglishQuestion from "../components/readEnglishData";

class NumberOfQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "5", timer: false, valueToBePassed: "5" };
    this.handleChange = this.handleChange.bind(this);
    this.timerHandleChange = this.timerHandleChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit() {
    this.setState({ valueToBePassed: this.state.value });
    console.log("the value to be passed: ", this.state.valueToBePassed);
  }
  handleChange(event) {
    console.log("the event value is: ", event.target.value);
    this.setState({ value: event.target.value });
  }
  timerHandleChange(event) {
    console.log("the timer value is: ", event.target.value);
    this.setState({ timer: event.target.value });
  }
  render() {
    //THIS IS NECESSARY TO CHECK WHERE THIS COMPONENT IS BEING CALLED FROM(EITHER FROM ENGLISH OR MATH)
    const subject = this.props.calledBy;
    let bool;
    if (subject === "english") {
      bool = true;
    } else {
      bool = false;
    }
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col md={3} lg={3} sm={12}>
              <h3> Math Questions</h3>
            </Col>
            <Col md={3} lg={3} sm={12}>
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

            <Col md={3} lg={3} sm={12}>
              <Form>
                <Form.Group>
                  <Form.Control as='select' size='sm' custom value={this.state.bool} onChange={this.timerHandleChange}>
                    <option bool='false' value='false'>
                      Timer: Off
                    </option>
                    <option bool='true' value='true'>
                      Timer: On
                    </option>
                  </Form.Control>
                </Form.Group>
              </Form>
            </Col>

            <Col md={3} lg={3} sm={12}>
              <input type='submit' value='Submit' onClick={this.onSubmit} style={{ padding: "2px 10px", background: "#ffcA00", color: "white" }} />
            </Col>
          </Row>
          <br />

          {bool ? <ReadEnglishQuestion chosenChoiceNumber={parseInt(this.state.valueToBePassed)} /> : <MathList chosenChoiceNumber={parseInt(this.state.valueToBePassed)} />}
        </Container>
      </React.Fragment>
    );
  }
}
export default NumberOfQuestion;
