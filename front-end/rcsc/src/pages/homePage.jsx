import React, { useContext } from "react";

import { withRouter, Redirect } from "react-router-dom";
import { AuthContext } from "../components/authentication";
import { Container } from "react-bootstrap";
import ContactUs from "../components/contactUs";

import NavigationBar from "../components/homePageNavbar";
import FrontPage from "../components/homeFrontPage";
// import HomepageInfo from "../components/HomepageInfo";
import ReasonsToStart from "../components/reasonsToStart/reasonsToStart";
import Footer from "../components/footer";
import PerksInUsing from  "../components/perksOfUsing/perksInUsing"


function HomePage() {
  const { currentUser } = useContext(AuthContext);
  if (currentUser != null) {
    return <Redirect to={"/user"} />;
  } else {
    return (
      <React.Fragment>
        <Container fluid={true} style={{ background: "rgb(0,148,151)", padding: "0px" }}>
          <FrontPage />
          <NavigationBar />
          {/*<HomepageInfo />*/}
          <ReasonsToStart/>
          <PerksInUsing/>
          <ContactUs />
          <Footer />
        </Container>
      </React.Fragment>
    );
  }
}
export default withRouter(HomePage);
