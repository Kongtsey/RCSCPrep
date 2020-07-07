import React, { Component } from "react";
import "../style-sheet/forum.css";
import { Container, Col, Row, Form, FormControl, Nav, Navbar, Button, Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";

class ForumComponent extends Component {
  render() {
    return (
      <React.Fragment>
        <Container className={"wholeForumParent"}>
          <Row>
            <Col md={10} lg={10} sm={12} className={"forumSearchBar"}>
              <Form inline>
                <FormControl type='text' placeholder='Search' className={"searchBar"} />
                <Button variant='outline-info'>Search</Button>
              </Form>
            </Col>

            <Col md={10} lg={10} sm={12} className={"forumQuestionParentDiv"}>
              <div className={"userInputDiv"}>
                <span>
                  Phuntsho Norbu <FontAwesomeIcon icon={faToolbox} />
                </span>
                <br />
                <textarea className={"userForumInput"} />
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
          <Row className={"forumPost"}>
            <Col md={12} lg={12} sm={12}>
              <p>
                Automatic organization of documents has become an important research issue since the explosion of digital and online text information. There are mainly two machine learning approaches
                to enhance this task: supervised approach, where pre-defined category labels are assigned to documents based on the likelihood suggested by a training set of labelled documents; and
                unsupervised approach, where there is no need for human intervention or labelled documents at any point in the whole process.
              </p>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
export default ForumComponent;
