import React, { Component } from "react";
import "../style-sheet/forum.css";
import { Container, Col, Row, Form, FormControl, Nav, Navbar, Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";

class ForumComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Container fluid={true} className={"wholeForumParent"}>
          <Row>
            <Col md={{ size: 6, offset: 1 }} lg={6} sm={12} className={"forumSearchBar"}>
              <Form inline>
                <FormControl type='text' placeholder='Search' className={"searchBar"} />
                <Button variant='outline-info'>Search</Button>
              </Form>
            </Col>

            <Col md={{ size: 6, offset: 1 }} lg={7} sm={12} className={"forumQuestionParentDiv"}>
              <div className={"userInputDiv"}>
                <span>
                  Phuntsho Norbu <FontAwesomeIcon icon={faToolbox} />
                </span>
                <br />
                <input className={"userForumInput"} />
                <Button className={"postButton"}>Post</Button>
              </div>
            </Col>
            <Col md={2} lg={2} sm={12} className={"posterInfo"}>
              <h5>Top Users: </h5>
              <ol className={"topUserNames"}>
                <li>Phuntsho Norbu</li>
                <li>Sonam Norbu</li>
                <li>Kezang Norbu</li>
              </ol>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
export default ForumComponent;
