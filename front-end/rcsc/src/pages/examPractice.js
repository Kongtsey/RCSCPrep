import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import "../style-sheet/exam-practice.css";
import { Container, Col, Row, Button } from "react-bootstrap";
import GeneralNavbar from "../components/generalNavbar";
import ReadExamPracticeMath from "../components/readExamPracticeMath";
class ExamPractice extends React.Component {
  render() {
    return (
      <React.Fragment>
        {<GeneralNavbar />}
        <Container>
          <br />
          <br />
          <h3> Practice Exam </h3>
          <hr />
          <div className='tabs'>
            <Tabs>
              <Tab label='Math'>
                <div>
                  <ReadExamPracticeMath />
                </div>
              </Tab>
              <Tab label='English'>
                <div>
                  <p>Tab 2 content</p>
                </div>
              </Tab>
              <Tab label='Dzongkha'>
                <div>
                  <p>Tab 3 content</p>
                </div>
              </Tab>
              <Tab label='Data Interpretation'>
                <div>
                  <p>Tab 4 content</p>
                </div>
              </Tab>
            </Tabs>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

class Tabs extends React.Component {
  state = {
    activeTab: this.props.children[0].props.label,
  };
  changeTab = (tab) => {
    this.setState({ activeTab: tab });
  };
  render() {
    let content;
    let buttons = [];
    return (
      <div>
        {React.Children.map(this.props.children, (child) => {
          buttons.push(child.props.label);
          if (child.props.label === this.state.activeTab) content = child.props.children;
        })}

        <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab} />
        <div className='tab-content'>{content}</div>
      </div>
    );
  }
}

const TabButtons = ({ buttons, changeTab, activeTab }) => {
  return (
    <div className='tab-buttons'>
      {buttons.map((button) => {
        return (
          <button className={button === activeTab ? "active" : ""} onClick={() => changeTab(button)}>
            {button}
          </button>
        );
      })}
    </div>
  );
};

const Tab = (props) => {
  return <React.Fragment>{props.children}</React.Fragment>;
};

export default withRouter(ExamPractice);
