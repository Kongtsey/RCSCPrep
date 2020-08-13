import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "../style-sheet/home-front-page.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie, faLaptopHouse, faMoneyBill } from "@fortawesome/free-solid-svg-icons";
import user from "../images/homePage/laptop.png";

function FrontPage() {
  return (
    <React.Fragment>
      <Container className='homepage_parent_container'>
        <Row className='front_page_content'>
          <Col lg={6} md={6} sm={12} className='tagline frontPageHeader'>
            <p className='tagline_message'>
              Pass the <b>RCSC Prelims </b>with ease!
            </p>
            <br />
            <p className='product_description'>
              Our free online test prep makes it easier for you to practice for the P.E and to score better on it. By providing you metrics with how you're performing, RCSC Prep makes prepping for the
              Prelims more fun and efficient!
            </p>
            <Button className='exploreButton'> Explore</Button>
          </Col>
          <Col lg={6} md={6} sm={12} className='front_page_image'>
            <img alt='people sitting infront of a laptop' src={user}></img>
          </Col>
        </Row>
        <Row style={{ marginBottom: "25px", marginTop: "40px" }}>
          <Col lg={4} md={4} sm={12}>
            <Row>
              <Col sm={11} className='featureContainer'>
                <Row>
                  <Col sm={12} className='featureIconsContainer'>
                    <FontAwesomeIcon icon={faChartPie} className='featureIcons' />
                  </Col>
                </Row>
                <p className='featureTitle'>Smart FeedBack</p> <br />
                <ul className='featureDescription'>
                  <li>Get metrics and feedback to turn your weaknesses into strengths.</li>
                  <li>Questions from past papers that are continuously updated.</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <Row>
              <Col sm={11} className='featureContainer'>
                <Row>
                  <Col sm={12} className='featureIconsContainer'>
                    <FontAwesomeIcon icon={faLaptopHouse} className='featureIcons' />
                  </Col>
                </Row>
                <p className='featureTitle'>Accessible</p> <br />
                <ul className='featureDescription'>
                  <li>Study anywhere anytime. Our portable experience makes it easy for you to practice!</li>
                  <li>Compatible with phones and laptop to make sure your device is not an issue!</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col lg={4} md={4} sm={12}>
            <Row className='justify-content-center'>
              <Col sm={11} className='featureContainer'>
                <Row>
                  <Col sm={12} className='featureIconsContainer'>
                    <FontAwesomeIcon icon={faMoneyBill} className='featureIcons' />
                  </Col>
                </Row>
                <p className='featureTitle'>Free!</p> <br />
                <ul className='featureDescription'>
                  <li>
                    RCSC Prep is completely free with no registration cost.
                    <br />
                    Sign Up NOW!!
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default FrontPage;
