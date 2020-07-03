import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../style-sheet/home-page-info.css";
import dashboard_image from "../images/dashboard.png";
import ScrollAnimation from 'react-animate-on-scroll';


function HomepageInfo() {
  return (
    <React.Fragment>
      <Container className='homePage_info_container' fluid={true}>
        <Row className='homepage-info-parent-div'>
          <Col md={6} lg={6} sm={12} className='info_description_image'>
            <ScrollAnimation animateIn='fadeInLeft' animateOnce={true}>
              <img alt='the first feature' src={dashboard_image}></img>
            </ScrollAnimation>
          </Col>
          <Col className='info_description' md={6} lg={6} sm={12}>
            <ScrollAnimation animateIn='fadeInRight' animateOnce={true}>
              <p className='info_description_title'> A custom study plan just for you.</p>
              <p className='info_description_content'>
                RCSC Prep makes it easy for you to study at your own pace and at your own time. Our feedback is personalized to your performance and helps you find your weaknesses and your strengths.
                RCSC Prep also has features that make you be able to take control of when you want to study and is tailor made just for you. You can also choose to focus on what you lack rather than
                just going along with the classroom, in a sense RCSC Prep is what allows you to make this education a 21st century education and the best part is that its completely free.
              </p>
            </ScrollAnimation>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default HomepageInfo;
