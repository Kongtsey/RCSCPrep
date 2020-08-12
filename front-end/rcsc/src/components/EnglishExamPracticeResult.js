import React, { Component } from "react";
import fire from "../config/Fire";
import { Table, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import "../style-sheet/result-tables.css";

class EnglishExamPracticeResult extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionData: [],
    };
  }
  componentDidMount() {
    this.setState({ loading: true });
    let auth = fire.auth();
    let userName = auth.currentUser.email;
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
        });
      });
  }
  render() {
    return (
      <Container>
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Question</th>
                <th>My Answer</th>
                <th>Marked</th>
              </tr>
            </thead>
            <tbody>
              {this.state.questionData.map((data, index) => (
                <tr key={data.id}>
                  <td className={"question-number"}>{index + 1}</td>
                  <td className={"correct-answer"}>{data.CorrectAnswer}</td>
                  <td className={"mark-check"}>{data.Marked === true ? <FontAwesomeIcon icon={faCheck} /> : ""}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Row>
      </Container>
    );
  }
}

export default EnglishExamPracticeResult;
