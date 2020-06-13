import React, { Component } from "react";
import fire from "../config/Fire";
import { Button, Container, Col, Row, Form } from "react-bootstrap";

const answered_question_id = [];
const answered_question_info = [];
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
    if (answered_question_id.length === 0) {
      answered_question_id[0] = questionId;
      answered_question_info[0] = [questionId, userChoice];
      //console.log("when the length is 0: ", answered_question_id[0]);
    } else {
      for (let i = 0; i < answered_question_id.length; i++) {
        if (answered_question_id[i] === questionId) {
          answered_question_info[i] = [questionId, userChoice];
          iterator = 0;
          break;
        } else {
          iterator = answered_question_id.length;
        }
      }
    }
    if (iterator === answered_question_id.length) {
      answered_question_id[iterator] = questionId;
      answered_question_info[iterator] = [questionId, userChoice];
      //console.log("Added the question ID: ", questionId);
    } else {
      //console.log("The question id ", questionId, " already exist.");
    }
  };

  showResult() {
    for (let i = 0; i < answered_question_id.length; i++) {
      //console.log("Question ", i, " : ", answered_question_id[i]);
      console.log("Question ", i, " : ", answered_question_info[i][1]);
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
