import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import GeneralNavbar from "../components/generalNavbar";
import MathStatsBoard from "../components/mathStatsBoard";
import EnglishStatsBoard from "../components/englishStatsBoard";
import "../style-sheet/user-dashboard.css";
import { Link } from "react-router-dom";
// import Maintanence from "../components/maintenance/maintanence";

class UserDashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <GeneralNavbar/>
        {/*<Maintanence/>*/}
        <Container>
          <Row>
            <Col md={12}>
              <h3 style={{ marginTop: "30px" }}> Result Summary </h3>
              <br />
              <hr />
              <Row>
                <Col md={5} lg={5}>
                  <Row>
                    <Col
                      sm={12}
                      md={12}
                      lg={12}
                      style={{
                        padding: "20px",
                        borderRadius: "10px",
                        background: "linear-gradient(145deg, #ffffff, #e6e6e6)",
                        boxShadow: "9px 9px 30px #d9d9d9, -9px -9px 30px #ffffff",
                        transition: "300ms linear ease-in",
                      }}
                      className='statsBoard'
                    >
                      <MathStatsBoard />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} lg={12} sm={12} className='justify-content-center'>
                      <Link to={"/math_stats_page"} style={{ color: "white" }}>
                        <Button size='lg' block className='practiceButtons'>
                          Practice Math
                        </Button>
                      </Link>
                    </Col>
                  </Row>
                </Col>
                <Col md={{ span: 5, offset: 2 }} lg={{ span: 5, offset: 2 }}>
                  <Row>
                    <Col
                      sm={12}
                      md={12}
                      lg={12}
                      style={{
                        padding: "20px",
                        borderRadius: "10px",
                        background: "linear-gradient(145deg, #ffffff, #e6e6e6)",
                        boxShadow: "9px 9px 30px #d9d9d9, -9px -9px 30px #ffffff",
                        transition: "300ms linear ease-in",
                      }}
                      className='statsBoard'
                    >
                      <EnglishStatsBoard />
                    </Col>
                  </Row>
                  <Row>
                    <Col md={12} lg={12} sm={12} className='justify-content-center'>
                      <Link to={"/english_stats_page"} style={{ color: "white" }}>
                        <Button size='lg' block className='practiceButtons'>
                          Practice English
                        </Button>
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
