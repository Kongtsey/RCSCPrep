import React, {Component, useContext} from "react";
import {Redirect,withRouter} from "react-router-dom";
import "../style-sheet/practice-math.css";
import GeneralNavbar from "../components/generalNavbar";
import fire from "../config/Fire";
import NumberOfQuestion from "../components/questionNumberOptionsAndTime";
import {AuthContext} from "../components/authentication";

function PracticeMath() {
    const {currentUser} = useContext(AuthContext);
    if (currentUser!=null){
        return(
            <React.Fragment>
                <GeneralNavbar />
                <br />
                <NumberOfQuestion />
            </React.Fragment>
        )
    } else {
        return (
            <Redirect to="/"/>
        );


    }
}
export default withRouter(PracticeMath);
// class PracticeMath extends Component{
//     _isMounted = false;
//     constructor(props){
//         super(props);
//         this.state = {
//             user: fire.auth().currentUser,
//         }
//     }
//     componentDidMount() {
//         this._isMounted = true;
//         if(this._isMounted==true){
//             fire.auth().onAuthStateChanged((user)=>{
//                 console.log(user);
//                 if(user){
//                     this.setState({user});
//                 }else{
//                     this.setState({user: null});
//                 }
//             })
//         };
//     }
//     componentWillUnmount() {
//         this._isMounted = false;
//     }
//     render() {
//         if(this.state.user != null){
//             return (
//                 <React.Fragment>
//                     <GeneralNavbar />
//                     <br />
//                     <NumberOfQuestion />
//                 </React.Fragment>
//             );
//         } else {
//             return (
//                 <Redirect to="/"/>
//             );
//         }
//
//     }
// }
//
// export default withRouter(PracticeMath);
