import React from "react";
import {Container} from "react-bootstrap";

import HomePageNavbar from "../components/homePageNavbar"
class AboutPage extends React.Component{
    render() {
        return(
            <Container fluid={true} style={{ background: "rgb(0,148,151)", padding: "0px" }}>
                <HomePageNavbar/>
            </Container>
        )
    }
}
export default AboutPage;