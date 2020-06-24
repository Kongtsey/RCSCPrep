import React, { Component } from "react";
import fire from "../config/Fire";
import { Button, Container, Col, Row, Form } from "react-bootstrap";
import $ from "jquery";
import "../style-sheet/read-math-data.css";

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
    this.highlightNewAnswer = this.highlightNewAnswer.bind(this);
  }

  componentDidMount() {
    let auth = fire.auth();
    let userName = auth.currentUser.email;
    fire
      .firestore()
      .collection(userName)
      .doc("MathQuestions")
      .collection("Questions")
      .where("UserHasResponded", "==", false)
      .limit(this.props.chosenChoiceNumber)
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
    let auth = fire.auth();
    let userName = auth.currentUser.email;
    if (prevProps.chosenChoiceNumber !== this.props.chosenChoiceNumber) {
      fire
        .firestore()
        .collection(userName)
        .doc("MathQuestions")
        .collection("Questions")
        .where("UserHasResponded", "==", false)
        .limit(this.props.chosenChoiceNumber)
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
  handleChange = (questionId, userChoice, correctAnswer, index) => () => {
    const userAnsweredIndex = parseInt(index);
    const correctAnswerBool = correctAnswer === userAnsweredIndex;
    let iterator = 0;
    if (answered_question_id.length === 0) {
      answered_question_id[0] = questionId;
      answered_question_info[0] = [questionId, userChoice, correctAnswer, correctAnswerBool];
    } else {
      for (let i = 0; i < answered_question_id.length; i++) {
        if (answered_question_id[i] === questionId) {
          answered_question_info[i] = [questionId, userChoice, correctAnswer, correctAnswerBool];
          iterator = 0;
          break;
        } else {
          iterator = answered_question_id.length;
        }
      }
    }
    if (iterator === answered_question_id.length) {
      answered_question_id[iterator] = questionId;
      answered_question_info[iterator] = [questionId, userChoice, correctAnswer, correctAnswerBool];
      console.log("Added the question ID: ", questionId);
    } else {
      console.log("The question id ", questionId, " already exist.");
    }
    this.highlightNewAnswer(questionId, index);
  };
  highlightNewAnswer(questionId, index) {
    for (let i = 0; i < 4; i++) {
      $("#" + questionId)
        .find("form")
        .find("." + i)
        .css("color", "black");
    }
    $("#" + questionId)
      .find("form")
      .find("." + index)
      .css("color", "#ffc107");
  }

  /***
   * @return: void;
   * @param: void;
   * This class method is called when the user is finished answering the questions.
   * This method highlights the wrong questions in light gray color and the correct in green.
   */
  showResult() {
    $(":radio").attr("disabled", true);
    for (let i = 0; i < answered_question_id.length; i++) {
      let id = "#" + answered_question_info[i][0];
      let answer_class = "." + answered_question_info[i][2];
      for (let j = 0; j < 4; j++) {
        if (j === parseInt(answered_question_info[i][2])) {
          $(id).find("form").find(answer_class).css("color", "green");
        } else {
          $(id)
            .find("form")
            .find("." + j)
            .css("color", "#cfcfcf");
        }
      }
    }
  }

  writeToDatabase() {
    let auth = fire.auth();
    let userName = auth.currentUser.email; //need to get email since we need to know which collection
    let db = fire.firestore();
    let userCollection = db.collection(userName); //ref to collection we need to update to.
    for (let i = 0; i < answered_question_id.length; i++) {
      //console.log("Question ", i, " : ", answered_question_id[i]);
      console.log("Question ", i, " : ", answered_question_info[i][1]);
      let qID = answered_question_info[i][0];
      //let userResponse = answered_question_info[i][1];
      userCollection.doc("MathQuestions").collection("Questions").doc(qID).set(
        {
          UserHasResponded: true,
        },
        { merge: true }
      );
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
                  <br />
                  <Form className={data.id}>
                    {data.Choice.map((choice, index) => (
                      <p className={index}>
                        <input type='radio' id={data.CorrectAnswer} name='choice' value={data.id} onChange={this.handleChange(data.id, choice, data.CorrectAnswer, index)} />
                        &nbsp;&nbsp;&nbsp;&nbsp; {choice}
                      </p>
                    ))}
                  </Form>
                  <br />
                  <br />
                </li>
              ))}
            </ol>
            <Button className='home' onClick={this.showResult}>
              See Result
            </Button>
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
      </Container>
    );
  }
}

export default MathList;
