import React from "react";
import GeneralNavigationBar from "../components/generalNavbar";
import { Container, Row, Col } from "react-bootstrap";
import DashboardTool from "../components/dashboardTool";
import "../style-sheet/user-dashboard.css";
import MathJumboBox from "../components/math";
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
          <Col md={1}></Col>
          <Col className='math-jumbo-box' md={3}>
            <MathJumboBox />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default userDashboard;
