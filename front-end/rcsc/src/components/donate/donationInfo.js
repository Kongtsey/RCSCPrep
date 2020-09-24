import React from "react";
import {Col, Container, Row} from "react-bootstrap";

import "./donationInfo.css"

class DonationInfo extends React.Component {
    render() {
        return (
            <Container className='donationInfoContainer'>
                <Row className='justify-content-center no-gutters'>
                    <Col xs={12} className="donationInformationMetaContainer">
                        <Row className='justify-content-center'>
                            <Col xs={11} className='donationInformationContainer'>
                                <Row>
                                    <Col xs={12}>
                                        <p>Account Number</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} className='accountNumber'>
                                        <p>202530563</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} className='accountNameLabel'>
                                        <p>Account Name</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} className='accountName'>
                                        <p>Phuntsho Norbu</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default DonationInfo;
