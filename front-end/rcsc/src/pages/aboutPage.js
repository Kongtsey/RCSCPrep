import React from "react";
import {Row,Col, Container} from "react-bootstrap";

import HomePageNavbar from "../components/homePageNavbar"
import JoinUs from "../components/joinUs/joinUs";
import ContactUs from "../components/contactUs/contactUs";
import Footer from "../components/footer";

class AboutPage extends React.Component{
    render() {
        return(
            <Container fluid={true} style={{ backgroundColor: "rgb(0,148,151)", padding: "0px" }}>
                <Row>
                    <Col sm={12} style={{height: "auto",paddingRight: "0"}}>
                        <HomePageNavbar/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={6} style={{paddingRight: "0"}}>
                        <JoinUs/>
                    </Col>
                    <Col sm={6} style={{paddingLeft: "0"}}>
                        <ContactUs/>
                    </Col>
                </Row>
                <Row>
                    <Footer/>
                </Row>
            </Container>
        )
    }
}
export default AboutPage;