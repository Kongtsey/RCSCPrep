import React from "react";
import { Container, Col, Row, Button } from "react-bootstrap";
import "../style-sheet/home-front-page.css";
import front_page_image from "../images/studying.png";

function FrontPage() {
  return (
    <React.Fragment>
      <Container fluid={true} className='homepage_parent_container' s>
        <Row className='front_page_content'>
          <Col lg={6} md={6} sm={12} className='front_page_image'>
            <img alt='people sitting infront of a laptop' src={front_page_image}></img>
          </Col>
          <Col lg={6} md={6} sm={12} className='tagline'>
            <p className='tagline_message'>
              NEW and EFFICIENT <br /> way to study for
              <br /> RCSC Preliminary
            </p>
            <Button> Explore</Button>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default FrontPage;
