import React, { useContext } from "react";

import { withRouter, Redirect } from "react-router-dom";
import { AuthContext } from "../components/authentication";
import { Container } from "react-bootstrap";

import NavigationBar from "../components/homePageNavbar";
import FrontPage from "../components/homeFrontPage";
import ReasonsToStart from "../components/reasonsToStart/reasonsToStart";
import Footer from "../components/footer";
import PerksInUsing from "../components/perksOfUsing/perksInUsing";
import Founders from "../components/foundersComponent/founders";

function HomePage() {
  const { currentUser } = useContext(AuthContext);
  if (currentUser != null) {
    return <Redirect to={"/user"} />;
  } else {
    return (
      <React.Fragment>
        <Container fluid={true} style={{ background: "rgb(0,148,151)", padding: "0px" }}>
          <NavigationBar />
          <FrontPage />
          <ReasonsToStart />
          <PerksInUsing />
          <hr/>
          <Footer extraMsg='' />
        </Container>
      </React.Fragment>
    );
  }
}
export default withRouter(HomePage);
