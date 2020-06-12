import React, { Component } from "react";
import fire from "../config/Fire";
import { Button, Container, Col, Row, Form } from "react-bootstrap";

let previously_answered_question = [];
class MathList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionData: [],
      count: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.showResult = this.showResult.bind(this);
  }

  componentDidMount() {
    fire
      .firestore()
      .collection("Questions")
      .limit(this.props.chosenChoiceNumber)
      .orderBy("Question")
      .onSnapshot((snapshot) => {
        const newData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        //console.log("This is the default number of questions displayed", newTimes);
        this.setState({
          questionData: newData,
        });
      });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.chosenChoiceNumber !== this.props.chosenChoiceNumber) {
      fire
        .firestore()
        .collection("Questions")
        .limit(this.props.chosenChoiceNumber)
        .orderBy("Question")
        .onSnapshot((snapshot) => {
          const newData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          //console.log("This is the default number of questions displayed", newTimes);
          this.setState({
            questionData: newData,
          });
        });
    }
  }
  handleChange = (questionId, userChoice, correctAnswer) => () => {
    let iterator = 0;
    let answers = [];
    answers[1] = userChoice;
    answers[0] = correctAnswer;
    this.setState({ [questionId]: answers });

    if (previously_answered_question.length === 0) {
      previously_answered_question[0] = questionId;
      console.log("when the length is 0: ", previously_answered_question[0]);
    } else {
      for (let i = 0; i < previously_answered_question.length; i++) {
        if (previously_answered_question[i] === questionId) {
          iterator = 0;
          break;
        } else {
          iterator = previously_answered_question.length;
          //console.log(iterator, previously_answered_question.length);
        }
      }
    }
    if (iterator === previously_answered_question.length) {
      previously_answered_question[iterator] = questionId;
      console.log("Added the question ID: ", questionId);
    } else {
      console.log("The question id ", questionId, " already exist.");
    }
  };
  showResult() {
    for (let i = 0; i < previously_answered_question.length; i++) {
      console.log("Question ", i, " : ", previously_answered_question[i]);
    }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col md={12} lg={12} sm={12}>
            <ol>
              {this.state.questionData.map((data) => (
                <li id={data.id}>
                  <div>{data.Question} </div>
                  <Form>
                    {data.Choice.map((choice) => (
                      <p>
                        <input type='radio' name='choice' value={data.id} onChange={this.handleChange(data.id, choice, data.CorrectAnswer)} />
                        {choice}
                      </p>
                    ))}
                  </Form>
                  <br />
                </li>
              ))}
            </ol>
            <Button className='home' onClick={this.showResult}>
              See Result
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MathList;
