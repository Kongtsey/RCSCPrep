import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faMapMarker, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../style-sheet/footer.css";

class Footer extends React.Component{
  render() {
    return (
        <Container className='footer_parent_div' fluid={true}>
          <Container>
            <Row className='footer_elements'>
              <Col sm={12}>
                <Row>
                  <Col sm={12} className="extraMessage">{this.props.extraMsg || ""}</Col>
                </Row>
                <Row>
                  <Col className='project_motto' md={4} lg={4} sm={12}>
                    <p>
                      {" "}
                      RCSC Prep is an online test prep designed to help students and to give them the personalised aid
                      that
                      they aren't able to receive at tuition centers.
                      <br/><br/>
                      Our site is designed with the idea of the student in mind and our mission is to provide the most
                      helpful prep that one can receive
                    </p>
                  </Col>
                  <Col className='footer_contacts' md={4} sm={6}>
                    <Row>
                      <Col sm={12} className="contactContent">
                        <FontAwesomeIcon icon={faMapMarker} className="footerIcons"/> &nbsp;&nbsp; Olakha, Thimphu,
                        Bhutan
                      </Col>
                    </Row>
                    <Row>
                      <Col sm={12} className="contactContent" style={{marginTop: "10px", marginBottom: "10px"}}>
                        <a href="mailto: bhutanexamfactory@gmail.com" className="emailLink"><FontAwesomeIcon
                            icon={faEnvelope} className="footerIcons"/> &nbsp; bhutanexamfactory@gmail.com</a>
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
                          <Col sm={4} className="smIcons">
                            <a href="https://www.facebook.com/BhtExmFct">
                              <FontAwesomeIcon icon={faFacebook} className="footerIcons smIcons"/>
                            </a>
                          </Col>
                          <Col sm={4}>
                            <a href="https://www.instagram.com/bhutan_exam_factory/">
                              <FontAwesomeIcon icon={faInstagram} style={{marginTop: "15px"}}className="footerIcons smIcons"/>
                            </a>
                          </Col>
                          <Col sm={4}>
                            <a href="https://www.youtube.com/channel/UCmS06px2S8hXCz0A7eB_ZhA">
                              <FontAwesomeIcon icon={faYoutube} style={{marginTop: "15px"}} className="footerIcons smIcons"/>
                            </a>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </Col>
                  <Col className='quickNav' md={4} sm={12}>
                    <p className="quickNavText">Quick Nav</p>
                    <p>
                      <a href='about' className="quickNavText">About</a>
                    </p>
                    <p>
                      <a href='/' className="quickNavText">Home</a>
                    </p>
                    {/*<p>*/}
                    {/*  <a href='english' className="quickNavText">English</a>*/}
                    {/*</p>*/}
                    {/*<p>*/}
                    {/*  <a href='mathematics' className="quickNavText">Mathematics</a>*/}
                    {/*</p>*/}
                  </Col></Row>
              </Col>
            </Row>
            <hr/>
            <Row className='legal'>
              <Col md={4} lg={5} sm={8} className='copyright'>
                <p>&#169; 2020 RCSC Prep</p>
              </Col>

              <Col md={2} lg={4} sm={2}><a href="google.com" className="footerTermsOfUse">Terms of use</a></Col>
              <Col md={2} lg={3} sm={2}><a href="google.com" className="footerTermsOfUse">Privacy Policy</a></Col>

            </Row>
          </Container>
        </Container>
    );
  }
}

export default Footer;
