import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import HomePageNavbar from "../components/homePageNavbar";
import JoinUs from "../components/joinUs/joinUs";
import ContactUs from "../components/contactUs/contactUs";
import Footer from "../components/footer";

class AboutPage extends React.Component {
  render() {
    return (
      <Container fluid={true} style={{ background: "rgb(0, 149, 152)" }}>
        <Container>
          <Row>
            <Col sm={12}>
              <HomePageNavbar />
            </Col>
          </Row>
          <Row>
            <Col sm={5}>
              <JoinUs />
            </Col>
            <Col sm={2}></Col>
            <Col sm={5}>
              <ContactUs />
            </Col>
          </Row>
        </Container>
        <Row>
          <Footer extraMsg='We are always looking for more collaborators. Shoot us an email even if what you are looking for is not listed.' />
        </Row>
      </Container>
    );
  }
}
export default AboutPage;
