import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style-sheet/contact-us.css";

function ContactUs() {
  return (
    <React.Fragment>
      <Container fluid={true}>
        <Row>
          <Col md={6} lg={6} sm={12} className='job-ads'>
            <h1> job ads coming soon</h1>
          </Col>
          <Col md={5} lg={5} sm={12} className='contact-info'>
            <h1> Contact us coming soon </h1>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default ContactUs;
