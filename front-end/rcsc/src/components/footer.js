import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMapMarker, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style-sheet/footer.css";

function Footer() {
  return (
    <Container className='footer_parent_div' fluid={true}>
      <Container>
        <Row className='footer_elements'>
          <Col className='project_motto' md={4} lg={4} sm={12}>
            <p>
              {" "}
              RCSC Prep is an online test prep designed to help students and to give them the personalised aid that they aren't able to receive at tuition centers.
              <br /><br/>
              Our site is designed with the idea of the student in mind and our mission is to provide the most helpful prep that one can receive
            </p>
          </Col>
          <Col className='footer_contacts' md={4} sm={6}>
            <Row>
              <Col sm={12} className="contactContent">
                <FontAwesomeIcon icon={faMapMarker}/> &nbsp;&nbsp; Olakha, Thimphu, Bhutan
              </Col>
            </Row>
            <Row>
              <Col sm={12} className="contactContent" style={{marginTop: "10px",marginBottom:"10px"}}>
                <FontAwesomeIcon icon={faEnvelope}/> &nbsp;&nbsp; bhutanexamfactory@gmail.com
              </Col>
            </Row>
            <Row>
              <Col sm={12} className="footerSocial">
                Follow us:
              </Col>
            </Row>
            <Row>
              <Col sm={12} style={{marginLeft: "60px"}}>
                <Row>
                  <Col sm={4}>
                    <a href="facebook.com"><FontAwesomeIcon icon={faFacebook}/></a>
                  </Col>
                  <Col sm={4}>
                    <a href="instagram.com"><FontAwesomeIcon icon={faInstagram}/></a>
                  </Col>
                  <Col sm={4}>
                    <a href="youtube.com"><FontAwesomeIcon icon={faYoutube}/></a>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col className='quickNav' md={4}  sm={12}>
            <p className="quickNavText">Quick Nav</p>
            <p>

              <a href='about' className="quickNavText">About</a>
            </p>
            <p>
              <a href='english' className="quickNavText">English</a>
            </p>
            <p>
              <a href='mathematics' className="quickNavText">Mathematics</a>
            </p>
            <p>
              <a href='signup' className="quickNavText">Sign Up </a>

            </p>
          </Col>
          {/*<Col lg={2} md={2} sm={4} className='socialMedia'>*/}
          {/*  <h6>Follow RCSC Prep</h6>*/}
          {/*  <Row>*/}

          {/*    <Col lg={12} md={12} sm={12} className="smIcons">*/}
          {/*      <a href="instagram.com"><FontAwesomeIcon icon={faFacebook}/> &nbsp; Facebook</a>*/}
          {/*    </Col>*/}
          {/*  </Row>*/}
          {/*  <Row>*/}
          {/*    <Col lg={12} md={12} sm={12} className="smIcons">*/}
          {/*      <a href="facebook.com"><FontAwesomeIcon icon={faInstagram}/> &nbsp; Instagram</a>*/}
          {/*    </Col>*/}
          {/*  </Row>*/}
          {/*  <Row>*/}
          {/*    <Col lg={12} md={12} sm={12} className="smIcons">*/}
          {/*      <a href="youtube.com"><FontAwesomeIcon icon={faYoutube}/> &nbsp; Youtube</a>*/}

          {/*    </Col>*/}
          {/*  </Row>*/}
          {/*</Col>*/}
        </Row>
        <hr />
        <Row className='legal'>
          <Col md={4} lg={5} sm={8} className='copyright'>
            <p>&#169; 2020 RCSC Prep</p>
          </Col>

          <Col md={2} lg={4} sm={2}><a href="google.com">Terms of use</a></Col>
          <Col md={2} lg={3} sm={2}><a href="google.com">Privacy Policy</a></Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Footer;
