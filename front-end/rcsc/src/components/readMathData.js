import React, { Component } from "react";
import fire from "../config/Fire";
import { Container, Col, Row, Form } from "react-bootstrap";

class MathList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionData: [],
    };
    this.handleChange = this.handleChange.bind(this);
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
    console.log(questionId, " ", userChoice, " ", correctAnswer);
    this.setState({ [questionId]: userChoice }, () => {
      console.log("State updated: ", JSON.stringify(this.state[questionId]));
    });
    console.log("after state update: ", JSON.stringify(this.state[questionId]));
  };

  render() {
    return (
      <Container>
        <Row>
          <Col md={12} lg={12} sm={12}>
            {
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
            }
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MathList;
