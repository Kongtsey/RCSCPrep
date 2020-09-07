import React, { Component } from "react";
import { auth, firestore } from "firebase";
import { Button, Container, Col, Row, Form } from "react-bootstrap";
import $ from "jquery";
import "../style-sheet/radio-customization.css";
import Loading from "../components/loading";
import { withRouter } from "react-router-dom";
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
    this.handleUnmark = this.handleUnmark.bind(this);
    this.routeChange = this.routeChange.bind(this);
  }
  routeChange() {
    let path = "/english_stats_page";
    this.props.history.push(path);
  }
  componentDidMount() {
    this.setState({ loading: true });
    let userName = auth().currentUser.email;
    // console.log("Is the right prop being passed: ", this.props.questionTypeQuery);
    // console.log("This is the category prop: ", this.props.questionCategory);
    if (this.props.questionCategory !== "any") {
      firestore()
        .collection(userName)
        .doc("EnglishQuestions")
        .collection("Questions")
        .where("Category", "==", this.props.questionCategory)
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
          // for (let i =0; i < this.state.questionData.length;i++){
          // console.log(this.state.questionData[i].Category,"question category")
          // console.log(this.state.questionData[i].IsCorrectAnswer,"question been correctly answered?")
          // console.log(this.state.questionData[i].IsWrongAnswer,"question been incorrectly answered?")
          // }
        });
    } else {
      firestore()
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
          // console.log(this.state.questionData, "question data");
          // for (let i =0; i < this.state.questionData.length;i++){
          //   console.log(this.state.questionData[i].Category,"question category")
          //   console.log(this.state.questionData[i].IsCorrectAnswer,"question been correctly answered?")
          //   console.log(this.state.questionData[i].IsWrongAnswer,"question been incorrectly answered?")
          // }
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
      // console.log("Added the question ID: ", questionId);
    } else {
      // console.log("The question id ", questionId, " already exist.");
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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    $(":radio").attr("disabled", true);
    for (let i = 0; i < answered_question_id.length; i++) {
      let id = "#" + answered_question_info[i][0];
      let answer_class = "." + answered_question_info[i][2];
      for (let j = 0; j < 4; j++) {
        if (j === parseInt(answered_question_info[i][2])) {
          $(id).find("form").find(answer_class).css({ color: "black", background: "rgba(50, 232, 50, 0.46)", padding: "8px 10px 15px 10px" });
        } else {
          $(id)
            .find("form")
            .find("." + j)
            .css({ color: "#cfcfcf" });
        }
      }
    }
    $("#showResult").css("display", "none");
    $("#submit").css("display", "block");
  }

  updateDatabase() {
    let userName = auth().currentUser.email; //need to get email since we need to know which collection
    let db = firestore();
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
          IsWrongAnswer: !answered_question_info[i][3],
        },
        { merge: true }
      );
    }
    this.routeChange();
  }
  handleMark = (index, markedQuestionId) => () => {
    //console.log("you ar here at handleMark and the index is: ", index);
    let userName = auth().currentUser.email; //need to get email since we need to know which collection
    let db = firestore();
    let userCollection = db.collection(userName); //ref to collection we need to update to.

    $("#mark" + index).addClass("markButton");
    $("#mark" + index).removeClass("markedButton");
    $("#mark" + index).html("marked");
    userCollection.doc("EnglishQuestions").collection("Questions").doc(markedQuestionId).set(
      {
        Marked: true,
      },
      { merge: true }
    );
  };
  handleUnmark = (index, markedQuestionId) => () => {
    let userName = auth().currentUser.email; //need to get email since we need to know which collection
    let db = firestore();
    let userCollection = db.collection(userName); //ref to collection we need to update to.

    $("#mark" + index).addClass("markedButton");
    $("#mark" + index).removeClass("markButton");
    $("#mark" + index).html("mark");
    userCollection.doc("EnglishQuestions").collection("Questions").doc(markedQuestionId).set(
      {
        Marked: false,
      },
      { merge: true }
    );
  };
  render() {
    const loading = this.state.loading;
    return (
      <Container>
        <Row style={{ padding: "10px" }}>
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
                    // console.log("No Passage for this question")
                    ""
                  )}
                  <Row>
                    <Col md={10} lg={10} sm={12}>
                      {data.Question}
                    </Col>
                    <Col md={1} lg={1} sm={12}>
                      {data.Marked ? (
                        <button type='button' className={"markedButton"} id={"mark" + index} onClick={this.handleUnmark(index, data.id)}>
                          Unmark
                        </button>
                      ) : (
                        <button type='button' className={"markButton"} id={"mark" + index} onClick={this.handleMark(index, data.id)}>
                          mark
                        </button>
                      )}
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
            <Button id='submit' variant='outline-success' onClick={this.updateDatabase}>
              Done
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

export default withRouter(ReadEnglishQuestion);
