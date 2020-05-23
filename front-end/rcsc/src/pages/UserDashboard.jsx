import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import fire from "../config/Fire";
import GeneralNavbar from "../components/generalNavbar";
import DashboardTool from "../components/dashboardTool";

import "../style-sheet/user-dashboard.css";
class UserDashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <GeneralNavbar />
        <Container fluid={true}>
          <Row>
            <Col md={{ span: 3, offset: 1 }}>
              <h3 style={{ marginTop: "30px" }}> Dashboard </h3>
              <hr />
            </Col>
          </Row>
          <Row>
            <Col md={{ span: 3, offset: 1 }}>
              <DashboardTool />
            </Col>
            <Col md={6} lg={6}>
              <DashboardTool />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default UserDashboard;
