import React, { useState, useEffect } from "react";
import fire from "../config/Fire";

function GetData() {
  const [times, setTimes] = useState([]);
  useEffect(() => {
    fire
      .firestore()
      .collection("Questions")
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
const MathList = () => {
  const times = GetData();
  return (
    <ol>
      {times.map((time) => (
        <li key={time.id}>
          <div>{time.Category}</div>
          <div>{time.Question} </div>
          <div>{time.QuestionYear} </div>

          <br />
        </li>
      ))}
    </ol>
  );
};
export default MathList;
