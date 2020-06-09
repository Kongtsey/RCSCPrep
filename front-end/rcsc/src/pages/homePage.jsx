import React, {Component, useContext} from "react";
import NavigationBar from "../components/homePageNavbar";
import FrontPage from "../components/homeFrontPage";
import HomepageInfo from "../components/HomepageInfo";
import Footer from "../components/footer";
import { withRouter, Redirect} from "react-router-dom";
import { AuthContext } from "../components/authentication";
// import fire from "../config/Fire";
// import UserDashboard from "./UserDashboard";

// class HomePage extends Component{
//     _isMounted = false;
//     constructor(props){
//         super(props);
//         // this.authListener = this.authListener.bind(this);
//         this.state = {
//             user: null,
//         };
//     }
//     componentDidMount() {
//         this._isMounted = true;
//
//     }
//     componentWillUnmount() {
//         this._isMounted = false;
//     }
//     // authListener(){
//     //     fire.auth().onAuthStateChanged((user)=>{
//     //         console.log(user);
//     //         if (user){
//     //             this.setState({user});
//     //         } else {
//     //             this.setState({user: null});
//     //         }
//     //     })
//     // }
//     render() {
//         if (this.state.user != null){
//             return (
//                 <React.Fragment>
//                     <Route exact path='/' component={UserDashboard} />
//                 </React.Fragment>
//                 );
//         } else {
//             return (
//                 <React.Fragment>
//                     <NavigationBar />
//                     <FrontPage />
//                     <HomepageInfo />
//                     <Footer />
//                 </React.Fragment>
//             );
//         }
//     }
// }
//
// export default HomePage;
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

