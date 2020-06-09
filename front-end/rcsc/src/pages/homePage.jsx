import React, { useContext} from "react";
import NavigationBar from "../components/homePageNavbar";
import FrontPage from "../components/homeFrontPage";
import HomepageInfo from "../components/HomepageInfo";
import Footer from "../components/footer";
import { withRouter, Redirect} from "react-router-dom";
import { AuthContext } from "../components/authentication";
function HomePage() {
    const {currentUser}= useContext(AuthContext);
    if (currentUser!=null){
        return <Redirect to={"/user"} />;
    }else {
        return (
            <React.Fragment>
                <FrontPage />
                <HomepageInfo />
                <NavigationBar />
                <Footer />
            </React.Fragment>
        );
    }
}
export default withRouter(HomePage);

