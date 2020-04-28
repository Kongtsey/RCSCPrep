import React from "react";
import GeneralNavigationBar from "../components/generalNavbar";
import { Container, Row, Col } from "react-bootstrap";
import DashboardTool from "../components/dashboardTool";
import "../style-sheet/user-dashboard.css";

function userDashboard() {
  return (
    <React.Fragment>
      <GeneralNavigationBar />
      <Container fluid={true}>
        <Row>
          <Col className='dashboard-tool' md={3}>
            <br />
            <DashboardTool />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default userDashboard;
