import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "../style-sheet/dashboard-tools.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";

function DashboardTool() {
  return (
    <React.Fragment>
      <Container className='dashboardtool-parent-div'>
        <Row>
          <Col className='tools-title' md={12} lg={12} sm={12}>
            <h5>
              T &nbsp;o &nbsp;o &nbsp;l &nbsp;s &nbsp;&nbsp;&nbsp;
              <FontAwesomeIcon icon={faToolbox} />
              <hr />
            </h5>
          </Col>
        </Row>
        <Row className='tools-sublist'>
          <Col className='tools-sublist-list' md={12} lg={12} sm={12}>
            <a href='fake'>S T R E N G T H </a>
          </Col>
          <Col className='tools-sublist-list' md={12} lg={12} sm={12}>
            <a href='fake'>W E A K N E S S </a>
          </Col>
          <Col className='tools-sublist-list' md={12} lg={12} sm={12}>
            <a href='fake'>P R A C T I C E &nbsp;&nbsp;&nbsp;S E T T I N G </a>
          </Col>
          <Col className='tools-sublist-list' md={12} lg={12} sm={12}>
            <a href='fake'>D O W N L O A D&nbsp; QUESTIONS </a>
          </Col>
          <Col className='tools-sublist-list' md={12} lg={12} sm={12}>
            <a href='fake'>R E S E T&nbsp;&nbsp;&nbsp; S T A T S </a>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default DashboardTool;
