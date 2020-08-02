import React, { Component } from "react";
import fire from "../config/Fire";
import { Container, Col, Row, Form } from "react-bootstrap";
import $ from "jquery";
import "../style-sheet/radio-customization.css";
import Loading from "../components/loading";
import "../style-sheet/mark-button.css";

class ReadEnglishQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionData: [],
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.highlightNewAnswer = this.highlightNewAnswer.bind(this);
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
      .doc("ExamOnSignUp")
      .collection("English")
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
    let correct_answer = correctAnswer === parseInt(index);
    console.log("question ID: ", questionId, "\n User Choice: ", userChoice, "\n Correct Answer: ", correctAnswer, "\n Index: ", index);
    let auth = fire.auth();
    let userName = auth.currentUser.email; //need to get email since we need to know which collection
    let db = fire.firestore();
    let userCollection = db.collection(userName);
    userCollection.doc("ExamOnSignUp").collection("English").doc(questionId).set(
      {
        UserHasNotResponded: false,
        IsCorrectAnswer: correct_answer,
        IsWrongAnswer: !correct_answer,
      },
      { merge: true }
    );
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

  handleMark = (index, markedQuestionId, subject) => () => {
    let auth = fire.auth();
    let userName = auth.currentUser.email; //need to get email since we need to know which collection
    let db = fire.firestore();
    let userCollection = db.collection(userName); //ref to collection we need to update to.

    if ($("#mark" + index).hasClass("markButton")) {
      $("#mark" + index).removeClass("markButton");
      $("#mark" + index).addClass("markedButton");
      $("#mark" + index).html("marked");
      userCollection.doc("ExamOnSignUp").collection("English").doc(markedQuestionId).set(
        {
          Marked: true,
        },
        { merge: true }
      );
    } else {
      $("#mark" + index).removeClass("markedButton");
      $("#mark" + index).addClass("markButton");
      $("#mark" + index).html("mark");
      userCollection.doc("ExamOnSignUp").collection("English").doc(markedQuestionId).set(
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
                  {data.IsPassageQuestion === "True" ? (
                    <div>
                      {data.Passage} <br />
                      console.log(data.Passage)
                      <br />
                    </div>
                  ) : (
                    console.log(data.Passage)
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
