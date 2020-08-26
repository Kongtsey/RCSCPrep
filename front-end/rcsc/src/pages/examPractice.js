import React from "react";
import { withRouter } from "react-router-dom";
import "../style-sheet/exam-practice.css";
import { Container, Col, Row } from "react-bootstrap";
import GeneralNavbar from "../components/generalNavbar";

// import ReadExamPracticeMath from "../components/readExamPracticeMath";
// import ReadExamPracticeEnglish from "../components/readExamPracticeEnglish";
// import ReadExamPracticeDzongkha from "../components/readExamPracticeDzongkha";
// import ReadExamPracticeData from "../components/readExamPracticeData";
// import PracticeExamResult from "../components/sign-up-exam-result/PracticeExamResult";
// import SignUpExamResult from "../components/exam-on-sign-up/exam-on-sign-up-result";
// import $ from "jquery";

class ExamPractice extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     showResult: false,
  //     showPieChart: false,
  //   };
  //   this.handleDisplay = this.handleDisplay.bind(this);
  //   this.handleTable = this.handleTable.bind(this);
  //   this.closeTable = this.closeTable.bind(this);
  //   this.showReview = this.showReview.bind(this);
  //   this.changeShowResult = this.changeShowResult.bind(this);
  //   this.showFinalResult = this.showFinalResult.bind(this);
  //   this.closeResultTable = this.closeResultTable.bind(this);
  // }
  // closeTable = () => () => {
  //   $(".review-confirmation").css("display", "none");
  //   $(".exam-question-display").css("opacity", 1);
  // };
  // showReview = () => () => {
  //   $(".review-confirmation").css("display", "block");
  //   $(".exam-question-display").css("opacity", 0.1);
  // };
  // handleDisplay = (subject_name) => () => {
  //   // This highlights the border-bottom and the color of the text.
  //   $(".tabs").removeClass("active");
  //   $(".tab-header #" + subject_name).addClass("active");
  //   $(".subjects-parent .subject").removeClass("subject-active");
  //   $(".subjects-parent #" + subject_name).addClass("subject-active");
  // };
  // handleTable = (subject_name) => () => {
  //   //console.log(id_name);
  //   // This highlights the border-bottom and the color of the text.
  //   $(".table-tabs").removeClass("active");
  //   $(".table-tab-header #" + subject_name).addClass("active");
  //   $(".table-subjects-parent .table-subject").removeClass("table-subject-active");
  //   $(".table-subjects-parent #" + subject_name).addClass("table-subject-active");
  // };
  // changeShowResult = () => () => {
  //   $(".review-confirmation").css("display", "none");
  //   $(".exam-question-display").css("opacity", 1);
  //   $(":radio").attr("disabled", true);
  //   this.setState({ showResult: true });
  // };
  // showFinalResult = () => () => {
  //   this.setState({
  //     showPieChart: true,
  //   });
  //   $(".exam-question-display").css("opacity", 0.1);
  //   $(".end-result").css("display", "block");
  // };
  // closeResultTable = () => () => {
  //   $(".exam-question-display").css("opacity", 1);
  //   $(".end-result").css("display", "none");
  // };
  // render() {
  //   return (
  //     <React.Fragment>
  //       {<GeneralNavbar />}
  //       <Container>
  //         <br />
  //         <Row>
  //           <h3> Practice Exam </h3>
  //           <hr />
  //         </Row>
  //         <br />
  //         {/* --------------------------------------------------------------------------------------------- */}
  //         {/* T H I S   I S   F O R   T H E   R E S U L T   T A B L E.   */}
  //         {/* --------------------------------------------------------------------------------------------- */}
  //         <Container className={"end-result"}>
  //           {this.state.showPieChart ? <SignUpExamResult /> : ""}
  //           <div style={{ paddingLeft: "15px" }}>
  //             <Button onClick={this.closeResultTable()}> Close X </Button>
  //           </div>
  //         </Container>
  //         {/* --------------------------------------------------------------------------------------------- */}
  //         {/* T H I S   I S   F O R   T H E   R E V I E W   T A B .   */}
  //         {/* --------------------------------------------------------------------------------------------- */}
  //         <Container className={"review-confirmation"}>
  //           <Row>
  //             <Col md={"6"}>
  //               <h6> &nbsp; Review </h6>
  //             </Col>
  //             <Col md={"6"} className={"close-parent"}>
  //               <Button className={"close-tab"} onClick={this.closeTable()}>
  //                 Close X
  //               </Button>
  //             </Col>
  //             <hr />
  //           </Row>
  //           <Row className={"table-tab-header"}>
  //             <Col md={1} id={"table-math"} className={"table-tabs active"}>
  //               <button onClick={this.handleTable("table-math")}>Math</button>
  //             </Col>
  //             <Col md={1} id={"table-english"} className={"table-tabs"}>
  //               <button onClick={this.handleTable("table-english")}>English</button>
  //             </Col>
  //             <Col md={1} id={"table-dzongkha"} className={"table-tabs"}>
  //               <button onClick={this.handleTable("table-dzongkha")}>Dzongkha</button>
  //             </Col>
  //             <Col md={2} id={"table-data"} className={"table-tabs"}>
  //               <button onClick={this.handleTable("table-data")}>Data Interpretation</button>
  //             </Col>
  //           </Row>
  //           <br /> <br />
  //           <Row className={"table-subjects-parent"}>
  //             <Col md={12}>
  //               <div id={"table-math"} className={"table-subject table-subject-active"}>
  //                 <PracticeExamResult subject={"Math"} />
  //               </div>
  //             </Col>
  //             <Col md={12}>
  //               <div id={"table-english"} className={"table-subject"}>
  //                 <PracticeExamResult subject={"English"} />
  //               </div>
  //             </Col>
  //             <Col md={12}>
  //               <div id={"table-dzongkha"} className={"table-subject"}>
  //                 <PracticeExamResult subject={"Dzongkha"} />
  //               </div>
  //             </Col>
  //             <Col md={12}>
  //               <div id={"table-data"} className={"table-subject"}>
  //                 <PracticeExamResult subject={"Data"} />
  //               </div>
  //             </Col>
  //           </Row>
  //           <Row>
  //             <Col md={"3"}>
  //               <span> Are you sure you want to submit? </span>
  //             </Col>
  //             <Col md={"2"} className={"parent-table-submit-exam"}>
  //               <Button variant='danger' className={"table-submit-exam"} onClick={this.changeShowResult()}>
  //                 Submit
  //               </Button>
  //             </Col>
  //           </Row>
  //         </Container>
  //         {/* --------------------------------------------------------------------------------------------- */}
  //         {/*  T H I S   I S   F O R   T H E   S U B J E C T S   T A B S   O N   T H E   T O P .            */}
  //         {/* --------------------------------------------------------------------------------------------- */}
  //         <Container className={"exam-question-display"}>
  //           <Row className={"tab-header"}>
  //             <Col md={2} id={"math"} className={"tabs active"}>
  //               <button onClick={this.handleDisplay("math")}>Math</button>
  //             </Col>
  //             <Col md={2} id={"english"} className={"tabs"}>
  //               <button onClick={this.handleDisplay("english")}>English</button>
  //             </Col>
  //             <Col md={2} id={"dzongkha"} className={"tabs"}>
  //               <button onClick={this.handleDisplay("dzongkha")}>Dzongkha</button>
  //             </Col>
  //             <Col md={3} id={"data"} className={"tabs"}>
  //               <button onClick={this.handleDisplay("data")}>Data Interpretation</button>
  //             </Col>
  //             <Col md={2}>
  //               {this.state.showResult ? (
  //                 <Button variant='danger' id={"sign-up-exam-result"} className={"submit-exam"} onClick={this.showFinalResult()}>
  //                   Result
  //                 </Button>
  //               ) : (
  //                 <Button variant='success' className={"submit-exam"} onClick={this.showReview()}>
  //                   Review
  //                 </Button>
  //               )}
  //             </Col>
  //           </Row>
  //           <br /> <br />
  //           {/* --------------------------------------------------------------------------------------------- */}
  //           {/* T H I S   I S   F O R   T H E   D I S P L A Y I N G   O F   T H E   A C T U A L   Q U E S T I O N S .   */}
  //           {/* --------------------------------------------------------------------------------------------- */}
  //           <Row className={"subjects-parent"}>
  //             <div id={"math"} className={"subject subject-active"}>
  //               <ReadExamPracticeMath showResult={this.state.showResult} />
  //             </div>
  //             <div id={"english"} className={"subject"}>
  //               <ReadExamPracticeEnglish showResult={this.state.showResult} />
  //             </div>
  //             <div id={"dzongkha"} className={"subject"}>
  //               <ReadExamPracticeDzongkha showResult={this.state.showResult} />
  //             </div>
  //             <div id={"data"} className={"subject"}>
  //               <ReadExamPracticeData showResult={this.state.showResult} />
  //             </div>
  //           </Row>
  //         </Container>
  //       </Container>
  //     </React.Fragment>
  //   );
  // }
  render() {
    return (
      <React.Fragment>
        <GeneralNavbar />
        <Container className={"temporary-exam-conatiner"} fluid={true}>
          <Row>
            <Col md={12} style={{ marginTop: "100px" }}>
              <p style={{ color: "white" ,fontSize: "10vh", textAlign: "center" }}> COMING </p>
            </Col>
            <Col md={12}>
              <p style={{color: "white" ,fontSize: "15vh", textAlign: "center" }}> SOON </p>
            </Col>
            <Col md={12}>
              <p style={{ color: "white" ,fontSize: "4vh", textAlign: "center" }}> in about a week . . .</p>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}

export default withRouter(ExamPractice);
