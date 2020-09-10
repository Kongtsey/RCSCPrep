import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import GeneralNavbar from "../components/generalNavbar";

class ComingSoon extends React.Component{
    render() {
        return (
            <React.Fragment>
                <GeneralNavbar />
                <Container className={"temporary-exam-conatiner"} fluid={true}>
                    <Row>
                        <Col md={12} style={{ marginTop: "100px" }}>
                            <p style={{ color: "white" ,fontSize: "10vh", textAlign: "center" }}> COMING </p>
                        </Col>
                        <Col md={12}>
                            <p style={{color: "white" ,fontSize: "15vh", textAlign: "center" }}> SOON </p>
                        </Col>
                        <Col md={12}>
                            <p style={{ color: "white" ,fontSize: "4vh", textAlign: "center" }}> in about a week . . .</p>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default ComingSoon;
