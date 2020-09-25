import React from "react";
import {Col, Container, Row} from "react-bootstrap";

import "./donateToKongtsey.css"

class DonateToKongtsey extends React.Component {
    render() {
        return (
            <Container>
                <Row className="justify-content-center no-gutters">
                    <Col xs={10} lg={8} className="donateToKongtseyHeader">
                        <h3>Donate To Kongtsey</h3>
                        <hr/>
                    </Col>
                </Row>
                <Row className="justify-content-center no-gutters">
                    <Col xs={12} lg={7} className='donateToKongtseyDescription'>
                        <p>The team at Kongtsey consists of just two brothers working to give users the best experience
                            possible. But we need your help! Server costs, hosting costs and other costs incurred while bringing this product to you is a limiting factor for us.
                            Your donation, whatever the amount, would help not only keep the website running but also motivate us to do better.
                        </p>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default DonateToKongtsey;
