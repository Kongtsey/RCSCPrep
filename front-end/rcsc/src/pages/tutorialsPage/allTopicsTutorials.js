import React from "react";
import GeneralNavigationBar from "../../components/generalNavbar";
import {Container, Row,Col} from "react-bootstrap";
import TutorialJumbotron from "../../components/TutorialJumbotrons/TutorialJumbotron";
import "./allTopicsTutorial.css";
import solvingPatterns from "../../images/tutorialImageCovers/pattern.jpg"
class AllTopicsTutorials extends React.Component {
    render() {
        return (
            <React.Fragment>
                <GeneralNavigationBar />
                <Container>
                    <Row>
                        <Col xs={12}>
                            <h3 style={{ marginTop: "30px" }}>Tutorial Videos</h3>
                            <br/>
                            <hr/>
                            <Row>
                                <Col lg={4} className="jumbotronContainer">
                                    <TutorialJumbotron imageAlt="golden ratio, fractals" coverImage={solvingPatterns} pathname="/tutorial_videos/solving_patterns" tutorialVidTitle="Solving Patterns" vidSrc="https://www.youtube.com/embed/0Ip6-mUSOZo" relatedResources="khanacademy.com,udemy.com,examveda.com" tutorialDescrip=" Solving patterns is basically all questions that relate to finding a pattern    within a question. These type of questions are very common in the RCSC PE and has come up atleast once in the past 5 RCSC papers. These are usually easy to solve and also have a set direction you can follow. Some of eg questions are: find next letter in series: A D B C D B __" vidTitle="Solving patterns video"/>
                                </Col>
                                <Col lg={4} className="jumbotronContainer">
                                    <TutorialJumbotron/>
                                </Col>
                                <Col lg={4} className='jumbotronContainer'>
                                    <TutorialJumbotron/>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4} className='jumbotronContainer2nd'>
                                    <TutorialJumbotron/>
                                </Col>
                                <Col lg={4} className='jumbotronContainer2nd'>
                                    <TutorialJumbotron/>
                                </Col>
                                <Col lg={4} className='jumbotronContainer2nd'>
                                    <TutorialJumbotron/>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg={4} className='jumbotronContainer3rd'>
                                    <TutorialJumbotron/>
                                </Col>
                                <Col lg={4} className="jumbotronContainer3rd">
                                    <TutorialJumbotron/>
                                </Col>
                                <Col lg={4} className='jumbotronContainer3rd'>
                                    <TutorialJumbotron/>
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
