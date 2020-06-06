import React, {Component} from "react";
import "../style-sheet/practice-math.css";
import GeneralNavbar from "../components/generalNavbar";
import fire from "../config/Fire";
import NumberOfQuestion from "../components/questionNumberOptionsAndTime";

class PracticeMath extends Component{
    _isMounted = false;
    constructor(props){
        super(props);
        this.state = {
            user: fire.auth().currentUser,
        }
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
                console.log("");
            } else {
                this.setState({user: null});
            }
        })
    }
    render() {
        if(this.state.user != null){
            return (
                <React.Fragment>
                    <GeneralNavbar />
                    <br />
                    <NumberOfQuestion />
                </React.Fragment>
            );
        }

    }
}

export default PracticeMath;
