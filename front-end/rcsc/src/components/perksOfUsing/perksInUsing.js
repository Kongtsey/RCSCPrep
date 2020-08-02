import React from "react";
import { Container,Col,Row } from "react-bootstrap";

import "./perksInUsin.css"

class PerksInUsing extends React.Component{
    render() {
        return(
            <Container fluid={true} className="perksInUsingContainer">
                <Row>
                    <Col sm={6}>
                        HEYYYLLOOO
                    </Col>
                    <Col sm={6}>
                        World
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default PerksInUsing;