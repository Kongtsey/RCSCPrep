import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../style-sheet/footer.css";

function NavigationBar() {
  return (
    <Container className='footer_parent_div' fluid={true}>
      <Container>
        <Row className='footer_elements'>
          <Col className='project_motto' md={5} lg={5} sm={12}>
            <h6>About</h6>
            <p>
              Tempor nulla ea fugiat in est dolore ut elit anim elit deserunt tempor adipisicing magna. Aliqua excepteur duis ea ex amet culpa laborum aliquip ipsum Lorem eu anim. Voluptate duis minim
              sunt ad ut.Ut adipisicing occaecat ex esse deserunt tempor. Dolor magna minim fugiat adipisicing sit in id ipsum.{" "}
            </p>
          </Col>
          <Col className='footer_contacts' md={4} lg={4} sm={6}>
            <h6>Contact</h6>
            <p>
              Address: <br />
              &nbsp;&nbsp; Olakha, Thimphu, Bhutan
            </p>
            <p>
              Email: <br />
              &nbsp;&nbsp; bhutanexamfactory@gmail.com
            </p>
          </Col>
          <Col className='links' md={3} lg={3} sm={12}>
            <h6>Links</h6>
            <p>
              <a href='none'>English</a>
            </p>
            <p>
              <a href='none'>Mathematics</a>
            </p>
            <p>
              <a href='none'>Sign Up </a>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default NavigationBar;
