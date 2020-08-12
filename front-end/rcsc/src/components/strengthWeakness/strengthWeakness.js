import React from "react";
import fire from "../../config/Fire";

import {Container} from "react-bootstrap";

//TODO: Remove console logs.
class StrengthWeakness extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            pending: true,
            questionsAnswered: [0,0,0,0],
            questionsAnsweredCorrectly: [0,0,0,0],
            ratios: [0,0,0,0],
            weakestCategory: '',
        }
    }
    componentDidMount() {
        let questionType = this.props.questionType;
        console.log(questionType);
        let questionTypeDefined = false;
        let questionCategories=[]
        if (questionType==='MathQuestions'){
            console.log("Hello there inside math")
            questionCategories = ['Algebra','Probability','Fraction','Logic'];
            questionTypeDefined = true
        }
        else if(questionType==='EnglishQuestions'){
            console.log("Hello there inside english")
            questionCategories = ['Grammar','Comprehension','Vocabulary','Synonyms and Antonyms'];
            questionTypeDefined = true
        }
        if (questionType){
        let questionsAnswered = [0,0,0,0];
        let questionsAnsweredCorrectly = [0,0,0,0];
        let ratio = [0,0,0,0];
        let db = fire.firestore();
        let user = fire.auth().currentUser;
        let questionRef = db.collection(user.email).doc(this.props.questionType).collection("Questions");
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
                let min;
                let minIndex;
                let flag=false;
                for(let i =0;i<questionsAnswered.length;i++){
                    if(flag===false){
                        if(ratio[i]>=0){
                            min = ratio[i];
                            minIndex = i;
                            flag=true;
                        }
                    }
                    else{
                        if(ratio[i]>=0){
                            if(min>ratio[i]){
                                min=ratio[i];
                                minIndex=i;
                            }
                        }
                    }
                }
                if(flag===true) {
                    this.setState({weakestCategory: questionCategories[minIndex]});
                }
                console.log("weakest category is:",this.state.weakestCategory);
            }
        })}
    }

    render() {
        if(this.state.pending){
            return <p>Loading ...</p>
        }
        return(
            <React.Fragment>
                <span>{this.state.weakestCategory}</span>
                {console.log(this.state.questionsAnswered, "Questions Answered")}
                {console.log(this.state.questionsAnsweredCorrectly, "Questions Answered Correctly")}
                {console.log(this.state.ratio, "Ratio")}
            </React.Fragment>
        )
    }
}
export default StrengthWeakness;