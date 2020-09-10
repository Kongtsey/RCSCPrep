import React from "react";
import GeneralNavigationBar from "../../components/generalNavbar";
import {Container, Row, Col} from "react-bootstrap";
import {Redirect, withRouter} from "react-router-dom";
import "./tutorialVideo.css"

class TutorialVideo extends React.Component {
    constructor(props) {
        super(props);
        this.mapResources = this.mapResources.bind(this);
    }
    mapResources(){
        let relatedResource = this.props.location.relatedResources;
        relatedResource = relatedResource.split(',');
        let resourceList = relatedResource.map((resource)=>
            <li><a target="_blank" rel="noopener noreferrer" href={resource}>{resource}</a></li>
        );
        return (
            <ul className="resourcesList">{resourceList}</ul>
        )
    }
    render() {
        if (typeof this.props.location.tutorialVidTitle !== "undefined" || typeof this.props.location.vidSrc !== "undefined") {
            return (
                <div>
                    <GeneralNavigationBar/>
                    <Container>
                        <Row>
                            <Col xs={12}>
                                <h3 style={{marginTop: "30px"}}>{this.props.location.tutorialVidTitle || "Insert Title"}</h3>
                                <br/>
                                <hr/>
                                <Row>
                                    <Col xs={12} lg={10}>
                                    <span className='tutorialQuesDescription'>
                                        {this.props.location.tutorialDescrip||"insert tutorial description"}
                                    </span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} className="pastInfoContainer">
                                        Some examples of solving patterns questions from the RCSC: <br/>
                                        <ol className='pastQuestions'>
                                            <li>What is the missing letter in this series: g ? d i j d k l d</li>
                                            <li>What is the missing letter in this series: a z b ? c x</li>
                                            <li>If: 2, 3 = 10 7, 2 = 63 6, 5 = 66 8 ,4 = 96 9 ,7 =…….</li>
                                        </ol>
                                        The question we will be solving in the video is: What is the missing letter in the series: A F D I G L J ___
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} className="tutorialVideoContainer">
                                        <iframe width="560" height="315" src={this.props.location.vidSrc}
                                                frameBorder="0" title={this.props.location.vidTitle||"Insert vide title"}
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope;picture-in-picture"
                                                allowFullScreen/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <h5 style={{marginTop: "40px"}}>Related Resources</h5>
                                        <hr/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        {this.mapResources()}
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        }
        else {
            return <Redirect to='/tutorial_videos'/>
        }
    }
}

export default withRouter(TutorialVideo);
