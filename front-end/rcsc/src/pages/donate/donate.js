import React, { useContext } from "react";
import NavigationBar from "../../components/homePageNavbar";
import DonateToKongtsey from "../../components/donate/donate_to_kongtsey";
import { withRouter, Redirect } from "react-router-dom";
import { AuthContext } from "../../components/authentication";
import Footer from "../../components/footer";

import "./donate.css";

function Donate() {
  const { currentUser } = useContext(AuthContext);
  if (currentUser != null) {
    return <Redirect to={"/donate_to_us"} />;
  } else {
    return (
      <div className='donateContainer'>
        <NavigationBar />
        <DonateToKongtsey />
        <Footer />
      </div>
    );
  }
}
export default withRouter(Donate);
