import React, {Component} from "react";
import {Redirect,withRouter} from "react-router-dom";
import "../style-sheet/practice-math.css";
import GeneralNavbar from "../components/generalNavbar";
import fire from "../config/Fire";
import NumberOfQuestion from "../components/questionNumberOptionsAndTime";
import HomePage from "./homePage";
import UserDashboard from "./UserDashboard";

class PracticeMath extends Component{
    _isMounted = false;
    constructor(props){
        super(props);
        // this.authListener = this.authListener.bind(this)
        this.state = {
            user: fire.auth().currentUser,
        }
    }
    componentDidMount() {
        this._isMounted = true;
        if(this._isMounted==true){
            fire.auth().onAuthStateChanged((user)=>{
                console.log(user);
                if(user){
                    this.setState({user});
                }else{
                    this.setState({user: null});
                }
            })
        };
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    // authListener(){
    //     fire.auth().onAuthStateChanged((user)=>{
    //         console.log(user);
    //         if (user){
    //             console.log("");
    //         } else {
    //             this.setState({user: null});
    //         }
    //     })
    // }
    render() {
        if(this.state.user != null){
            return (
                <React.Fragment>
                    <GeneralNavbar />
                    <br />
                    <NumberOfQuestion />
                </React.Fragment>
            );
        } else {
            return (
                <Redirect to="/"/>
            );
        }

    }
}

export default withRouter(PracticeMath);
