import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import "../style-sheet/dashboard-tools.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";

function DashboardTool() {
  return (
    <React.Fragment>
      <Row>
        <Col className='tools-title' md={12} lg={12} sm={12}>
          <h5>
            T &nbsp;o &nbsp;o &nbsp;l &nbsp;s &nbsp;&nbsp;&nbsp;
            <FontAwesomeIcon icon={faToolbox} />
          </h5>
        </Col>
        <Col>
          <hr />
        </Col>
      </Row>
      <Row className='tools-sublist'>
        <Col className='tools-sublist-list' md={12} lg={12} sm={12}>
          S T R E N G T H
        </Col>
        <Col className='tools-sublist-list' md={12} lg={12} sm={12}>
          W E A K N E S S
        </Col>
        <Col className='tools-sublist-list' md={12} lg={12} sm={12}>
          P R A C T I C E &nbsp;&nbsp;&nbsp;S E T T I N G
        </Col>
        <Col className='tools-sublist-list' md={12} lg={12} sm={12}>
          D O W N L O A D&nbsp;&nbsp;&nbsp; Q U E S T I O N S
        </Col>
        <Col className='tools-sublist-list' md={12} lg={12} sm={12}>
          R E S E T&nbsp;&nbsp;&nbsp; S T A T S
        </Col>
      </Row>
    </React.Fragment>
  );
}

export default DashboardTool;
