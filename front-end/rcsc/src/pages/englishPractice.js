import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import "../style-sheet/practice-math.css";
import GeneralNavbar from "../components/generalNavbar";
import ReadEnglishQuestion from "../components/readEnglishData";

class PracticeEnglish extends Component {
  render() {
    if (typeof this.props.location.numQuestions !== "undefined" || typeof this.props.location.questionType !== "undefined" || typeof this.props.location.category !== "undefined") {
      return (
        <React.Fragment>
          <GeneralNavbar />
          <br />
          {<ReadEnglishQuestion chosenChoiceNumber={parseInt(this.props.location.numQuestions)} questionTypeQuery={this.props.location.questionType} questionCategory={this.props.location.category}/>}
        </React.Fragment>
      );
    } else {
      return <Redirect to='/english_stats_page' />;
    }
  }
}
export default withRouter(PracticeEnglish);
