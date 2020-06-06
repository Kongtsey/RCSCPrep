import React, {Component} from "react";
import NavigationBar from "../components/homePageNavbar";
import FrontPage from "../components/homeFrontPage";
import HomepageInfo from "../components/HomepageInfo";
import Footer from "../components/footer";
import fire from "../config/Fire";
import UserDashboard from "./UserDashboard";
class HomePage extends Component{
    _isMounted = false;
    constructor(props){
        super(props);
        this.authListener = this.authListener.bind(this);
        this.state = {
            user: null,
        };
    }
    componentDidMount() {
        this._isMounted = true;
        if(this._isMounted==true){
            this.authListener();
        };
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    authListener(){
        fire.auth().onAuthStateChanged((user)=>{
            console.log(user);
            if (user){
                this.setState({user});
            } else {
                this.setState({user: null});
            }
        })
    }
    render() {
        if (this.state.user != null){
            return <UserDashboard/>
        } else {
            return (
                <React.Fragment>
                    <NavigationBar />
                    <FrontPage />
                    <HomepageInfo />
                    <Footer />
                </React.Fragment>
            );
        }
    }
}

export default HomePage;

