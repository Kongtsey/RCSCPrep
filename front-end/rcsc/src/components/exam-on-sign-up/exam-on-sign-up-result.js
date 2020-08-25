import React from "react";
import {withRouter} from "react-router-dom";
import {Container, Col, Row} from "react-bootstrap";
import "../../style-sheet/sign-up-exam-result.css";
import {auth,firestore} from "firebase"
import {SimplePieChart} from "../PieChart";

class SignUpExamResult extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pending: true,
            dataCorrectAnswer: 0,
            dzongkhaCorrectAnswer: 0,
            englishCorrectAnswer: 0,
            mathCorrectAnswer: 0,
            weakestSection: '',
            finalScore: 0,
        };
    }
    componentDidMount() {
        let db=firestore();
        let user = auth().currentUser;
        let totalCorrectAnswers = 0;
        let sections = ['Data Interpretation','Dzongkha', 'English','Math'];
        let correctAnswers = [0,0,0,0];//data dzongkha english math
        let dataCollectionRef = db.collection(user.email).doc('ExamOnSignUp').collection('Data')
        let dataResponseQuery = dataCollectionRef.where('IsCorrectAnswer','==',true)
        dataResponseQuery
            .get()
            .then((snapshot) =>{
                if(snapshot.empty){
                    correctAnswers[0]=0
                } else {
                    snapshot.forEach((doc)=>{
                        correctAnswers[0]+=1;
                        totalCorrectAnswers+=1
                    })
                }
            })
            .then(()=>{
                let dzongkhaCollectionRef = db.collection(user.email).doc('ExamOnSignUp').collection('Dzongkha')
                let dzongkhaResponseQuery = dzongkhaCollectionRef.where('IsCorrectAnswer','==',true)
                dzongkhaResponseQuery
                    .get()
                    .then((snapshot)=>{
                        if(snapshot.empty){
                            correctAnswers[1]=0
                        } else {
                            snapshot.forEach((doc)=>{
                                correctAnswers[1]+=1;
                                totalCorrectAnswers += 1;
                            })
                        }
                    })
            })
            .then(()=>{
                let englishCollectionRef = db.collection(user.email).doc('ExamOnSignUp').collection('English')
                let englishResponseQuery = englishCollectionRef.where('IsCorrectAnswer','==',true);
                englishResponseQuery
                    .get()
                    .then((snapshot)=>{
                        if(snapshot.empty){
                            correctAnswers[2]=0
                        } else {
                            snapshot.forEach((doc)=>{
                                correctAnswers[2]+=1;
                                totalCorrectAnswers+=1;
                            })
                        }
                    })
            })
            .then(()=>{
                let mathCollectionRef = db.collection(user.email).doc('ExamOnSignUp').collection('Math')
                let mathResponseQuery = mathCollectionRef.where('IsCorrectAnswer','==',true);
                mathResponseQuery
                    .get()
                    .then((snapshot)=>{
                        if(snapshot.empty){
                            correctAnswers[3]=0;
                            let weakestSectionIndex = Math.min(...correctAnswers);
                            // console.log(weakestSectionIndex, 'weakest section index')
                            this.setState({
                                dataCorrectAnswer: correctAnswers[0],
                                dzongkhaCorrectAnswer: correctAnswers[1],
                                englishCorrectAnswer: correctAnswers[2],
                                mathCorrectAnswer: correctAnswers[3],
                                finalScore: totalCorrectAnswers,
                                weakestSection:sections[weakestSectionIndex],
                                pending: false,
                            })
                        } else {
                            snapshot.forEach((doc)=>{
                                correctAnswers[3]+=1;
                                totalCorrectAnswers+=1;
                            })
                            let weakestSectionIndex = Math.min(...correctAnswers);
                            // console.log(weakestSectionIndex, 'weakest section index')
                            this.setState({
                                dataCorrectAnswer: correctAnswers[0],
                                dzongkhaCorrectAnswer: correctAnswers[1],
                                englishCorrectAnswer: correctAnswers[2],
                                mathCorrectAnswer: correctAnswers[3],
                                finalScore: totalCorrectAnswers,
                                weakestSection:sections[weakestSectionIndex],
                                pending: false,
                            })
                        }
                    })
            })
    }

    render() {
        if (this.state.pending) {
            return <p>Pending true...</p>
        }
        else {
            return (
                <React.Fragment>
                    <Container>
                        <br/>
                        <Row>
                            <h3 style={{paddingLeft: "10px"}}> Composite Score: {this.state.finalScore}/100</h3>
                        </Row>
                        <Row>
                            <p style={{paddingLeft: "10px"}}>Your weakest section seems to be: <b>{this.state.weakestSection}</b></p>
                        </Row>
                        <br/>
                        <Row>
                            <Col md={3} className={"sign-up-exam-subject-result-parent-box"}>
                                <div className={"sign-up-exam-subject-result"}>
                                    <h5>math</h5>
                                    <SimplePieChart incorrectAnswers={25-this.state.mathCorrectAnswer} poc="examPractice"
                                                    correctAnswers={this.state.mathCorrectAnswer} name='Math'/>
                                </div>
                            </Col>
                            <Col md={3} className={"sign-up-exam-subject-result-parent-box"}>
                                <div className={"sign-up-exam-subject-result"}>
                                    <h5>English</h5>
                                    <SimplePieChart incorrectAnswers={25-this.state.englishCorrectAnswer} poc="examPractice"
                                                    correctAnswers={this.state.englishCorrectAnswer} name='English'/>
                                </div>
                            </Col>
                            <Col md={3} className={"sign-up-exam-subject-result-parent-box"}>
                                <div className={"sign-up-exam-subject-result"}>
                                    <h5>Dzongkha</h5>
                                    <SimplePieChart incorrectAnswers={25-this.state.dzongkhaCorrectAnswer} poc="examPractice"
                                                    correctAnswers={this.state.dzongkhaCorrectAnswer} name='Dzongkha'/>
                                </div>
                            </Col>
                            <Col md={3} className={"sign-up-exam-subject-result-parent-box"}>
                                <div className={"sign-up-exam-subject-result"}>
                                    <h5>Data</h5>
                                    <SimplePieChart incorrectAnswers={25-this.state.dataCorrectAnswer} poc="examPractice"
                                                    correctAnswers={this.state.dataCorrectAnswer} name='Data'/>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </React.Fragment>
            );
        }
    }
}

export default withRouter(SignUpExamResult);
