import React, { useState, useEffect } from "react";
import fire from "../config/Fire";
import { Container, Col, Row, Form } from "react-bootstrap";

function MathList(props) {
  const [times, setTimes] = useState([]);
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

  const handleChange = (e, choice, time) => {
    console.log("hello world: ", time, " : ", choice);
  };

  return (
    <Container>
      <Row>
        <Col md={12} lg={12} sm={12}>
          <ol>
            {times.map((time) => (
              <li id={time.id}>
                <div>{time.Question} </div>
                <Form>
                  {time.Choice.map((choice) => (
                    <p>
                      <input type='radio' name='choice' value={choice} onChange={(e) => handleChange(e, choice, time.id)} />
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
