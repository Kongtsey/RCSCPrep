import React from 'react';
import NavigationBar from "../../components/homePageNavbar";
import DonateWallPaper from "../../components/donate/donateWallPaper";
import DonateToKongtsey from "../../components/donate/donateToKongtsey";
import DonationInfo from "../../components/donate/donationInfo";

import "./donate.css"
import {Col} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Footer from "../../components/footer";
class Donate extends React.Component{
    render() {
        return (
            <div className='donateContainer'>
                <NavigationBar/>
                <Row className='justify-content-center no-gutters'>
                    <Col lg={4} md={8}>
                        <DonateWallPaper/>
                    </Col>
                    <Col lg={4} md={8}>
                       <Row className="no-gutters">
                           <Col lg={12} >
                               <DonateToKongtsey/>
                           </Col>
                           <Col lg={12}>
                               <DonationInfo/>
                           </Col>
                       </Row>
                    </Col>
                </Row>
                <hr style={{backgroundColor: "white"}}/>
                <Footer/>
            </div>
        );
    }
}
export default Donate;
