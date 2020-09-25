import React, {useContext} from 'react';
import NavigationBar from "../../components/homePageNavbar";
import DonateWallPaper from "../../components/donate/donateWallPaper";
import DonateToKongtsey from "../../components/donate/donateToKongtsey";
import DonationInfo from "../../components/donate/donationInfo";
import {withRouter, Redirect} from "react-router-dom";
import {AuthContext} from "../../components/authentication";
import {Col} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Footer from "../../components/footer";

import "./donate.css"

function Donate() {
    const {currentUser} = useContext(AuthContext);
    if (currentUser != null) {
        return <Redirect to={"/user"}/>
    } else {
        return (
            <div className='donateContainer'>
                <NavigationBar/>
                <Row className='justify-content-center no-gutters'>
                    <Col lg={7} md={8}>
                        <DonateWallPaper/>
                    </Col>
                    <Col lg={7} md={8} className='donationBoxContainer'>
                        <Row className="no-gutters">
                            <Col lg={12}>
                                <DonateToKongtsey/>
                            </Col>
                            <Col lg={12}>
                                <DonationInfo/>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <hr/>
                <Footer/>
            </div>
        );
    }
}

export default withRouter(Donate);
