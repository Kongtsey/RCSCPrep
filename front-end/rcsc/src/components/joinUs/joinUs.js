import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "./joinUs.css";
import developer from "../../images/join_us/coder.png";
import graphic_designer from "../../images/join_us/graphic-design.png";
import marketeer from "../../images/join_us/digital-market.png";

class JoinUs extends React.Component {
  render() {
    return (
      <Container className='joinUsContainer' fluid={true}>
        <Row className='justify-content-center'>
          <Col sm={12}>
            <Row>
              <Col sm={12} className='joinUsHeader'>
                <h3>Join Us</h3>
              </Col>
            </Row>
            <Row>
              <Col md={12} lg={12} sm={12} xs={12} className='lookingFor'>
                <h5>We are currently looking for: </h5>
              </Col>
            </Row>
            <Row className='justify-content-center'>
              <Col md={12} lg={12} sm={12} xs={12} className='employeeBoxesContainer'>
                <div className='employeeBoxes'>
                  <span>
                    <img src={graphic_designer} alt='graphic design icon' />
                    <p>Graphic Designer</p>
                  </span>
                </div>
              </Col>
            </Row>
            <Row className='justify-content-center'>
              <Col md={12} lg={12} sm={12} xs={12} className='employeeBoxesContainer'>
                <div className='employeeBoxes'>
                  <span>
                    <img src={developer} alt='graphic design icon' />
                    <p>Webapp Dev</p>
                  </span>
                </div>
              </Col>
            </Row>
            <Row className='justify-content-center' style={{ marginBottom: "150px" }}>
              <Col md={12} lg={12} sm={12} xs={12} className='employeeBoxesContainer'>
                <div className='employeeBoxes'>
                  <span>
                    <img src={marketeer} alt='graphic design icon' />
                    <p>Digital Marketer</p>
                  </span>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default JoinUs;
