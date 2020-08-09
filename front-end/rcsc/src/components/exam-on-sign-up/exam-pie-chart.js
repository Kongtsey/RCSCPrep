import React, { Component } from "react";
import fire from "../../config/Fire";
import { SimplePieChart } from "../PieChart";

class ExamPieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pending: true,
      numCorrectAnswers: 0,
      numWrongAnswers: 0,
    };
  }
  componentDidMount() {
    let correctAnswers = 0;
    let totalAnswered = 0;
    let db = fire.firestore();
    let collecPath = this.props.subject;
    let user = fire.auth().currentUser;
    let questionRef = db.collection(user.email).doc("ExamOnSignUp").collection(collecPath);
    let responseQuery = questionRef.where("UserHasNotResponded", "==", false);
    responseQuery
      .get()
      .then((snapshot) => {
        if (snapshot.empty) {
          this.setState({ pending: false });
          this.setState({ numCorrectAnswers: 0 });
          this.setState({ numWrongAnswers: 0 });
          return;
        }
        snapshot.forEach((doc) => {
          totalAnswered += 1;
        });
      })
      .catch((err) => {
        console.log(err);
      });
    if (this.state.pending === true) {
      responseQuery
        .where("IsCorrectAnswer", "==", true)
        .get()
        .then((snapshot) => {
          if (snapshot.empty) {
            this.setState({ pending: false });
            this.setState({ numCorrectAnswers: 0 });
            this.setState({ numWrongAnswers: totalAnswered });
            return;
          }
          snapshot.forEach((doc) => {
            correctAnswers = correctAnswers + 1;
          });
          if (this.state.pending === true) {
            this.setState({ pending: false });
            this.setState({ numCorrectAnswers: correctAnswers });
            this.setState({ numWrongAnswers: totalAnswered - correctAnswers });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
  render() {
    let correctAnswers = this.state.numCorrectAnswers;
    let incorrectAnswers = this.state.numWrongAnswers;
    if (this.state.pending) {
      return <p>Loading ...</p>;
    }
    return (
      <React.Fragment>
        <SimplePieChart correctAnswers={correctAnswers} incorrectAnswers={incorrectAnswers} />
      </React.Fragment>
    );
  }
}
export default ExamPieChart;
