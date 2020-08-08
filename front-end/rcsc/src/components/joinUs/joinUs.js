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
                        </Row>
                        <Row className="justify-content-center">
                            <Col sm={8} className="employeeBoxesContainer">
                                <div className="employeeBoxes">
                                    <p>Graphic Designer</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col sm={8} className="employeeBoxesContainer">
                                <div className="employeeBoxes">
                                    <p>Webapp Dev</p>
                                </div>
                            </Col>
                        </Row>
                        <Row className="justify-content-center" style={{marginBottom: "150px"}}>
                            <Col sm={8} className="employeeBoxesContainer">
                                <div className="employeeBoxes">
                                    <p>Digital Marketer</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default JoinUs;