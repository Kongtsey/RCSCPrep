import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import "./feedbackForm.css"

class FeedbackForm extends React.Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <Form>
                                <Form.Group controlId='feedbackForm.ControlTextArea1'>
                                    <Form.Label className='feedbackFormLabel'>What did you hope to achieve from using
                                        our website?</Form.Label>
                                    <Form.Control as="textarea" rows="3" placeholder="Enter text here ..."/>
                                </Form.Group>
                                <Form.Group controlId='feedbackForm.ControlTextArea2'>
                                    <Form.Label className='feedbackFormLabel'>Did you achieve your goal? More detail the
                                        better. </Form.Label>
                                    <Form.Control as='textarea' rows='3' placeholder='Enter text here ...'/>
                                </Form.Group>
                                <Form.Group controlId='feedbackForm.recommendRadio'>
                                    <Form.Label className='feedbackFormLabel'>Would you recommend Kongtsey to a
                                        friend?</Form.Label>
                                    {["radio"].map((type) => (
                                        <div key={`default-${type}`} className='mb-3'>
                                            <Row>
                                                <Col sm={4}>
                                                    <Form.Check inline type={type} name='category'
                                                                label='Its wack, I would rather not.' id='any'
                                                                />
                                                </Col>
                                                <Col sm={4}>
                                                    <Form.Check inline type={type} name='category'
                                                                label='Um if there were more features, I would love to'
                                                                id='any'/>
                                                </Col>
                                                <Col sm={4}>
                                                    <Form.Check inline type={type} name='category'
                                                                label='Hell Yeah! Would Recommend 100%' id='any'
                                                                />
                                                </Col>
                                            </Row>{/*<Form.Check type={type} name='category' id={this.state.categoryOptions.category4} label={this.state.categoryOptions.category4} />*/}
                                        </div>
                                    ))}
                                </Form.Group>
                                <Form.Group controlId='feedbackForm.RecommendText'>
                                    <Form.Label className='feedbackFormLabel'>If you answered the above question why or why would you not recommend Kongtsey?</Form.Label>
                                    <Form.Control as='textarea' rows='3' placeholder='Enter text here ...'/>
                                </Form.Group>
                                <Form.Group controlId='feedbackForm.Hearing'>
                                    <Form.Label className='feedbackFormLabel'>How did you hear about us?</Form.Label>
                                    <Form.Control as='textarea' rows='3' placeholder='Enter text here ...'/>
                                </Form.Group>
                                <Form.Group controlId='feedbackForm.Comments'>
                                    <Form.Label className='feedbackFormLabel'>Any other comments? Eg: new features you want, bugs you encountered etc ...</Form.Label>
                                    <Form.Control as='textarea' rows='3' placeholder='Enter text here ...'/>
                                </Form.Group>
                                <Button variant='primary' type='submit' className='feedbackFormSubmit'>
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        )
    }
}

export default FeedbackForm;
