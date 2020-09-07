import React from "react";
import {Row, Col} from "react-bootstrap";
import Pattern from "../../images/tutorialImageCovers/pattern.jpg"
import "./TutorialJumbotron.css"
import {Link} from "react-router-dom";

class TutorialJumbotron extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Row>
                    <Col lg={10} className="jumbotronNotMetaContainer">
                        <div className="">
                            <Row className="justify-content-center">
                                <Col xs={12} lg={12} className="jumbotronImageContainer">
                                    <Link to={{
                                        pathname: this.props.pathname,
                                        tutorialVidTitle: this.props.tutorialVidTitle,
                                        vidSrc: this.props.vidSrc,
                                        relatedResources: this.props.relatedResources,
                                        tutorialDescrip: this.props.tutorialDescrip,
                                        vidTitle: this.props.vidTitle
                                    }}>
                                        <img src={this.props.coverImage || "insert image"} className="topicImage" alt={this.props.imageAlt||"insert img alt"}/>
                                    </Link>
                                </Col>
                            </Row>
                            <Row className="justify-content-center">
                                <Col xs={12} lg={12} className="jumbotronTextContainer">
                                    <Link to={{
                                        pathname: this.props.pathname,
                                        tutorialVidTitle: this.props.tutorialVidTitle,
                                        vidSrc: this.props.vidSrc,
                                        relatedResources: this.props.relatedResources,
                                        tutorialDescrip: this.props.tutorialDescrip,
                                        vidTitle: this.props.vidTitle
                                    }}>
                                        <h5> Solving Patterns </h5>
                                    </Link>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </React.Fragment>
        )
    }
}

export default TutorialJumbotron
