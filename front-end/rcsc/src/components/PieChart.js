import React from "react";
import {PieChart} from "react-minimal-pie-chart";
import "../style-sheet/math-stats-jumbo-box.css";
const defaultLabelStyle = {
    fontSize: '4px',
    fontFamily: 'Helvetica Neue',

};
export const SimplePieChart = (props) => {
    let correctAnswers = props.correctAnswers;
    let incorrectAnswers = props.incorrectAnswers;
    let totalAnswers = correctAnswers+incorrectAnswers;
    let percentCorrectAnswers = Math.round(correctAnswers/totalAnswers*100);
    let percentInCorrectAnswers = Math.round(incorrectAnswers/totalAnswers*100);
    if (correctAnswers===0 && incorrectAnswers===0){
        return (
            <h4>Not Enough Data</h4>
        )
    }
    return (
        <React.Fragment>
            <PieChart data={
                [
                    {
                        title: "correct",value: percentCorrectAnswers, color: "#3577CFFD", key: "correct"
                    },
                    {
                        title: "incorrect",value: percentInCorrectAnswers, color: "#FF4B32A9", key: "incorrect"
                    }
                ]
            } radius={35} animate={true} label={({dataEntry}) =>
                JSON.stringify(dataEntry.value)+ "% " + dataEntry.title
            } labelStyle={{
                ...defaultLabelStyle
            }} viewBoxSize={[100,80]} center={[50,40]}
            />
            <div className="dataDescription">
                <p style={{fontSize: "1rem"}}>
                    <span className="description">Questions answered: {totalAnswers}</span>
                    <br />
                    <div className="colorBox correctAnswerBox"></div> <span className="description">Correct Answers: {correctAnswers}</span>
                    <br />
                    <div className="colorBox incorrectAnswerBox description"></div> <span className="description">Incorrect Answers: {incorrectAnswers}</span>
                    <br />
                    <div className="description"></div> <span className="description">Weakest Topic: Algebra</span>
                </p>
            </div>
        </React.Fragment>
    );
}