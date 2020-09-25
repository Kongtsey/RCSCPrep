import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import {faFacebook, faInstagram, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faMapMarker} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "../style-sheet/footer.css";

class Footer extends React.Component {
  render() {
    return (
      <Container className='footer_parent_div' fluid={true} >
        <Container>
          <Row className='footer_elements'>
            <Col sm={12}>
              <Row>
                <Col sm={12} className='extraMessage'>
                  {this.props.extraMsg || ""}
                  {this.props.extraMsg ? <hr className={"footer-msg-breaker"} /> : ""}
                </Col>
              </Row>
              <Row>
                <Col className='project_motto' md={4} lg={4} sm={12} xs={12}>
                  <p>
                    <b>Kongtsey</b> is an online test prep designed to help students and to give them the personalised aid that they aren't able to receive at tuition centers. Our site is designed
                    with the idea of the student in mind and our mission is to provide the most helpful prep that one can receive
                  </p>
                </Col>
                <Col className='footer_contacts' md={4} sm={6} xs={12}>
                  <Row>
                    <Col sm={12} className='contactContent'>
                      <FontAwesomeIcon icon={faMapMarker} className='footerIcons' /> &nbsp;&nbsp; Olakha, Thimphu, Bhutan
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={12} className='contactContent' style={{ marginTop: "10px", marginBottom: "10px" }}>
                      <a href='mailto: kongtsey@gmail.com' className='emailLink'>
                        <FontAwesomeIcon icon={faEnvelope} className='footerIcons' /> &nbsp; kongtsey@gmail.com
                      </a>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={4} sm={12} className='footerSocial'>
                      Follow us:
                    </Col>
                    <Col xs={8} sm={12} style={{ marginLeft: "60px" }}>
                      <Row>
                        <Col xs={2} sm={4} className='smIcons'>
                          <a href='https://www.facebook.com/kongTseyBht'>
                            <FontAwesomeIcon icon={faFacebook} className='footerIcons smIcons' />
                          </a>
                        </Col>

                        <Col xs={2} sm={4}>
                          <a href='https://www.instagram.com/kongtsey/'>
                            <FontAwesomeIcon icon={faInstagram} style={{ marginTop: "13px" }} className='footerIcons smIcons' />
                          </a>
                        </Col>

                        <Col xs={2} sm={4}>
                          <a href='https://www.youtube.com/channel/UCM3BEac4pLaUq96MQ_VM0Cg/?guided_help_flow=5'>
                            <FontAwesomeIcon icon={faYoutube} style={{ marginTop: "13px" }} className='footerIcons smIcons' />
                          </a>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col className='quickNav' md={4} sm={12} xs={12}>
                  <Row>
                    <Col lg={12} md={12} sm={12} xs={5}>
                      <p className='quickNavText'>Quick Nav</p>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={3}>
                      <p>
                        <a href='about_and_contact' className='quickNavText'>
                          Contact
                        </a>
                      </p>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={3}>
                      <p>
                        <a href='/' className='quickNavText'>
                          Home
                        </a>
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <hr />
          <Row className='legal'>
            <Col md={4} lg={5} sm={8} xs={4} className='footerTermsOfUse'>
              <p style={{ paddingTop: "5px" }}>&#169; 2020 Kongtsey</p>
            </Col>

            <Col md={2} lg={4} sm={2} xs={4}>
              <a href='google.com' className='footerTermsOfUse'>
                Terms of use
              </a>
            </Col>
            <Col md={2} lg={3} sm={2} xs={4}>
              <a href='google.com' className='footerTermsOfUse'>
                Privacy Policy
              </a>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}

export default Footer;
