import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./reasonsToStart.css";
import reason1 from "../../images/homePage/01.png";
import reason2 from "../../images/homePage/02.png";
import reason3 from "../../images/homePage/03.png";

class ReasonsToStart extends React.Component {
  render() {
    return (
      <Container fluid={true} className='reasonsToStartContainer'>
        <Row className='justify-content-center'>
          <Col sm={10} className='reasonsToStartHeader'>
            <h3>Why we started PrepCity</h3>
          </Col>
        </Row>
        <Row>
          <Col sm={4} className='threeReasons'>
            <img src={reason1} alt='reson1' className={"reason-image"} />
            <span className={"reason-slogan"}>
              <h5>Playing out part in creating a digital Bhutan.</h5>
              <p>For a small country like ours, technology is the only way that we can keep up and possibly even compete with the rest of world</p>
            </span>
          </Col>
          <Col sm={4} className='threeReasons'>
            <img src={reason2} alt='reson2' className={"reason-image"} />
            <span className={"reason-slogan"}>
              <h5>His Majesty's constant push for technology</h5>
              <p>His Majesty has championed the push for technology and its importance especially in a small country like Bhutan.</p>
            </span>
          </Col>
          <Col sm={4} className='threeReasons'>
            <img src={reason3} alt='reson3' className={"reason-image"} />
            <span className={"reason-slogan"}>
              <h5>Rethinking our Education and Learning system. </h5>
              <p>The digital revolution has changed a lot of things around us. Unfortunately our education and the way we learn hasn't changed much.</p>
            </span>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default ReasonsToStart;
