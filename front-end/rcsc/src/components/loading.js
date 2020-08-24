import React, { Component } from "react";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/GridLoader";
import "../style-sheet/loading.css";
import { Container, Col, Row } from "react-bootstrap";
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
class Loading extends Component {
  render() {
    return (
      <React.Fragment>
        <Container style={{ width: "100%" }}>
          <Row>
            <Col md={4} className={"loader-in-loading-page"}>
              <div className='sweet-loading'>
                <ClipLoader css={override} size={30} color={"#ffc107"} />
              </div>
              <h1 className='loading-text'>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span id='l'>L</span>
                <span id='o'>O</span>
                <span id='a'>A</span>
                <span id='d'>D</span>
                <span id='i'>I</span>
                <span id='n'>N</span>
                <span id='g'>G</span>
              </h1>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
export default Loading;
