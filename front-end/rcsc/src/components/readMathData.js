import React, { useState, useEffect } from "react";
import fire from "../config/Fire";
import { Container, Col, Row, Form } from "react-bootstrap";

function MathList(props) {
  const [times, setTimes] = useState([]);

  useEffect(() => {
    fire
      .firestore()
      .collection("Questions")
      .limit(10)
      .orderBy("Question")
      .onSnapshot((snapshot) => {
        const newTimes = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log(newTimes);
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
        console.log(newTimes);
        setTimes(newTimes);
      });
  }, [prop]);

  return (
    <Container>
      <Row>
        <Col md={12} lg={12} sm={12}>
          <ol>
            {times.map((time) => (
              <li key={time.id}>
                <div>{time.Question} </div>
                <Form>
                  {time.Choice.map((choice) => (
                    <p>
                      <input type='radio' name='choice' value={choice} />
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
