import React, { useContext } from "react";
import { Redirect, withRouter } from "react-router-dom";
import "../style-sheet/practice-math.css";
import GeneralNavbar from "../components/generalNavbar";
import NumberOfQuestion from "../components/questionNumberOptionsAndTime";
import { AuthContext } from "../components/authentication";

function PracticeMath() {
  const { currentUser } = useContext(AuthContext);
  if (currentUser != null) {
    return (
      <React.Fragment>
        <GeneralNavbar />
        <br />
        <NumberOfQuestion />
      </React.Fragment>
    );
  } else {
    return <Redirect to='/' />;
  }
}
export default withRouter(PracticeMath);
