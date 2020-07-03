import React, { useContext } from "react";
import { Redirect, withRouter } from "react-router-dom";
import GeneralNavbar from "../components/generalNavbar";
import {Row, Col, Container} from "react-bootstrap";
import { AuthContext } from "../components/authentication";
// import CorrectWrong from "../components/pieChartData";
import MathStatsBoard from "../components/mathStatsBoard";
import SelectionQueries from "../components/selection";
import "../style-sheet/mathStatsPage.css"

function MathLoader() {
    const { currentUser } = useContext(AuthContext);
    if (currentUser != null) {
        return (
            <React.Fragment>
                <GeneralNavbar />
                <Container fluid={true}>
                    <Row className="divParent">
                        <Col sm={3} className="pieChart">
                            {<MathStatsBoard/>}
                        </Col>
                        <Col sm={{span:7, offset:1}} className="selections">
                            <Row>
                                {<SelectionQueries type="Math"/>}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
        );
    } else {
        return <Redirect to='/' />;
    }
}
export default withRouter(MathLoader);