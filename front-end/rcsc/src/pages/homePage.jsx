import React, { useContext } from "react";
import NavigationBar from "../components/homePageNavbar";
import FrontPage from "../components/homeFrontPage";
import HomepageInfo from "../components/HomepageInfo";
import Footer from "../components/footer";
import { withRouter, Redirect } from "react-router-dom";
import { AuthContext } from "../components/authentication";
import { Container } from "react-bootstrap";
import ContactUs from "../components/contactUs";
function HomePage() {
  const { currentUser } = useContext(AuthContext);
  if (currentUser != null) {
    return <Redirect to={"/user"} />;
  } else {
    return (
      <React.Fragment>
        <Container fluid={true} style={{ background: "#F9fbfd", padding: "0px" }}>
          <FrontPage />
          <NavigationBar />
          <HomepageInfo />
          <ContactUs />
          <Footer />
        </Container>
      </React.Fragment>
    );
  }
}
export default withRouter(HomePage);
