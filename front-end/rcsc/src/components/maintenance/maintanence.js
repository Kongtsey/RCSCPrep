import React from "react";
import { Container, Jumbotron, Button } from "react-bootstrap";
import "./maintanence.css";

function Maintanence() {
  return (
    <React.Fragment>
      <Container className={"maintanence-modal"}>
        <Jumbotron>
          <h1 style={{ color: "#f36767" }}>Maintanence</h1>
          <p style={{ fontSize: "large" }}>
            <b>
              Currently undergoing maintanence work.
              <br />
            </b>
          </p>
          <p style={{ textAlign: "center" }}>
            <hr />
            <br />
            <b>Visit us again at 1:00 pm 23rd September. </b>
            <br />
            We apologize for the inconveneince!
          </p>
        </Jumbotron>
      </Container>
    </React.Fragment>
  );
}

export default Maintanence;
