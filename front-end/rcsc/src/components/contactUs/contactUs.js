import React, {useContext} from "react";
import {Container, Col, Row} from "react-bootstrap";
import {AuthContext} from "../authentication";
import {withRouter, Redirect} from 'react-router-dom';
import "./contactUs.css";

function ContactUs() {
    const {currentUser} = useContext(AuthContext);
    if (currentUser != null) {
        return <Redirect to={'/user'}/>
    } else {
        return (
            <React.Fragment>
                <Row>
                    <Col md={12} lg={12} sm={12} xs={12} className='joinUsHeader'>
                        <h3>Contact Us</h3>
                    </Col>
                </Row>
                <Container className='joinUsContainer'>
                    <Row>
                        <Col md={12} lg={12} sm={12} xs={12} className='descripText'>
                            <p>Name</p>
                        </Col>
                    </Row>

                    <Row className='justify-content-center'>
                        <Col md={12} lg={12} sm={12} xs={12} className='contactDetails'>
                            <p>Kongtsey</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12} lg={12} sm={12} xs={12} className='descripText'>
                            <p>Email</p>
                        </Col>
                    </Row>

                    <Row className='justify-content-center'>
                        <Col md={12} lg={12} sm={12} xs={12} className='contactDetails'>
                            <p>kongtsey@gmail.com</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12} lg={12} sm={12} xs={12} className='descripText'>
                            <p>Phone</p>
                        </Col>
                    </Row>

                    <Row className='justify-content-center'>
                        <Col md={12} lg={12} sm={12} xs={12} className='contactDetails'>
                            <p>17949642 OR 17562465</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12} lg={12} sm={12} xs={12} className='descripText'>
                            <p>Address</p>
                        </Col>
                    </Row>

                    <Row className='justify-content-center'>
                        <Col md={12} lg={12} sm={12} xs={12} className='contactDetails lastDetail'>
                            <p>Olakha, Thimphu, Bhutan</p>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    }
}

export default withRouter(ContactUs);
