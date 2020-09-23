import React from "react";
import {Col, Container, Row} from "react-bootstrap";

import "./donateWallPaper.css"
import donateWallPaper from "../../images/donate/wallpaper.png"
class DonateWallPaper extends React.Component {
    render() {
        return (
            <Container fluid={true} className="donateWallPaperContainer">
                <Row className="no-gutters">
                    <Col xs={12} className='donateWallPaperImageContainer'>
                        <img src={donateWallPaper} className='donateWallPaperImage'/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default DonateWallPaper;
