import React, { useState, useEffect } from "react";
import fire from "../config/Fire";
import { Container, Col, Row } from "react-bootstrap";

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
                <div>{time.Category}</div>
                <div>{time.QuestionYear} </div>
                <div>
                  <p>a. &nbsp;{time.Choice[0]}</p>
                  <p>b. &nbsp;{time.Choice[1]}</p>
                  <p>c. &nbsp;{time.Choice[2]}</p>
                  <p>d. &nbsp;{time.Choice[3]}</p>
                </div>
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
