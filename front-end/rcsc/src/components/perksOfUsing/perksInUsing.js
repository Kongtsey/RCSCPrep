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
          <Col sm={6}>
            <Row style={{ marginTop: "45px" }}>
              <Col sm={4} className='perksIconsContainer'>
                <img src={stats} className='perksIcons' style={{ opacity: this.state.opacity[0] }} onClick={(e) => this.handleChange(0, e)} alt='statsPic' />
              </Col>
              <Col sm={4} className='perksIconsContainer'>
                <img src={weakness} className='perksIcons' style={{ opacity: this.state.opacity[1] }} onClick={(e) => this.handleChange(1, e)} alt='weaknessPic' />
              </Col>
              <Col sm={4} className='perksIconsContainer'>
                <img src={examFinal} className='perksIcons' style={{ opacity: this.state.opacity[2] }} onClick={(e) => this.handleChange(2, e)} alt='finalExamPic' />
              </Col>
            </Row>
            <Row style={{ marginBottom: "80px" }}>
              <Col sm={4} className='perksIconsContainer'>
                <img src={easyReview} className='perksIcons' style={{ opacity: this.state.opacity[3] }} onClick={(e) => this.handleChange(3, e)} alt='reviewPic' />
              </Col>
              <Col sm={4} className='perksIconsContainer'>
                <img src={category} className='perksIcons' style={{ opacity: this.state.opacity[4] }} onClick={(e) => this.handleChange(4, e)} alt='categoryPic' />
              </Col>
              <Col sm={4} className='perksIconsContainer'>
                <img src={history} className='perksIcons' style={{ opacity: this.state.opacity[5] }} onClick={(e) => this.handleChange(5, e)} alt='historyPic' />
              </Col>
            </Row>
          </Col>
          <Col sm={6} className='perksDescription' style={{ marginTop: "80px" }}>
            <Row>
              <Col sm={12} className='perksDescription'>
                {this.state.showMessage[0] && (
                  <p>
                    RCSC Prep makes it easy for you to study at your own pace and at your own time. Our feedback is personalized to your performance and helps you find your weaknesses and your
                    strengths. RCSC Prep also has features that make you be able to take control of when you want to study and is tailor made just for you. You can also choose to focus on what you
                    lack rather than just going along with the classroom, in a sense RCSC Prep is what allows you to make this education a 21st century education and the best part is that its
                    completely free.
                  </p>
                )}
                {this.state.showMessage[1] && <p>Lorem Ipsum Dolor Amet</p>}
                {this.state.showMessage[2] && <p>P 3</p>}
                {this.state.showMessage[3] && <p>P 4</p>}
                {this.state.showMessage[4] && <p>P 5</p>}
                {this.state.showMessage[5] && <p>P 6</p>}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PerksInUsing;
