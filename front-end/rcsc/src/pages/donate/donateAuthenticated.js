import React from "react";
import GeneralNavigationBar from "../../components/generalNavbar";
import DonateToKongtsey from "../../components/donate/donateToKongtsey";

import "./donateAuthenticated.css";
import Footer from "../../components/footer";

class DonateAuthenticated extends React.Component {
  render() {
    return (
      <div className='donateAuthenticatedContainer'>
        <GeneralNavigationBar />
        <DonateToKongtsey />
        <Footer />
      </div>
    );
  }
}

export default DonateAuthenticated;
