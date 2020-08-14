import React from "react";
import { Container, Col, Row } from "react-bootstrap";

import "./founders.css";
import founders from "../../images/homePage/portrait.png";

class Founders extends React.Component {
  render() {
    return (
      <Container fluid={true} className='foundersContainer'>
        <Row className='justify-content-center'>
          <Col sm={10} className='title'>
            <h1>F O U N D E R S</h1>
          </Col>
        </Row>
        <hr className='titleHr' />
        <Container>
          <Row>
            <Col xs={12} sm={9} className='foundersBio'>
              RCSC Prep makes it easy for you to study at your own pace and at your own time. Our feedback is personalized to your performance and helps you find your weaknesses and your strengths.
              RCSC Prep also has features that make you be able to take control of when you want to study and is tailor made just for you. You can also choose to focus on what you lack rather than
              just going along with the classroom, in a sense RCSC Prep is what allows you to make this education a 21st century education and the best part is that its completely free.
            </Col>
            <Col xs={12} sm={3} className='foundersPicContainer'>
              <img src={founders} className='foundersPic' alt='foundersPic' />
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
export default Founders;
