import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import GeneralNavBar from "../../components/generalNavbar";
import DashboardTool from "../../components/dashboardTool";
import FeedbackForm from "../../components/feedbackForm/feedbackForm";
import "./feedbackPage.css";

class FeedbackPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <GeneralNavBar/>
                <Container fluid={true}>
                    <Row>
                        <Col md={3} className='dboardTool'>
                            <DashboardTool/>
                        </Col>
                        <Col md={{span: 8, offset: 1}}>
                            <Row>
                                <Col xs={12}>
                                    <h3 style={{marginTop: '30px'}}>
                                        Feedback
                                    </h3>
                                    <p className='feedbackDescrip'>
                                        Your feedback matters and greatly helps us in improving our website for you and
                                        for
                                        others.<br/>
                                        So please take just 5 minutes of your time to help complete this small survey.
                                    </p>
                                    <hr/>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={10} className='feedbackTextAreas'>
                                    <FeedbackForm/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default FeedbackPage;
