import React from "react";
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import "./feedbackForm.css"
import {auth,firestore} from "firebase"

class FeedbackForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            // goal: '',
            // hasAchieved: '',
            recommend: '',
            // recommendReason: '',
            // hearing: '',
            comments: '',
            errorMessage: false,
            formSubmitted: false,
        }
    }

    componentDidMount() {
        this.setState({
            formSubmitted: false,
        })
    }

    handleChange(e) {
        this.setState({[e.target.name]: [e.target.value].toString()});
        // console.log(this.state.goal)
        // console.log(this.state.hasAchieved)
        // console.log(this.state.recommend)
        // console.log(this.state.recommendReason)
        // console.log(this.state.hearing)
        // console.log(this.state.comments)
    }

    handleSubmit(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        if (this.state.recommend !== '') {
            let user = auth().currentUser;
            let userID = user.uid;
            let userEmail = user.email;
            let userName = user.displayName;
            this.setState({errorMessage: false})
            let feedback = {
                userID: userID,
                userEmail: userEmail,
                userName: userName,
                // reasonToUse: this.state.goal,
                // hasReasonAchieved: this.state.hasAchieved,
                wouldRecommend: this.state.recommend,
                // recommendationReason: this.state.recommendReason,
                // discovery: this.state.hearing,
                suggestions: this.state.comments,
            }
            // console.log(userID,userEmail,userName);
            let db = firestore();
            db.collection('Feedback').doc().set(feedback);
            this.setState({
                goal: '',
                // hasAchieved: '',
                recommend: '',
                recommendReason: '',
                // hearing: '',
                comments: '',
                formSubmitted: true,
            })
        }
        else{
            this.setState({errorMessage: true});
        }
    }

    render() {
        return (
            <React.Fragment>
                <Container>
                    <Row>
                        <Col xs={12}>
                            <Form>
                                {this.state.formSubmitted && <p className='feedbackSubmitSuccess'>
                                    Feedback submitted thank you for taking your time!
                                </p>}
                                {this.state.errorMessage && <p className='requiredField'>
                                    Reason to recommend or not required!!
                                </p>}
                                {/*<Form.Group controlId='feedbackForm.ControlTextArea1'>*/}
                                {/*    <Form.Label className='feedbackFormLabel'>What did you hope to achieve from using*/}
                                {/*        our website?</Form.Label>*/}
                                {/*    <Form.Control as="textarea" rows="3" placeholder="Enter text here ..." name='goal'*/}
                                {/*                  value={this.state.goal} onChange={this.handleChange}/>*/}
                                {/*</Form.Group>*/}
                                {/*<Form.Group controlId='feedbackForm.ControlTextArea2'>*/}
                                {/*    <Form.Label className='feedbackFormLabel'>Did you achieve your goal? More detail the*/}
                                {/*        better. </Form.Label>*/}
                                {/*    <Form.Control as='textarea' rows='3' placeholder='Enter text here ...'*/}
                                {/*                  name='hasAchieved' value={this.state.hasAchieved}*/}
                                {/*                  onChange={this.handleChange}/>*/}
                                {/*</Form.Group>*/}
                                <Form.Group controlId='feedbackForm.recommendRadio' onChange={this.handleChange}>
                                    <Form.Label className='feedbackFormLabel'>Would you recommend Kongtsey to a
                                        friend?<span className='requiredField'>**</span></Form.Label>
                                    {["radio"].map((type) => (
                                        <div key={`default-${type}`} className='mb-3'>
                                            <Row>
                                                <Col sm={4}>
                                                    <Form.Check inline type={type} name='recommend'
                                                                label='Its wack, I would rather not.'
                                                                value='NO'
                                                    />
                                                </Col>
                                                <Col sm={4}>
                                                    <Form.Check inline type={type} name='recommend'
                                                                label='Um if there were more features, I would love to'
                                                                value='yes with more features'/>
                                                </Col>
                                                <Col sm={4}>
                                                    <Form.Check inline type={type} name='recommend'
                                                                label='Hell Yeah! Would Recommend 100%'
                                                                value='YES!'
                                                    />
                                                </Col>
                                            </Row>
                                        </div>
                                    ))}
                                </Form.Group>
                                {/*<Form.Group controlId='feedbackForm.RecommendText'>*/}
                                {/*    <Form.Label className='feedbackFormLabel'>If you answered the above question why or*/}
                                {/*        why would you not recommend Kongtsey?</Form.Label>*/}
                                {/*    <Form.Control as='textarea' rows='3' placeholder='Enter text here ...'*/}
                                {/*                  name='recommendReason' value={this.state.recommendReason}*/}
                                {/*                  onChange={this.handleChange}/>*/}
                                {/*</Form.Group>*/}
                                {/*<Form.Group controlId='feedbackForm.Hearing'>*/}
                                {/*    <Form.Label className='feedbackFormLabel'>How did you hear about us?</Form.Label>*/}
                                {/*    <Form.Control as='textarea' name='hearing' value={this.state.hearing} rows='3'*/}
                                {/*                  placeholder='Enter text here ...' onChange={this.handleChange}/>*/}
                                {/*</Form.Group>*/}
                                <Form.Group controlId='feedbackForm.Comments'>
                                    <Form.Label className='feedbackFormLabel'>Any suggestions? Eg: new features you
                                        want, bugs you encountered etc ...</Form.Label>
                                    <Form.Control as='textarea' rows='3' placeholder='Enter text here ...'
                                                  name='comments' value={this.state.comments}
                                                  onChange={this.handleChange}/>
                                </Form.Group>
                                <Button variant='primary' type='submit' className='feedbackFormSubmit'
                                        onClick={this.handleSubmit}>
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
