import React from "react";
import "../style-sheet/practice-math.css";
import GeneralNavbar from "../components/generalNavbar";
import NumberOfQuestion from "../components/questionNumberOptionsAndTime";

function PracticeMath() {
  return (
    <React.Fragment>
      <GeneralNavbar />
      <br />
      <NumberOfQuestion />
    </React.Fragment>
  );
}

export default PracticeMath;
