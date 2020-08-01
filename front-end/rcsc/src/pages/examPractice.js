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
          <Row>
            <div className='tabs'>
              <Tabs>
                <Tab label='Tab 1'>
                  <div>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0xIAJciTxzjZZM-viJfHk_Ezlv0nn8fft3ORQ9UkoP2mPd5pm' />
                    <p>Tab 1 content</p>
                  </div>
                </Tab>
                <Tab label='Tab 2'>
                  <div>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2E3SrDqYWF9J_TDWNzjZkwJOAGxkLJVZPvUly7SqUL9WqLqEw' />
                    <p>Tab 2 content</p>
                  </div>
                </Tab>
                <Tab label='Tab 3'>
                  <div>
                    <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB7Y713wstirF-PvKJa6OioS83ozc-BeFAzjjyndv58ZnfyaZK0g' />
                    <p>Tab 3 content</p>
                  </div>
                </Tab>
                <Tab label='Tab 4'>
                  <div>
                    <img src='http://choseneye.org/image/cache/catalog/SERVICES4-600x600.png' />

                    <p>Tab 4 content</p>
                  </div>
                </Tab>
                <Tab label='Tab 5'>
                  <div>
                    <img src='https://iconcept.com.my/wp-content/uploads/2018/10/iStock-956508212-600x600.jpg' />
                    <p>Tab 5 content</p>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </Row>
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
