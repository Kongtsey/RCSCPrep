import React, {Component} from "react";
import fire from "../config/Fire";
import {SimplePieChart} from "./PieChart";
class CorrectWrong extends Component{
    constructor(props){
        super(props);
        // this.numCorrect = this.numCorrect.bind(this);
        // this.increaseCount = this.increaseCount.bind(this);
        this.state={
            pending: true,
            numCorrectAnswers: 0,
            numWrongAnswers: 0
        };
    }
    componentDidMount(){
        let correctAnswers = 0;
        let totalAnswered = 0;
        let db = fire.firestore();
        let user = fire.auth().currentUser;
        let questionRef = db.collection(user.email).doc('MathQuestions').collection("Questions");//abc
        let responseQuery = questionRef.where('UserHasResponded','==',true);
        responseQuery.get().then(snapshot => {
            if (snapshot.empty){
                this.setState({pending: false});
                this.setState({numCorrectAnswers: 0});
                this.setState({numWrongAnswers: 0});
                return;
            }
            snapshot.forEach(doc => {
                console.log(doc.id,'=>',doc.data());
                totalAnswered += 1;
            })
        })
            .catch(err => {
                console.log(err);
            });
        if(this.state.pending === true){
            responseQuery.where('IsAnswerCorrect','==',true).get()
                .then(snapshot =>{
                    if (snapshot.empty){
                        this.setState({pending: false})
                        this.setState({numCorrectAnswers: 0});
                        this.setState({numWrongAnswers: totalAnswered});
                        return;
                    }
                    snapshot.forEach(doc =>{
                        console.log(doc.id,'=>', doc.data());
                        correctAnswers = correctAnswers + 1;
                    });
                    if(this.state.pending === true){
                        this.setState({pending: false});
                        this.setState({numCorrectAnswers: correctAnswers});
                        this.setState({numWrongAnswers: totalAnswered-correctAnswers});
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }
    render() {
        let correctAnswers = this.state.numCorrectAnswers;
        let incorrectAnswers = this.state.numWrongAnswers;
        if (this.state.pending){
            return <>Loading ...</>
        }
        return(
            <React.Fragment>
                {console.log(this.state.numCorrectAnswers)}
                {console.log(this.state.numWrongAnswers)}
                <SimplePieChart correctAnswers={correctAnswers} incorrectAnswers = {incorrectAnswers}/>
            </React.Fragment>
        )
    }
}
export default CorrectWrong;
