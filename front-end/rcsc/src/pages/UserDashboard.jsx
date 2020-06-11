import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import GeneralNavbar from "../components/generalNavbar";
import DashboardTool from "../components/dashboardTool";
import MathStatsBoard from "../components/mathStatsBoard";
import EnglishStatsBoard from "../components/englishStatsBoard";
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
            </Col>
          </Row>
          <br />

          <Row>
            <Col md={{ span: 3, offset: 1 }}>
              <DashboardTool />
            </Col>
            <Col md={3} lg={3} style={{ background: "gray", color: "white", padding: "10px" }}>
              <MathStatsBoard />
            </Col>
            <Col md={1}></Col>
            <Col md={3} lg={3} style={{ background: "gray", color: "white", padding: "10px" }}>
              <EnglishStatsBoard />
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default UserDashboard;
