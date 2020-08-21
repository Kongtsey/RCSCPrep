import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import "./perksInUsin.css";

import weakness from "../../images/homePage/weakness-final.png";
import easyReview from "../../images/homePage/easy-final.png";
import examFinal from "../../images/homePage/exam-final.png";
import stats from "../../images/homePage/stats-final.png";
import category from "../../images/homePage/category-final.png";
import history from "../../images/homePage/history-final.png";

class PerksInUsing extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      opacity: [1, 0.5, 0.5, 0.5, 0.5, 0.5],
      showMessage: [true, false, false, false, false, false],
    };
  }
  componentDidMount() {
    this.setState({
      opacity: [1, 0.5, 0.5, 0.5, 0.5, 0.5],
      showMessage: [true, false, false, false, false, false],
    });
  }

  handleChange(value, e) {
    e.preventDefault();
    let changedOpacity = [0.5, 0.5, 0.5, 0.5, 0.5, 0.5];
    let changedShowMessage = [false, false, false, false, false, false];
    changedShowMessage[value] = true;
    changedOpacity[value] = 1;
    this.setState({
      opacity: changedOpacity,
      showMessage: changedShowMessage,
    });
  }
  render() {
    return (
      <Container className='perksInUsingContainer'>
        <Row>
          <Col md={6} lg={6} sm={6} xs={12}>
            <Row style={{ marginTop: "45px" }}>
              <Col xs={4} md={4} lg={4} sm={4} className='perksIconsContainer'>
                <img src={stats} className='perksIcons' style={{ opacity: this.state.opacity[0] }} onClick={(e) => this.handleChange(0, e)} alt='statsPic' />
              </Col>
              <Col xs={4} md={4} lg={4} sm={4} className='perksIconsContainer'>
                <img src={weakness} className='perksIcons' style={{ opacity: this.state.opacity[1] }} onClick={(e) => this.handleChange(1, e)} alt='weaknessPic' />
              </Col>
              <Col xs={4} md={4} lg={4} sm={4} className='perksIconsContainer'>
                <img src={examFinal} className='perksIcons' style={{ opacity: this.state.opacity[2] }} onClick={(e) => this.handleChange(2, e)} alt='finalExamPic' />
              </Col>
            </Row>
            <Row style={{ marginBottom: "80px" }}>
              <Col xs={4} md={4} lg={4} sm={4} className='perksIconsContainer'>
                <img src={easyReview} className='perksIcons' style={{ opacity: this.state.opacity[3] }} onClick={(e) => this.handleChange(3, e)} alt='reviewPic' />
              </Col>
              <Col xs={4} md={4} lg={4} sm={4} className='perksIconsContainer'>
                <img src={category} className='perksIcons' style={{ opacity: this.state.opacity[4] }} onClick={(e) => this.handleChange(4, e)} alt='categoryPic' />
              </Col>
              <Col xs={4} md={4} lg={4} sm={4} className='perksIconsContainer'>
                <img src={history} className='perksIcons' style={{ opacity: this.state.opacity[5] }} onClick={(e) => this.handleChange(5, e)} alt='historyPic' />
              </Col>
            </Row>
          </Col>
          <Col xs={12} md={6} lg={6} sm={6} className='perksDescription'>
            {this.state.showMessage[0] && (
              <p>
                Kongtsey keeps a record of every question you answer, therefore, you will know exactly how many questions you have attempted. Gone are the days where you are confused or don’t remember
                if you attempted the question before. Kongtsey also shows you exactly how many questions you have correctly and incorrectly answered. With later releases, Kongtsey will also be able to
                predict your scores to help you know where you stand.
              </p>
            )}
            {this.state.showMessage[1] && (
              <p>
                Let the data lead you and show you where you need to work rather than studying blindly. Study smarter, not harder! Kongtsey enables you to see not just your weaknesses but even your
                strengths so you don't waste time on topics where you don't need to. Additionally, the more you use Kongtsey, the more it is able to accurately point to your weaknesses and strengths.{" "}
              </p>
            )}
            {this.state.showMessage[2] && (
              <p>
                Kongtsey’s practice exams are there to not just measure your improvements but to also allow you to initiate a mock exam whenever you like. Unlike the past you don't have to time
                yourself and look for past papers which are a huge waste of time. With just a click of a button, you can start a practice exam, It is that EASY!
              </p>
            )}
            {this.state.showMessage[3] && (
              <p>
                Study whenever you want and wherever you want. Kongtsey is designed both for mobile devices as well as desktops and laptops. Be it a doctor's appointment or stuck in traffic, you can
                always study using Kongtsey, a feature that no books can replicate to the level that Kongtsey allows.
              </p>
            )}
            {this.state.showMessage[4] && (
              <p>
                What we pride in, is the ability to categorize questions so that you can just focus on the particular topic you want to. We do the hard brunt work so that you can study smarter, easier
                and efficiently. Our categories work in conjunction with our data analytics showing strengths and weaknesses.{" "}
              </p>
            )}
            {this.state.showMessage[5] && (
              <p>
                The most common case today is that we print a lot of past papers to study from. However, once they are answered, you hardly ever come back to the questions because it takes time to
                sift through all the papers. Kongtsey enables students to mark a question for any reason and allow the user to easily fetch all the marked questions. Kongtsey also allows users to not
                only look through all the questions answered but also the questions that are correctly and incorrectly answered.
              </p>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PerksInUsing;
