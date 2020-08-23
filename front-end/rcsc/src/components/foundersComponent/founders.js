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
              Karma Yoezer <i>(left)</i> is a sophomore in Connecticut College, USA, studying Computer science and Economics with a minor in Mathematics. Karma has held several internships both at
              home and abroad. Phuntsho Norbu <i>(right)</i> graduated from Wheaton College in the USA with Bachelors of Arts in Computer Science and Mathematical Economics. After Completing his
              undergraduate, Phuntsho travelled around the world for a year as a Thomas J Watson fellow, looking at how Drones are helping rural communities and ultimately helping build local robotics
              capacity. Phuntsho Norbu and Karma Yoezer are brothers, passionate about technology and innovation. They are strong believers in bringing social change through technology.
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
