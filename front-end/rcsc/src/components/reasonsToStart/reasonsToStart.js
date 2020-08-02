import React from "react";
import {Container, Col, Row} from "react-bootstrap";
import "./reasonsToStart.css"

class ReasonsToStart extends React.Component{
    render() {
        return(
            <Container fluid={true}className="reasonsToStartContainer">
                <Row className="justify-content-center">
                    <Col sm={10} className="reasonsToStartHeader">
                        <h3>Why we started PrepCity</h3>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} className="threeReasons">
                        This
                    </Col>
                    <Col sm={4} className='threeReasons'>
                        is
                    </Col>
                    <Col sm={4} className='threeReasons'>
                        SO COOL!
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default ReasonsToStart