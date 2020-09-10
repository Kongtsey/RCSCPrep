import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import GeneralNavBar from "../../components/generalNavbar";
import FeedbackForm from "../../components/feedbackForm/feedbackForm";
import "./feedbackPage.css";

class FeedbackPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <GeneralNavBar/>
                <Container fluid={true}>
                    <Row>
                        <Col md={{span: 10, offset: 1}}>
                            <Row>
                                <Col xs={12}>
                                    <h3 style={{marginTop: '30px'}}>
                                        Feedback
                                    </h3>
                                    <p className='feedbackDescrip'>
                                        Your feedback matters and greatly helps us in improving our website for you and
                                        for
                                        others.<br/>
                                        We would be very grateful if we could take just 5 minutes of your time to complete this small survey. <span role="img" aria-label="heart">💛</span>
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
