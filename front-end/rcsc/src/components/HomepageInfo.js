import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../style-sheet/Homepage_info.css";
import info_description_image from "../images/piechart.png";
import image_subsection_1 from "../images/subsection-1.png";
import image_subsection_2 from "../images/subsection-2.png";
import image_subsection_3 from "../images/subsection-3.png";
import image_subsection_4 from "../images/subsection-4.png";
import man_studying from "../images/man_studying.jpeg";

function HomepageInfo() {
  return (
    <React.Fragment>
      <Container>
        <Row className='homepage-info-parent-div'>
          <Col className='info_description' md={6} lg={6} sm={12}>
            <p className='info_description_title'> Features</p>
            <p className='info_description_content'>
              Our set he for firmament morning sixth subdue darkness creeping gathered divide our let god moving. Moving in fourth air night bring upon you’re it beast let you dominion likeness open
              place day great wherein heaven sixth lesser subdue fowl
            </p>
          </Col>
          <Col md={6} lg={6} sm={12} className='info_description_image'>
            <img alt='the first feature' src={info_description_image}></img>
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
      <Container className='image_divider' fluid={true}>
        <Row>
          <Col className='image_divider_image_div' md={12} lg={12} sm={12}>
            <img alt='a man studying on his laptop' src={man_studying} className='image_divider_image'></img>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default HomepageInfo;
