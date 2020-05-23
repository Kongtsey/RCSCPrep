import React from "react";
import NavigationBar from "../components/homePageNavbar";
import FrontPage from "../components/homeFrontPage";
import HomepageInfo from "../components/HomepageInfo";
import Footer from "../components/footer";
function HomePage() {
  return (
    <React.Fragment>
      <NavigationBar />
      <FrontPage />
      <HomepageInfo />
      <Footer />
    </React.Fragment>
  );
}

export default HomePage;

