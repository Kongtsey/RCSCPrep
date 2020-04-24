import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../style-sheet/Homepage_info.css";
import info_description_image from "../images/piechart.png";
function HomepageInfo() {
  return (
    <Container>
      <Row className='homepage-info-parent-div'>
        <Col className='info_description' md={6} lg={6} sm={12}>
          <p className='info_description_title'> First Feature</p>
          <p className='info_description_content'>
            Our set he for firmament morning sixth subdue darkness creeping gathered divide our let god moving. Moving in fourth air night bring upon you’re it beast let you dominion likeness open
            place day great wherein heaven sixth lesser subdue fowl
          </p>
        </Col>
        <Col md={6} lg={6} sm={12} className='info_description_image'>
          <img alt='the first feature' src={info_description_image}></img>
        </Col>
      </Row>
    </Container>
  );
}

export default HomepageInfo;
