import React, { Component } from "react";
import "../style-sheet/number-of-question.css";
import ForumComponent from "../components/forumComponent";
import GeneralNavigationBar from "../components/generalNavbar";

class Forum extends Component {
  render() {
    return (
      <React.Fragment>
        <GeneralNavigationBar />
        <ForumComponent />
      </React.Fragment>
    );
  }
}
export default Forum;
