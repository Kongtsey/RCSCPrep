import React from "react";
import SignUpExamResult from "../components/exam-on-sign-up/exam-on-sign-up-result";
import GeneralNavigationBar from "../components/generalNavbar";
class ExamPieChartPage extends React.Component{
    render() {
        return (
            <div>
                <GeneralNavigationBar/>
                <SignUpExamResult/>
            </div>
        );
    }
}
export default ExamPieChartPage;
