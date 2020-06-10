import React, { useState, useEffect } from "react";
import fire from "../config/Fire";
import { Container, Col, Row, Form } from "react-bootstrap";

function MathList(props) {
  const [times, setTimes] = useState([]);
  const [question, setQuestion] = useState([]);
  useEffect(() => {
    fire
      .firestore()
      .collection("Questions")
      .limit(5)
      .orderBy("Question")
      .onSnapshot((snapshot) => {
        const newTimes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        //console.log("This is the default number of questions displayed", newTimes);
        setTimes(newTimes);
      });
  }, []);

  const prop = parseInt(props.value);
  useEffect(() => {
    fire
      .firestore()
      .collection("Questions")
      .limit(prop)
      .orderBy("Question")
      .onSnapshot((snapshot) => {
        const newTimes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        //console.log("This is the user selected number of questions displayed", newTimes);
        setTimes(newTimes);
      });
  }, [prop]);

  const handleChange = (e, choice, question_id, CorrectAnswer) => {
    console.log("hello world: ", question_id, " : ", choice, " but the correct answer is : ", CorrectAnswer);
    const newQuestion = () => ({
      id: question_id,
      user_answer: choice,
    });
    //Check if the state is empty or not. If it is not, then you have to check if the user is merely changing the
    //answer to an already answered question or answering a fresh new question.
    if (question.length === 0) {
      console.log("This is the first entry/first user's choice");
      setQuestion((question) => [...question, newQuestion]);
    } else {
      setQuestion((question) => [...question, newQuestion]);
    }
  };

  console.log("this is outside yhe fucnction:  ", question);

  return (
    <Container>
      <Row>
        <Col md={12} lg={12} sm={12}>
          <ol>
            {times.map((data) => (
              <li id={data.id}>
                <div>{data.Question} </div>
                <Form>
                  {data.Choice.map((choice) => (
                    <p>
                      <input type='radio' name='choice' value={choice} onChange={(e) => handleChange(e, choice, data.id, data.CorrectAnswer)} />
                      {choice}
                    </p>
                  ))}
                </Form>
                <br />
              </li>
            ))}
          </ol>
        </Col>
      </Row>
    </Container>
  );
}

export default MathList;
