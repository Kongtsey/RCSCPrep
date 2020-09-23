import React from 'react';
import NavigationBar from "../../components/homePageNavbar";
import DonateWallPaper from "../../components/donate/donateWallPaper";
import DonateToKongtsey from "../../components/donate/donateToKongtsey";
import DonationInfo from "../../components/donate/donationInfo";

import "./donate.css"
class Donate extends React.Component{
    render() {
        return (
            <div className='donateContainer'>
                <NavigationBar/>
                <DonateWallPaper/>
                <DonateToKongtsey/>
                <DonationInfo/>
            </div>
        );
    }
}
export default Donate;
