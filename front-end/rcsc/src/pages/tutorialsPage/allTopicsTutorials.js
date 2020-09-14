import React from "react";
import GeneralNavigationBar from "../../components/generalNavbar";
import {Container, Row, Col} from "react-bootstrap";
import TutorialJumbotron from "../../components/TutorialJumbotrons/TutorialJumbotron";
import SimpleAlgebra from "../../images/tutorialImageCovers/simpleAlgebra.png"
import "./allTopicsTutorial.css";
import solvingPatterns from "../../images/tutorialImageCovers/pattern.jpg"
import comparisons from "../../images/tutorialImageCovers/comparisons.png"
import directions from "../../images/tutorialImageCovers/directions.png"
import fractions from "../../images/tutorialImageCovers/fractions.png"
import gk from "../../images/tutorialImageCovers/generalKnowledge.png"
import logic from "../../images/tutorialImageCovers/logic.png"
import percentages from "../../images/tutorialImageCovers/percentages.png"
import ratios from "../../images/tutorialImageCovers/ratios.png"

class AllTopicsTutorials extends React.Component {
    render() {
        return (
            <React.Fragment>
                <GeneralNavigationBar/>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <h3 style={{marginTop: "30px"}}>Tutorial Videos</h3>
                            <br/>
                            <hr/>
                            <Row className="justify-content-center">
                                <Col xs={10} lg={4} className="jumbotronContainer">
                                    <TutorialJumbotron imageAlt="golden ratio, fractals" coverImage={solvingPatterns}
                                                       pathname="/tutorial_videos/solving_patterns"
                                                       tutorialVidTitle="Solving Patterns"
                                                       vidSrc="https://www.youtube.com/embed/obpM03HFqa8"
                                                       relatedResources="https://www.indiabix.com/logical-reasoning/letter-and-symbol-series/,http://www.edugoog.com/series-completion/question-answer/alphabet-series/1.html,https://dokumen.tips/documents/logical-reasoning-558460df15b23.html"
                                                       tutorialDescrip="Solving patterns is one of the most common questions in the RCSC PE and there has been at least one in all of the recent past 5 papers. Solving pattern questions usually have to do with a series of alphabets and you having to guess the next alphabet or the next thing by understanding the pattern in the question and using it."
                                                       vidTitle="Solving patterns video"
                                                       pastQuestions="What is the missing letter in this series: g ? d i j d k l d,What is the missing letter in this series: a z b ? c x,If: 2 & 3 = 10; 7 & 2 = 63; 6 & 5 = 66; 8 & 4 = 96; 9 & 7 =……."
                                                       lastRemark="The question we will be solving in the video is: What is the missing letter in the series: A F D I G L J ___"
                                    />
                                </Col>
                                <Col xs={10} lg={4} className="jumbotronContainer">
                                    <TutorialJumbotron tutorialVidTitle="Simple Algebra" coverImage={SimpleAlgebra}
                                                       imageAlt="chalkboard math"
                                                       relatedResources="https://www.indiabix.com/aptitude/time-and-work/, https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:solve-equations-inequalities/x2f8bb11595b61c86:linear-eqns-unknown-coefficients/v/linear-equations-with-unknown-coefficients?modal=1"
                                                       pastQuestions="The price of a commodity increased 8 points then decreased 13 points and then increased 9 points. If the commodity price before the changes was x points which of the following was the commodity price in points after the changes?,How many times can you subtract 20 from 200?,If an object travels five feet in a second how many feet will it travel in 1 hour?"
                                                       tutorialDescrip="Simple algebra is one of the biggest categories in the RCSC PE and the difficulty of these questions range from easy to hard. In most of these questions you have to simplify the equations and solve them by using basic algebra. "
                                                       vidSrc="https://www.youtube.com/embed/5K1DFGl28SU"
                                                       vidTitle="Simple Algebra solve"
                                                       pathname="/tutorial_videos/simple_algebra"
                                                       lastRemark="The question we will be solving in the video leans on the harder side of the algebra questions. Question: 20 unskilled workers can finish a job in 50 hours. The same job can be finished by 25 skilled workers in 20 hours. If 10 unskilled and 10 skilled workers are employed, how long will they take to complete the same job?"
                                    />
                                </Col>
                                <Col xs={10} lg={4} className='jumbotronContainer'>
                                    <TutorialJumbotron tutorialVidTitle="Solving Comparisons" coverImage={comparisons}
                                                       imageAlt="weighing scale"
                                                       relatedResources="https://www.indiabix.com/aptitude/problems-on-ages/,https://www.toppr.com/guides/quantitative-aptitude/age-problems/ratio-based-age-problems/"
                                                       pastQuestions="In a horse race Dawa came in ahead of Pema. Dawa finished after Tashi. Sonam beat Tashi but finished after Rinzin. Where did Sonam finish?, Pema who is sixteen years old is four times as old as her brother Sonam. How old will Pema be when Pema is twice as old as her brother Sonam?"
                                                       tutorialDescrip="Solving comparisons also frequents the RCSC PE papers. These types of questions give you a bunch of names of people and small facts about how they relate to each other and generally ask you to find an implied fact from the information. These questions are usually very wordy and it always helps to list out the information in an organized way on your worksheet."
                                                       vidSrc="https://www.youtube.com/embed/lzHoTmXmLr4"
                                                       vidTitle="Solving Comparisons video"
                                                       pathname="/tutorial_videos/solving_comparisons"
                                                       lastRemark="The questions we will be solving is: Karma is heavier than Sonam. Dorji weighs less than Sonam. Dawa is heavier than Dorji but lighter than Sonam. Which of the following statements is NOT true?"

                                    />
                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <Col xs={10} lg={4} className='jumbotronContainer2nd'>
                                    <TutorialJumbotron tutorialVidTitle="Directional Problems" coverImage={directions}
                                                       imageAlt="pointers" pathname="/coming_soon"/>
                                </Col>
                                <Col xs={10} lg={4} className='jumbotronContainer2nd'>
                                    <TutorialJumbotron tutorialVidTitle="Basic Fractions" coverImage={fractions}
                                                       imageAlt="pie slices" pathname="/coming_soon"/>
                                </Col>
                                <Col xs={10} lg={4} className='jumbotronContainer2nd'>
                                    <TutorialJumbotron tutorialVidTitle="General Knowledge" coverImage={gk}
                                                       imageAlt="uni and Books" pathname="/coming_soon"/>
                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <Col xs={10} lg={4} className='jumbotronContainer3rd'>
                                    <TutorialJumbotron tutorialVidTitle="Logic" coverImage={logic}
                                                       imageAlt="brain functioning" pathname="/coming_soon"/>
                                </Col>
                                <Col xs={10} lg={4} className="jumbotronContainer3rd">
                                    <TutorialJumbotron tutorialVidTitle="Percentages" coverImage={percentages}
                                                       imageAlt="25%" pathname="/coming_soon"/>
                                </Col>
                                <Col xs={10} lg={4} className='jumbotronContainer3rd'>
                                    <TutorialJumbotron tutorialVidTitle="Ratios" coverImage={ratios}
                                                       imageAlt="1 is to 1" pathname="/coming_soon"/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default AllTopicsTutorials;
