import React from "react";
import {auth, firestore} from "firebase"
class StrengthWeaknessPE extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            pending: true,
            questionCategoryCount: [0,0,0,0],
            questionsAnsweredCorrectly: [0,0,0,0],
            ratios:[0,0,0,0],
            weakestCategory: '',
            strongestCategory: '',
        }
    }
    componentDidMount() {
        let questionCategories = []
        if (this.props.name === 'Data') {
            questionCategories = ['category1','category2', 'category3', 'category4']
        }
        else if (this.props.name === 'Dzongkha'){
            questionCategories = ['Grammar', 'Comprehension', 'Vocabulary', 'Synonyms and Antonyms'];
        }
        else if (this.props.name === 'English'){
            questionCategories = ['Grammar', 'Comprehension', 'Vocabulary', 'Synonyms and Antonyms'];
        }
        else {
            questionCategories = ['Algebra', 'Probability', 'Fraction', 'Logic'];
        }
        let questionCategoryCount = [0,0,0,0];
        let questionsAnsweredCorrectly = [0,0,0,0];
        let ratio = [0,0,0,0];
        let user = auth().currentUser;
        let db = firestore();
        let collectionRef = db.collection(user.email).doc('ExamOnSignUp').collection(this.props.name)
        collectionRef
            .get()
            .then(snapshot =>{
                if(snapshot.empty){
                    this.setState({pending: false})
                } else {
                    snapshot.forEach(doc =>{
                        for(let i=0;i<questionCategories.length;i++){
                            let questionObj = doc.data();
                            if (questionObj.Category === questionCategories[i]) {
                                questionCategoryCount[i] += 1;
                                if (questionObj.IsCorrectAnswer === true) {
                                    questionsAnsweredCorrectly[i]+=1;
                                }
                            }
                        }
                    })
                    for(let i=0; i<questionsAnsweredCorrectly.length;i++){
                        if(questionCategoryCount[i]===0){
                            ratio[i]=-1;
                        } else {
                            ratio[i]=questionsAnsweredCorrectly[i]/ questionCategoryCount[i];
                        }
                    }
                    this.setState({
                        pending: false,
                        questionCategoryCount: questionCategoryCount,
                        questionsAnsweredCorrectly: questionsAnsweredCorrectly,
                        ratio: ratio
                    })
                    let min;
                    let minIndex;
                    let isValidIndex = false;
                    for (let i =0;i<questionsAnsweredCorrectly.length;i++){
                        if (isValidIndex === false) {
                            if (ratio[i] >= 0) {
                                min = ratio[i]
                                minIndex = i;
                                isValidIndex = true
                            }
                        } else {
                            if(ratio[i] >=0){
                                if(min > ratio[i]) {
                                    min = ratio[i];
                                    minIndex = i;
                                }
                            }
                        }
                        if(isValidIndex && min!==1){
                            this.setState({weakestCategory: questionCategories[minIndex]});
                        } else {
                            this.setState({weakestCategory: 'N/A'});
                        }
                    }
                }
            })
    }

    render() {
        if(this.state.pending){
            return <span>Loading . . .</span>
        }
        return(
            <React.Fragment>
                <b><span>{this.state.weakestCategory}</span></b>
            </React.Fragment>
        )
    }
}
export default StrengthWeaknessPE;
