import React from "react";
import GeneralNavigationBar from "../../components/generalNavbar";
import {Container, Row, Col} from "react-bootstrap";
import TutorialJumbotron from "../../components/TutorialJumbotrons/TutorialJumbotron";
import SimpleAlgebra from "../../images/tutorialImageCovers/simpleAlgebra.png"
import "./allTopicsTutorial.css";
import solvingPatterns from "../../images/tutorialImageCovers/pattern.png"
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
                            <Row>
                                <Col lg={4} className="jumbotronContainer">
                                    <TutorialJumbotron imageAlt="golden ratio, fractals" coverImage={solvingPatterns}
                                                       pathname="/tutorial_videos/solving_patterns"
                                                       tutorialVidTitle="Solving Patterns"
                                                       vidSrc="://www.youtube.com/embed/0Ip6-mUSOZo"
                                                       relatedResources="khanacademy.com,udemy.com,examveda.com"
                                                       tutorialDescrip=" Solving patterns is basically all questions that relate to finding a pattern    within a question. These type of questions are very common in the RCSC PE and has come up atleast once in the past 5 RCSC papers. These are usually easy to solve and also have a set direction you can follow. Some of eg questions are: find next letter in series: A D B C D B __"
                                                       vidTitle="Solving patterns video"/>
                                </Col>
                                <Col lg={4} className="jumbotronContainer">
                                    <TutorialJumbotron tutorialVidTitle="Simple Algebra" coverImage={SimpleAlgebra} imageAlt="chalkboard math"/>
                                </Col>
                                <Col lg={4} className='jumbotronContainer'>
                                    <TutorialJumbotron tutorialVidTitle="Solving Comparisons" coverImage={comparisons} imageAlt="weighing scale"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4} className='jumbotronContainer2nd'>
                                    <TutorialJumbotron tutorialVidTitle="Directional Problems" coverImage={directions} imageAlt="pointers"/>
                                </Col>
                                <Col lg={4} className='jumbotronContainer2nd'>
                                    <TutorialJumbotron tutorialVidTitle="Basic Fractions" coverImage={fractions} imageAlt="pizza slices"/>
                                </Col>
                                <Col lg={4} className='jumbotronContainer2nd'>
                                    <TutorialJumbotron tutorialVidTitle="General Knowledge" coverImage={gk} imageAlt="uni and Books"/>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4} className='jumbotronContainer3rd'>
                                    <TutorialJumbotron tutorialVidTitle="Logic" coverImage={logic} imageAlt="brain functioning"/>
                                </Col>
                                <Col lg={4} className="jumbotronContainer3rd">
                                    <TutorialJumbotron tutorialVidTitle="Percentages" coverImage={percentages} imageAlt="25%"/>
                                </Col>
                                <Col lg={4} className='jumbotronContainer3rd'>
                                    <TutorialJumbotron tutorialVidTitle="Ratios" coverImage={ratios} imageAlt="1 is to 1"/>
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
