import React, { Component } from "react";
import fire from "../config/Fire";
import { Button, Container, Col, Row, Form } from "react-bootstrap";
import $ from "jquery";
import "../style-sheet/radio-customization.css";
import Loading from "../components/loading";
import { Link } from "react-router-dom";
import "../style-sheet/mark-button.css";

const answered_question_id = [];
const answered_question_info = [];
class ReadEnglishQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionData: [],
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.showResult = this.showResult.bind(this);
    this.highlightNewAnswer = this.highlightNewAnswer.bind(this);
    this.updateDatabase = this.updateDatabase.bind(this);
    this.handleMark = this.handleMark.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });
    let auth = fire.auth();
    let userName = auth.currentUser.email;
    console.log("Is the right prop being passed: ", this.props.questionTypeQuery);
    fire
      .firestore()
      .collection(userName)
      .doc("EnglishQuestions")
      .collection("Questions")
      .where(this.props.questionTypeQuery, "==", true)
      .limit(this.props.chosenChoiceNumber)
      .onSnapshot((snapshot) => {
        const newData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.setState({
          questionData: newData,
          loading: false,
        });
      });
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
    $("#showResult").css("display", "none");
    $("#submit").css("display", "block");
  }

  updateDatabase() {
    let auth = fire.auth();
    let userName = auth.currentUser.email; //need to get email since we need to know which collection
    let db = fire.firestore();
    let userCollection = db.collection(userName); //ref to collection we need to update to.
    for (let i = 0; i < answered_question_id.length; i++) {
      //console.log("Question ", i, " : ", answered_question_id[i]);
      //console.log("Question ", i, " : ", answered_question_info[i][1]);
      let qID = answered_question_info[i][0];
      //let userResponse = answered_question_info[i][1];
      userCollection.doc("EnglishQuestions").collection("Questions").doc(qID).set(
        {
          UserHasNotResponded: false,
          IsCorrectAnswer: answered_question_info[i][3],
          IsWrongAnswer: !answered_question_info[i][3]
        },
        { merge: true }
      );
    }
  }
  handleMark = (index, markedQuestionId) => () => {
    //console.log("you ar here at handleMark and the index is: ", index);
    let auth = fire.auth();
    let userName = auth.currentUser.email; //need to get email since we need to know which collection
    let db = fire.firestore();
    let userCollection = db.collection(userName); //ref to collection we need to update to.

    if ($("#mark" + index).hasClass("markButton")) {
      $("#mark" + index).removeClass("markButton");
      $("#mark" + index).addClass("markedButton");
      $("#mark" + index).html("marked");
      userCollection.doc("EnglishQuestions").collection("Questions").doc(markedQuestionId).set(
        {
          Marked: true,
        },
        { merge: true }
      );
    } else {
      $("#mark" + index).removeClass("markedButton");
      $("#mark" + index).addClass("markButton");
      $("#mark" + index).html("mark");
      userCollection.doc("EnglishQuestions").collection("Questions").doc(markedQuestionId).set(
        {
          Marked: false,
        },
        { merge: true }
      );
    }
  };
  render() {
    const loading = this.state.loading;
    return (
      <Container>
        <Row>
          <Col md={12} lg={12} sm={12}>
            <ol>
              {this.state.questionData.map((data, index) => (
                <li id={data.id} key={data.id}>
                  {data.isPassageQuestion === true ? (
                    <div>
                      {data.Passage} <br />
                      <br />
                    </div>
                  ) : (
                    console.log("No Passage for this question")
                  )}
                  <Row>
                    <Col md={10} lg={10} sm={12}>
                      {data.Question}
                    </Col>
                    <Col md={1} lg={1} sm={12}>
                      <button type='button' className={"markButton"} id={"mark" + index} onClick={this.handleMark(index, data.id)}>
                        mark
                      </button>
                    </Col>
                  </Row>
                  <br />
                  <span className='customize-radio-button'>
                    <Form className={data.id}>
                      {data.Choice.map((choice, index) => (
                        <p className={index} key={index}>
                          <input type='radio' id={data.CorrectAnswer} name='choice' value={data.id} onChange={this.handleChange(data.id, choice, data.CorrectAnswer, index)} />
                          &nbsp;&nbsp;&nbsp;&nbsp; {choice}
                        </p>
                      ))}
                    </Form>
                  </span>
                  <br />
                  <br />
                </li>
              ))}
            </ol>
            {loading ? (
              <Loading />
            ) : (
              <Button variant='warning' id='showResult' onClick={this.showResult}>
                See Result
              </Button>
            )}
            <Link to={"/english_stats_page"}>
              <Button id='submit' variant='outline-success' onClick={this.updateDatabase}>
                Done
              </Button>
            </Link>
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

export default ReadEnglishQuestion;
