import React from "react";
import {auth,firestore} from "firebase"

//TODO: Remove console logs.
class StrengthWeakness extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pending: true,
            questionsAnswered: [0, 0, 0, 0],
            questionsAnsweredCorrectly: [0, 0, 0, 0],
            ratios: [0, 0, 0, 0],
            weakestCategory: '',
            strongestCategory: '',
            displayStrength: false,
            displayWeakness: false,
        }
    }

    componentDidMount() {
        this.setState({
            displayStrength: false,
            displayWeakness: false,
        })
        if (this.props.toDisplay==="strength"){
            this.setState({displayStrength: true})
        }
        if(this.props.toDisplay==="weakness"){
            this.setState({displayWeakness: true})
        }
        let questionType = this.props.questionType;
        // console.log(questionType);
        let questionTypeDefined = false;
        let questionCategories = []
        if (questionType === 'MathQuestions') {
            // console.log("Hello there inside math")
            questionCategories = ['Algebra', 'Probability', 'Fraction', 'Logic'];
            questionTypeDefined = true
        } else if (questionType === 'EnglishQuestions') {
            // console.log("Hello there inside english")
            questionCategories = ['Grammar', 'Comprehension', 'Vocabulary', 'Synonyms and Antonyms'];
            questionTypeDefined = true
        }
        if (questionTypeDefined) {
            let questionsAnswered = [0, 0, 0, 0];
            let questionsAnsweredCorrectly = [0, 0, 0, 0];
            let ratio = [0, 0, 0, 0];
            let db = firestore();
            let user = auth().currentUser;
            let questionRef = db.collection(user.email).doc(this.props.questionType).collection("Questions");
            let responseQuery = questionRef.where('UserHasNotResponded', '==', false);
            responseQuery.get().then(snapshot => {
                if (snapshot.empty) {
                    this.setState({pending: false});
                } else {
                    snapshot.forEach(doc => {
                        for (let i = 0; i < questionsAnswered.length; i++) {
                            let questionObj = doc.data();
                            if (questionObj.Category === questionCategories[i]) {
                                questionsAnswered[i] += 1;
                                if (questionObj.IsCorrectAnswer === true) {
                                    questionsAnsweredCorrectly[i] += 1
                                }
                            }
                        }
                    })
                    for (let i = 0; i < questionsAnswered.length; i++) {
                        if (questionsAnswered[i] === 0) {
                            ratio[i] = -1;
                        } else {
                            ratio[i] = questionsAnsweredCorrectly[i] / questionsAnswered[i];
                        }
                    }
                    this.setState({
                        pending: false,
                        questionsAnswered: questionsAnswered,
                        questionsAnsweredCorrectly: questionsAnsweredCorrectly,
                        ratio: ratio
                    });
                    let min;
                    let max;
                    let maxIndex;
                    let minIndex;
                    let isValidIndex = false;
                    for (let i = 0; i < questionsAnswered.length; i++) {
                        if (isValidIndex === false) {
                            if (ratio[i] >= 0) {
                                min = ratio[i];
                                max = ratio[i];
                                maxIndex = i;
                                minIndex = i;
                                isValidIndex = true;
                            }
                        } else {
                            if (ratio[i] >= 0) {
                                if (min > ratio[i]) {
                                    min = ratio[i];
                                    minIndex = i;
                                }
                                if( max<ratio[i]){
                                    max = ratio[i]
                                    maxIndex = i;
                                }
                            }
                        }
                    }
                    if (isValidIndex === true && min !== 1 && max !== 0) {
                        this.setState({weakestCategory: questionCategories[minIndex]});
                        this.setState({strongestCategory: questionCategories[maxIndex]})
                    } else {
                        this.setState({weakestCategory: 'N/A',strongestCategory: 'N/A'});
                    }
                }
            })
        }
    }

    render() {
        if (this.state.pending) {
            return <span>...</span>
        }
        return (
            <React.Fragment>
                {this.state.displayStrength && <b><span>{this.state.strongestCategory}</span></b>}
                {this.state.displayWeakness && <b><span>{this.state.weakestCategory}</span></b>}
            </React.Fragment>
        )
    }
}

export default StrengthWeakness;
