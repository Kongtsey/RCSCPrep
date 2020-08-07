import React from "react";
import { Container,Col,Row } from "react-bootstrap";
import "./joinUs.css"


class JoinUs extends React.Component{
    render() {
        return (
            <Container className="joinUsContainer" fluid={true}>
                <Row className="justify-content-center">
                    <Col sm={6}>
                        <h5>Join Us</h5>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default JoinUs;