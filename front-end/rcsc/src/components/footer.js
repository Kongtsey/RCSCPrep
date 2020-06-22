import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style-sheet/footer.css";

function Footer() {
  return (
    <Container className='footer_parent_div' fluid={true}>
      <Container>
        <Row className='footer_elements'>
          <Col className='project_motto' md={3} lg={4} sm={12}>
            <p> RCSC Prep is an online test prep designed to help students and to give them the personalised aid that they aren't able to receive at tuition centers.
              <br/>Our site is designed with the idea of the student in mind and our mission is to provide the most helpful prep that one can receive</p>
          </Col>
          <Col className='footer_contacts' md={3} lg={3} sm={6}>
            <h6>Contact</h6>
            <p>
              Address: <br />
              &nbsp;&nbsp; Olakha, Thimphu, Bhutan
            </p>
            <p>
              Email: <br />
              &nbsp;&nbsp; bhutanexamfactory@gmail.com
            </p>
          </Col>
          <Col className='quickNav' md={3} lg={3} sm={12}>
            <h6>Quick Nav</h6>
            <p>
              <a href="#">About</a>
            </p>
            <p>
              <a href='#'>English</a>
            </p>
            <p>
              <a href='#'>Mathematics</a>
            </p>
            <p>
              <a href='#'>Sign Up </a>
            </p>
          </Col>
          <Col lg={2} md={2} sm={4} className="socialMedia">
            <h6>Follow RCSC Prep</h6>
            <Row>
              <Col lg={12} md={12} sm={12} className="smIcons">
                <a href="#"><FontAwesomeIcon icon={faFacebook}/> &nbsp; Facebook</a>
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} sm={12} className="smIcons">
                <a href="#"><FontAwesomeIcon icon={faInstagram}/> &nbsp; Instagram</a>
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={12} sm={12} className="smIcons">
                <a href="#"><FontAwesomeIcon icon={faYoutube}/> &nbsp; Youtube</a>
              </Col>
            </Row>
          </Col>
        </Row>
        <hr/>
        <Row className="legal">
          <Col md={4} lg={5} sm={8} className="copyright">
            <p>&#169; 2020 RCSC Prep</p>
          </Col>
          <Col md={2} lg={4} sm={2}><a href="#">Terms of use</a></Col>
          <Col md={2} lg={3} sm={2}><a href="#">Privacy Policy</a></Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Footer;
