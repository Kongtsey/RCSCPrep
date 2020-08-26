import React, { Component } from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/GridLoader";
import "../../style-sheet/loading.css";
import { Container, Col, Row } from "react-bootstrap";
import "./after-sign-up-loading.css";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
class AfterSignUpLoading extends Component {
  // TODO: need to direct the page here once the user signs up instead of the page.
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/user");
    }, 20000);
  }
  render() {
    return (
      <React.Fragment>
        <Container fluid={true} style={{ width: "100%" }} className={"bkg-image"}>
          <Row className={"parent-after-sign-up-loader"}>
            <Col md={6} className={"loader-in-loading-page"}>
              <div className='sweet-loading'>
                <ClipLoader css={override} size={30} color={"#ffc107"} />
              </div>
              <br />
              <h2 style={{ color: "white" }}>We are loading.</h2>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default AfterSignUpLoading;
