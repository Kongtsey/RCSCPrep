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
                                                       vidTitle="Solving patterns video"/>
                                </Col>
                                <Col xs={10} lg={4} className="jumbotronContainer">
                                    <TutorialJumbotron tutorialVidTitle="Simple Algebra" coverImage={SimpleAlgebra}
                                                       imageAlt="chalkboard math" pathname="/coming_soon"/>
                                </Col>
                                <Col xs={10} lg={4} className='jumbotronContainer'>
                                    <TutorialJumbotron tutorialVidTitle="Solving Comparisons" coverImage={comparisons}
                                                       imageAlt="weighing scale" pathname="/coming_soon"/>
                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <Col xs={10} lg={4} className='jumbotronContainer2nd'>
                                    <TutorialJumbotron tutorialVidTitle="Directional Problems" coverImage={directions}
                                                       imageAlt="pointers" pathname="/coming_soon"/>
                                </Col>
                                <Col xs={10} lg={4} className='jumbotronContainer2nd'>
                                    <TutorialJumbotron tutorialVidTitle="Basic Fractions" coverImage={fractions}
                                                       imageAlt="pizza slices" pathname="/coming_soon"/>
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
