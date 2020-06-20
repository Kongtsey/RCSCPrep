import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "../style-sheet/home-front-page.css";
import front_page_image from "../images/studying.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartPie, faLaptopHouse, faMoneyBillAlt} from  "@fortawesome/free-solid-svg-icons";
function FrontPage() {
  return (
    <React.Fragment>
      <Container fluid={true} className='homepage_parent_container'>
        <Container>
          <Row className='front_page_content'>
            <Col lg={6} md={6} sm={12} className='tagline'>
              <p className='tagline_message'>
                Pass the RCSC Prelims with ease!
              </p><br/>
              <p className="product_description">
                Our free online test prep makes it easier for you to practice for the P.E and to score better
                on it. By providing you metrics with how you're performing, RCSC Prep makes prepping for the Prelims more fun and efficient!
              </p>
              <Button> Explore</Button>
            </Col>
            <Col lg={6} md={6} sm={12} className='front_page_image'>
              <img alt='people sitting infront of a laptop' src={front_page_image}></img>
            </Col>
          </Row>
          <Row>
            <Col lg={4} md={4} sm={12}>
              <FontAwesomeIcon icon={faChartPie} className="featureIcons"/><br/>
              <p className="featureTitle">Smart FeedBack</p> <br/>
              <ul className="featureDescription">
                <li >Get metrics and feedback to turn your weaknesses into strengths.</li>
                <li >Questions from past papers that are continuously updated.</li>
              </ul>
              {/*<p className="featureDescription">Get metrics and feedback to turn your weaknesses into strengths.<br/><span style={{marginTop: "5px !important"}}>Questions from past papers that are continuously updated.</span></p> <br/>*/}
              {/*<p className="featureDescription">Questions from past papers that are continuously updated.</p>*/}
            </Col>
            <Col lg={4} md={4} sm={12}>
              <FontAwesomeIcon icon={faLaptopHouse} className="featureIcons"/>
              <br/>
              <p className="featureTitle">Accessible</p> <br/>
              <ul className="featureDescription">
                <li>Study anywhere anytime. Our portable experience makes it easy for you to practice!</li>
                <li>Compatible with phones and laptop to make sure your device is not an issue!</li>
              </ul>
            </Col>
            <Col lg={4} md={4} sm={12}>
              <FontAwesomeIcon icon={faMoneyBillAlt} className="featureIcons"/>
              <br/>
              <p className="featureTitle">Free!</p> <br/>
              <ul className="featureDescription">
                <li>No more paying for Tuition! RCSC Prep is completely free with no registration cost.<br/>Sign Up now!!</li>
                {/*<li>Compatible with phones and laptop to make sure your device is not an issue!</li>*/}
              </ul>
            </Col>
          </Row>
        </Container>
      </Container>
    </React.Fragment>
  );
}

export default FrontPage;
