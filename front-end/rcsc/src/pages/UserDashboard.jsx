import React, { Component } from "react";
import {Row, Col, Container, Button} from "react-bootstrap";
import GeneralNavbar from "../components/generalNavbar";
import DashboardTool from "../components/dashboardTool";
import MathStatsBoard from "../components/mathStatsBoard";
import EnglishStatsBoard from "../components/englishStatsBoard";
import "../style-sheet/user-dashboard.css";
import {Link} from "react-router-dom";

class UserDashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <GeneralNavbar />
        <Container fluid={true}>
          <Row>
              <Col md={3} className="dboardTool">
                <DashboardTool />
              </Col>
            <Col md={{span:8, offset: 1}}>
              <h3 style={{ marginTop: "30px" }}> Result Summary </h3>
              <br/>
              <hr/>
              <Row>
                <Col md={5} lg={5}>
                  <Row>
                    <Col sm={12} md={12} lg={12} style={{ color: "black", padding: "8px",borderStyle: "solid", borderWidth: "1px", borderColor: "rgba(0,0,0,.3)"
                    }} className="statsBoard">
                      <MathStatsBoard />
                    </Col>
                  </Row>
                  <Row>
                      <Col md={12} lg={12} sm={12} className="justify-content-center">
                        <Link to={"/math_stats_page"} style={{ color: "white" }}>
                          <Button size="lg" block className="practiceButtons">Practice Math</Button>
                        </Link>
                      </Col>
                  </Row>
                </Col>
                <Col md={{span:5, offset:1}} lg={{span:5, offset:1}}>
                  <Row>
                    <Col sm={12} md={12} lg={12} style={{ color: "black", padding: "8px",borderStyle: "solid", borderWidth: "1px", borderColor: "rgba(0,0,0,.3)"
                    }} className="statsBoard">
                      <EnglishStatsBoard />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} lg={12} sm={12} className="justify-content-center">
                      <Link to={"/english_practice"} style={{ color: "white" }}>
                        <Button size="lg" block className="practiceButtons">Practice English</Button>
                      </Link>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
          <br />
        </Container>
      </React.Fragment>
    );
  }
}

export default UserDashboard;
