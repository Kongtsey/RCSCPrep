import React, { Component } from "react";
import { Row, Col, Container, Form } from "react-bootstrap";
import "../style-sheet/mathStatsPage.css";
import Button from "react-bootstrap/Button";
import { renderToString } from "react-dom/server";
import { Link } from "react-router-dom";
import Loading from "./loading";
import StrengthWeakness from "./strengthWeakness/strengthWeakness";
import {analytics} from "firebase";

class SelectionQueries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pending: true,
      numQuestions: 5,
      questionType: "UserHasNotResponded",
      category: "any",
      pathname: "",
      categoryOptions: {
        category1: "",
        category2: "",
        category3: "",
        category4: ""
      },
      collectionName: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    if (this.props.type === "Math") {
      this.setState({ pathname: "/math_practice",collectionName: 'MathQuestions',pending:false});
      this.setState({
        categoryOptions: {
          category1: "Algebra",
          category2: "Logic",
          category3: "Probability",
          category4: 'Fraction',
        },
      });
    } else if (this.props.type === "English") {
      this.setState({ pathname: "/english_practice",collectionName: 'EnglishQuestions',pending: false});
      this.setState({
        categoryOptions: {
          category1: "Grammar",
          category2: "Comprehension",
          category3: "Synonyms and Antonyms",
          category4: 'Vocabulary',
        },
      });
    }
  }
  handleClick(){
    let practiceType = this.props.type;
    practiceType = 'practice '+practiceType;
    analytics().logEvent(practiceType,{category: this.state.category, numQuestions: this.state.numQuestions, questionType: this.state.questionType});
  }
  handleChange(e) {
    if (renderToString([e.target.name]) === "numQuestions") {
      this.setState({ [e.target.name]: parseInt([e.target.id]) });
    } else {
      this.setState({ [e.target.name]: [e.target.id].toString() });
    }
  }
  render() {
    if(this.state.pending){
      return <Loading/>
    }
    return (
      <React.Fragment>
        <Container fluid={true}>
          <Row>
            <Col md={4} className='queryTopic'>
              <h5>Number of Questions: </h5>
              <Form className='radio' onChange={this.handleChange}>
                {["radio"].map((type) => (
                  <div key={`default-${type}`} className='mb-3'>
                    <Form.Check type={type} name='numQuestions' id='5' label='5 questions' defaultChecked />
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
                    <Form.Check type={type} name='questionType' id='UserHasNotResponded' label='Unanswered' defaultChecked />
                    <Form.Check type={type} name='questionType' id='Marked' label='Marked' />
                    <Form.Check type={type} name='questionType' id='IsCorrectAnswer' label='Correct Answered' />
                    <Form.Check type={type} name='questionType' id='IsWrongAnswer' label='Wrong Answered ' />
                  </div>
                ))}
              </Form>
            </Col>
            <Col md={4} className='queryTopic'>
              <h5>Question Category: </h5>
              <Form className='radio typeQuery' onChange={this.handleChange}>
                {["radio"].map((type) => (
                  <div key={`default-${type}`} className='mb-3'>
                    <Form.Check type={type} name='category' label='Any' id='any' defaultChecked />
                    <Form.Check type={type} name='category' id={this.state.categoryOptions.category1} label={this.state.categoryOptions.category1} />
                    <Form.Check type={type} name='category' id={this.state.categoryOptions.category2} label={this.state.categoryOptions.category2} />
                    <Form.Check type={type} name='category' id={this.state.categoryOptions.category3} label={this.state.categoryOptions.category3} />
                    <Form.Check type={type} name='category' id={this.state.categoryOptions.category4} label={this.state.categoryOptions.category4} />
                  </div>
                ))}
              </Form>
            </Col>
          </Row>
          <Row>
            <Col md={3} className='practiceButton'>
              <Link to={{ pathname: this.state.pathname, numQuestions: this.state.numQuestions, questionType: this.state.questionType, category: this.state.category }}>
                <Button size='lg' block onClick={this.handleClick()} >
                  PRACTICE
                </Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col md={4} className='strengthWeak'>
              <h5 style={{ marginTop: "1rem", marginLeft: "2rem" }}>Strengths:</h5>
              <br />
              <p className='swDescrip'><StrengthWeakness toDisplay="strength" questionType={this.state.collectionName}/></p>
              <br />
            </Col>
            <Col md={{ span: 4, offset: 0 }} className='strengthWeak'>
              <h5 style={{ marginTop: "1rem", marginLeft: "2rem" }}>Weakness:</h5>
              <br />
              {/*{console.log(this.state.collectionName,"Collection Name")}*/}
              <p className='swDescrip'><StrengthWeakness toDisplay="weakness" questionType={this.state.collectionName}/></p>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
export default SelectionQueries;
