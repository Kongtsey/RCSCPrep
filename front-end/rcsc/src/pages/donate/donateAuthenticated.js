import React from "react";
import GeneralNavigationBar from "../../components/generalNavbar";
import DonateWallPaper from "../../components/donate/donateWallPaper";
import DonateToKongtsey from "../../components/donate/donateToKongtsey";
import {Col, Row,} from "react-bootstrap";
import DonationInfo from "../../components/donate/donationInfo";

import "./donateAuthenticated.css";
import Footer from "../../components/footer";

class DonateAuthenticated extends React.Component {
    render() {
        return (
            <div className='donateAuthenticatedContainer'>
                <GeneralNavigationBar/>
                <Row className='justify-content-center no-gutters'>
                    <Col lg={10} md={8}>
                        <DonateWallPaper/>
                    </Col>
                    <Col lg={10} md={8}>
                        <Row className="no-gutters justify-content-center">
                            <Col lg={12}>
                                <DonateToKongtsey/>
                            </Col>
                            <Col lg={12}>
                                <DonationInfo/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Footer/>
            </div>
        );
    }
}

export default DonateAuthenticated;
