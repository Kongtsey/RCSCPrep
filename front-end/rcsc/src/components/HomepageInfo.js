import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../style-sheet/home-page-info.css";
import dashboard_image from "../images/dashboard.png";
import ScrollAnimation from 'react-animate-on-scroll';
import image_subsection_1 from "../images/subsection-1.png";
import image_subsection_2 from "../images/subsection-2.png";
import image_subsection_3 from "../images/subsection-3.png";
import image_subsection_4 from "../images/subsection-4.png";

function HomepageInfo() {
  return (
    <React.Fragment>
      <head>
        {/*<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"/>*/}
      </head>
      <Container className="homePage_info_container" fluid={true}>
        <Container>
          <Row className='homepage-info-parent-div'>
            <Col md={6} lg={6} sm={12} className='info_description_image'>
              <ScrollAnimation animateIn="fadeInLeft" animateOnce={true}>
              <img alt='the first feature' src={dashboard_image}></img>
              </ScrollAnimation>
            </Col>
            <Col className='info_description' md={6} lg={6} sm={12}>
              <ScrollAnimation animateIn="fadeInRight" animateOnce={true}>
                <p className='info_description_title'> A custom study plan just for you.</p>
                <p className='info_description_content'>
                  RCSC Prep makes it easy for you to study at your own pace and at your own time. Our feedback is personalized to your performance
                  and helps you find your weaknesses and your strengths.
                </p>
                <p className='info_description_content'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dignissim eget nunc eget eleifend. Nullam finibus tincidunt dui ut luctus. Proin ut tempor urna, sit amet aliquet massa. Vivamus at leo non leo fermentum viverra. Cras vulputate tellus quis vulputate posuere. Praesent at nisi massa. Etiam finibus tellus est, ac placerat elit dictum eu. Nunc sollicitudin ipsum mi. Nulla facilisi. Aenean dapibus metus bibendum, faucibus sem sit amet, volutpat neque. Nulla quis diam quis quam feugiat interdum.
                </p>
              </ScrollAnimation>
            </Col>
          </Row>
          <hr />
          <Row className='info_description_subsection'>
            <Col md={3} lg={3} sm={6} className='info_description_subsection_image'>
              <img alt='subsection 1' src={image_subsection_1}></img>
            </Col>
            <Col md={3} lg={3} sm={6} className='info_description_subsection_image'>
              <img alt='subsection 2' src={image_subsection_2}></img>
            </Col>
            <Col md={3} lg={3} sm={6} className='info_description_subsection_image'>
              <img alt='subsection 3' src={image_subsection_3}></img>
            </Col>
            <Col md={3} lg={3} sm={6} className='info_description_subsection_image'>
              <img alt='subsection 4' src={image_subsection_4}></img>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid={true}>
        <Row>
          <Col className='content_before_footer' md={12} lg={12} sm={12}>
            <p>Coming Soon</p>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default HomepageInfo;
