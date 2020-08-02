import React from "react";
import { Container,Col,Row } from "react-bootstrap";

import "./perksInUsin.css"

import weakness from "../../images/homePage/weakness-final.png"
import easyReview from "../../images/homePage/easy-final.png"
import examFinal from "../../images/homePage/exam-final.png"
import stats from "../../images/homePage/stats-final.png"
import category from "../../images/homePage/category-final.png"
import history from "../../images/homePage/history-final.png"

class PerksInUsing extends React.Component{
    render() {
        return(
            <Container fluid={true} className="perksInUsingContainer">
                <Row>
                    <Col sm={6}>
                        <Row style={{marginTop: "45px"}}>
                            <Col sm={4} className="perksIconsContainer">
                                <img src={weakness} className="perksIcons"/>
                            </Col>
                            <Col sm={4} className="perksIconsContainer">
                                <img src={examFinal} className="perksIcons"/>
                            </Col>
                            <Col sm={4} className="perksIconsContainer">
                                <img src={stats} className="perksIcons"/>
                            </Col>
                        </Row>
                        <Row style={{marginBottom: "80px"}}>
                            <Col sm={4} className="perksIconsContainer">
                                <img src={easyReview} className="perksIcons"/>
                            </Col>
                            <Col sm={4} className="perksIconsContainer">
                                <img src={category} className="perksIcons"/>
                            </Col>
                            <Col sm={4} className="perksIconsContainer">
                                <img src={history} className="perksIcons"/>
                            </Col>
                        </Row>
                    </Col>
                    <Col sm={6} className="perksDescription" style={{marginTop: "80px"}}>
                        <Row>
                            <Col sm={10} className="perksDescription">
                                RCSC Prep makes it easy for you to study at your own pace and at your own time. Our feedback is personalized to your performance and helps you find your weaknesses and your strengths.
                                RCSC Prep also has features that make you be able to take control of when you want to study and is tailor made just for you. You can also choose to focus on what you lack rather than
                                just going along with the classroom, in a sense RCSC Prep is what allows you to make this education a 21st century education and the best part is that its completely free.
                            </Col>
                        </Row>

                    </Col>
                </Row>
            </Container>
        )
    }
}

export default PerksInUsing;