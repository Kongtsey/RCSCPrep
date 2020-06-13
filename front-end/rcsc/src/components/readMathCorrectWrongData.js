import React, {Component} from "react";
import fire from "../config/Fire";
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
        let questionRef = db.collection('Questions');
        let responseQuery = questionRef.where('UserHasResponded','==',true);
        responseQuery.get().then(snapshot => {
            if (snapshot.empty){
                console.log('No matching docs.');
                return;
            }
            snapshot.forEach(doc => {
                console.log(doc.id,'=>',doc.data());
                totalAnswered += 1;
            })
        })
            .catch(err => {
                console.log(err);
            })
        responseQuery.where('IsAnswerCorrect','==',true).get()
            .then(snapshot =>{
                if (snapshot.empty){
                    console.log("No such doc exists.");
                    return;
                }
                snapshot.forEach(doc =>{
                    console.log(doc.id,'=>', doc.data());
                    correctAnswers = correctAnswers + 1;
                })
                this.setState({pending: false});
                this.setState({numCorrectAnswers: correctAnswers});
                this.setState({numWrongAnswers: totalAnswered-correctAnswers});
            })
            .catch(err => {
                console.log(err);
            })
    }
    // numCorrect(){
    //     let db = fire.firestore();
    //     let questionRef = db.collection('Questions');
    //     let responseQuery = questionRef.where('UserHasResponded', '==', true);
    //     responseQuery.where('IsAnswerCorrect','==',true).get()
    //         .then(snapshot =>{
    //             if (snapshot.empty){
    //                 console.log("No such doc exists.");
    //                 return;
    //             }
    //             snapshot.forEach(doc => {
    //                 console.log(doc.id,'=>',doc.data());
    //                 this.increaseCount("numCorrectAnswers")
    //             });
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }
    render() {
        if (this.state.pending){
            return <>Loading ...</>
        }
        return(
            <React.Fragment>
                {console.log(this.state.numCorrectAnswers)}
                {console.log(this.state.numWrongAnswers)}
            </React.Fragment>
        )
    }
}
export default CorrectWrong;
