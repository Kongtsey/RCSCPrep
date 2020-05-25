import React, { useState, useEffect } from "react";
import fire from "../config/Fire";
import { Container, Col, Row } from "react-bootstrap";

function GetData(num) {
  const [times, setTimes] = useState([]);
  useEffect(() => {
    fire
      .firestore()
      .collection("Questions")
      .limit(num)
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
  return times;
}
const MathList = (props) => {
  const num = parseInt(props.value);
  const times = GetData(num);
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
                <br />
              </li>
            ))}
          </ol>
        </Col>
      </Row>
    </Container>
  );
};
export default MathList;
