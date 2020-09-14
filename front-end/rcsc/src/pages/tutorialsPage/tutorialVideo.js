import React from "react";
import GeneralNavigationBar from "../../components/generalNavbar";
import {Container, Row, Col} from "react-bootstrap";
import {Redirect, withRouter} from "react-router-dom";
import "./tutorialVideo.css"
import {analytics} from "firebase";

class TutorialVideo extends React.Component {
    constructor(props) {
        super(props);
        this.mapResources = this.mapResources.bind(this);
    }
    mapResources(props, path){
        let relatedResource = props;
        relatedResource = relatedResource.split(',');
        let resourceList;
        if(path==="resource"){
            resourceList = relatedResource.map((resource)=>
                <li><a target="_blank" rel="noopener noreferrer" href={resource}>{resource}</a></li>
            );
        } else {
            resourceList = relatedResource.map((resource)=>
                <li>{resource}</li>
            );
        }
        return (
            <ul className="resourcesList">{resourceList}</ul>
        )
    }
    render() {
        analytics().logEvent('watch_tutorial');
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
                                        Some examples of {this.props.tutorialVidTitle} questions from the RCSC PE past papers: <br/>
                                        {this.mapResources(this.props.location.pastQuestions,"pastQues")}
                                        <br/>
                                        {this.props.location.lastRemark}
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
                                        {this.mapResources(this.props.location.relatedResources, "resource")}
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
