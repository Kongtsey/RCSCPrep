import React from "react";
import {Row,Col, Container} from "react-bootstrap";

import HomePageNavbar from "../components/homePageNavbar"
import JoinUs from "../components/joinUs/joinUs";

class AboutPage extends React.Component{
    render() {
        return(
            <Container fluid={true} style={{ backgroundColor: "rgb(0,148,151)", padding: "0px" }}>
                <Row>
                    <Col sm={12} style={{height: "auto"}}>
                        <HomePageNavbar/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6}>
                        <JoinUs/>
                    </Col>
                </Row>
            </Container>
        )
    }
}
export default AboutPage;