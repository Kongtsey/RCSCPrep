import React from "react";
import { Container,Col,Row } from "react-bootstrap";
import "./joinUs.css"


class JoinUs extends React.Component{
    render() {
        return (
            <Container className="joinUsContainer" fluid={true}>
                <Row className="justify-content-center">
                    <Col sm={12}>
                        <Row>
                            <Col sm={12} className="joinUsHeader">
                                <h3>Join Us</h3>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} className="lookingFor">
                                <h5>We are currently looking for: </h5>
                            </Col>
                        </Row></Col>

                </Row>
            </Container>
        )
    }
}
export default JoinUs;