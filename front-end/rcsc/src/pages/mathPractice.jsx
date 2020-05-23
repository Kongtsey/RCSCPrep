import React from "react";
import "../style-sheet/practice-math.css";
import GeneralNavbar from "../components/generalNavbar";
import MathList from "../components/readMathData";

function PracticeMath() {
  return (
    <React.Fragment>
      <GeneralNavbar />
      <MathList />
    </React.Fragment>
  );
}

export default PracticeMath;
