import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import "./contactUs.css";
class ContactUs extends React.Component {
  render() {
    return (
      <Container className='joinUsContainer'>
        <Row>
          <Col sm={12} className='joinUsHeader'>
            <h3>Contact Us</h3>
          </Col>
        </Row>

        <Row>
          <Col md={12} lg={12} sm={12} xs={12} className='descripText'>
            <p>Name</p>
          </Col>
        </Row>

        <Row className='justify-content-center'>
          <Col md={12} lg={12} sm={12} xs={12} className='contactDetails'>
            <p>Bhutan Exam Factory</p>
          </Col>
        </Row>

        <Row>
          <Col md={12} lg={12} sm={12} xs={12} className='descripText'>
            <p>Email</p>
          </Col>
        </Row>

        <Row className='justify-content-center'>
          <Col md={12} lg={12} sm={12} xs={12} className='contactDetails'>
            <p>bhutanexamfactory@gmail.com</p>
          </Col>
        </Row>

        <Row>
          <Col md={12} lg={12} sm={12} xs={12} className='descripText'>
            <p>Phone</p>
          </Col>
        </Row>

        <Row className='justify-content-center'>
          <Col md={12} lg={12} sm={12} xs={12} className='contactDetails'>
            <p>17949642 OR 17562465</p>
          </Col>
        </Row>

        <Row>
          <Col md={12} lg={12} sm={12} xs={12} className='descripText'>
            <p>Address</p>
          </Col>
        </Row>

        <Row className='justify-content-center'>
          <Col md={12} lg={12} sm={12} xs={12} className='contactDetails lastDetail'>
            <p>Olakha, Thimphu, Bhutan</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default ContactUs;
