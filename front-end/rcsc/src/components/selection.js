import React, { Component } from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import "../style-sheet/mathStatsPage.css";
import Button from "react-bootstrap/Button";
import { renderToString } from "react-dom/server";
import { Link } from "react-router-dom";

class SelectionQueries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numQuestions: 5,
      questionType: "default",
      category: "default",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    this.setState({ numQuestions: 5 });
    this.setState({ questionType: "default" });
  }

  handleChange(e) {
    if (renderToString([e.target.name]) === "numQuestions") {
      this.setState({ [e.target.name]: parseInt([e.target.id]) });
    } else {
      this.setState({ [e.target.name]: [e.target.id].toString() });
    }
  }
  render() {
    return (
      <React.Fragment>
        <Container fluid={true}>
          <Row>
            <Col md={4} className='queryTopic'>
              <h5>Number of Questions: </h5>
              <Form className='radio' onChange={this.handleChange}>
                {["radio"].map((type) => (
                  <div key={`default-${type}`} className='mb-3'>
                    <Form.Check type={type} name='numQuestions' id='5' label='5 questions' checked={this.state.numQuestions === 5} />
                    <Form.Check type={type} id='10' name='numQuestions' label='10 questions' />
                    <Form.Check type={type} id='15' name='numQuestions' label='15 questions' />
                    <Form.Check type={type} id='20' name='numQuestions' label='20 questions' />
                  </div>
                ))}
              </Form>
            </Col>
            <Col md={4} className='queryTopic'>
              <h5>Type of question: </h5>
              <Form className='radio typeQuery' onChange={this.handleChange}>
                {["radio"].map((type) => (
                  <div key={`default-${type}`} className='mb-3'>
                    <Form.Check type={type} name='questionType' label='Default' id='default' checked={this.state.questionType === "default"} />
                    <Form.Check type={type} name='questionType' id='markedQuestions' label='Marked Questions' />
                    <Form.Check type={type} name='questionType' id='correctAnsweredQuestions' label='Correct Answered Questions' />
                    <Form.Check type={type} name='questionType' id='wrongAnsweredQuestions' label='Wrong Answered Questions' />
                  </div>
                ))}
              </Form>
            </Col>
            <Col md={4} className='queryTopic'>
              <h5>Question Category: </h5>
              <Form className='radio typeQuery' onChange={this.handleChange}>
                {["radio"].map((type) => (
                  <div key={`default-${type}`} className='mb-3'>
                    <Form.Check type={type} name='category' label='Any' id='any' checked={this.state.category === "any"} />
                    <Form.Check type={type} name='category' id='category1' label='Category 1' />
                    <Form.Check type={type} name='category' id='category2' label='Category 2' />
                    <Form.Check type={type} name='category' id='category3' label='Category 3' />
                  </div>
                ))}
              </Form>
            </Col>
          </Row>
          <Row>
            <Col md={3} className='practiceButton'>
              <Link to={{ pathname: "/math_practice", numQuestions: this.state.numQuestions, questionType: this.state.questionType, category: this.state.category }}>
                <Button size='lg' block>
                  PRACTICE
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col md={4} className='strengthWeak'>
              <h5 style={{ marginTop: "1rem", marginLeft: "2rem" }}>Strengths:</h5>
              <br />
              <p className='swDescrip'>Calculus</p>
              <br />
              <p className='swDescrip'>Unscrambling letters</p>
            </Col>
            <Col md={{ span: 4, offset: 0 }} className='strengthWeak'>
              <h5 style={{ marginTop: "1rem", marginLeft: "2rem" }}>Weaknesses:</h5>
              <br />
              <p className='swDescrip'>Height differences</p>
              <br />
              <p className='swDescrip'>Algebra</p>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
export default SelectionQueries;
