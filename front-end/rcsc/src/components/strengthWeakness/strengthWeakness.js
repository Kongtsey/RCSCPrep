import React from "react";
import fire from "../../config/Fire";

import {Container} from "react-bootstrap";

class StrengthWeakness extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            pending: true,
            questionsAnswered: [0,0,0,0],
            questionsAnsweredCorrectly: [0,0,0,0],
            ratios: [0,0,0,0]
        }
    }
    componentDidMount() {
        let questionCategories = ['Algebra','Probability','Fraction','Logic'];
        let questionsAnswered = [0,0,0,0];
        let questionsAnsweredCorrectly = [0,0,0,0];
        let ratio = [0,0,0,0];
        let db = fire.firestore();
        let user = fire.auth().currentUser;
        let questionRef = db.collection(user.email).doc('MathQuestions').collection("Questions");
        let responseQuery = questionRef.where('UserHasNotResponded','==',false);
        responseQuery.get().then(snapshot => {
            if(snapshot.empty){
                this.setState({pending: false});
            }
            else{
                snapshot.forEach(doc => {
                    for(let i =0;i<questionsAnswered.length;i++){
                        let questionObj = doc.data();
                        if(questionObj.Category === questionCategories[i]){
                            console.log(questionObj.Category, questionCategories[i]);
                            questionsAnswered[i]+=1;
                            if(questionObj.IsCorrectAnswer === true){
                                questionsAnsweredCorrectly[i]+=1
                            }
                        }
                    }
                })
                for(let i=0;i<questionsAnswered.length;i++){
                    if (questionsAnswered[i] === 0){
                        ratio[i]=-1;
                    }
                    else{
                        ratio[i] = questionsAnsweredCorrectly[i] / questionsAnswered[i];
                    }
                }
                this.setState({pending: false,questionsAnswered: questionsAnswered, questionsAnsweredCorrectly: questionsAnsweredCorrectly,ratio: ratio});
            }
        })
    }

    render() {
        return(
            <Container>
                {console.log(this.state.questionsAnswered, this.state.questionsAnsweredCorrectly,this.state.ratio)}
            </Container>
        )
    }
}
export default StrengthWeakness;