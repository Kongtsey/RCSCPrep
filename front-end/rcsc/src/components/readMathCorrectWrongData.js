import React, {Component} from "react";
import fire from "../config/Fire";

class CorrectWrong extends Component{
    constructor(props){
        super(props);
        this.numCorrect = this.numCorrect.bind(this);
        this.state={
            numCorrectAnswers: 0,
            numWrongAnswers: 0
        };
    }
    numCorrect(){
        let db = fire.firestore();
        let correctAnswers = 0
        let questionRef = db.collection('Questions');
        let responseQuery = questionRef.where('UserHasResponded', '==', true);
        responseQuery.where('IsAnswerCorrect','==',true).get()
            .then(snapshot =>{
                if (snapshot.empty){
                    console.log("No such doc exists.");
                    return;
                }
                snapshot.forEach(doc => {
                    console.log(doc.id,'=>',doc.data());
                    correctAnswers +=1;
                });
                this.setState({
                    numCorrectAnswers: correctAnswers
                });
            })
            .catch(err => {
                console.log(err);
            })
    }
    render() {
        return(
            <React.Fragment>
            </React.Fragment>
        )
    }
}
export default CorrectWrong;
