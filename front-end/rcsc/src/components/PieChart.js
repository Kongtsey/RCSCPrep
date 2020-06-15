import React from "react";
import {PieChart} from "react-minimal-pie-chart";
import "../style-sheet/math-stats-jumbo-box.css";
import {description} from "d3/package";
const defaultLabelStyle = {
    fontSize: '4px',
    fontFamily: 'Helvetica Neue',

};
export const SimplePieChart = (props) => {
    let correctAnswers = props.correctAnswers;
    let incorrectAnswers = props.incorrectAnswers;
    let totalAnswers = correctAnswers+incorrectAnswers;
    let percentCorrectAnswers = correctAnswers/totalAnswers*100;
    let percentInCorrectAnswers = incorrectAnswers/totalAnswers*100
    return (
        <React.Fragment>
            <PieChart data={
                [
                    {
                        title: "correct",value: percentCorrectAnswers, color: "#fefefe", key: "correct"
                    },
                    {
                        title: "incorrect",value: percentInCorrectAnswers, color: "#113f72", key: "incorrect"
                    }
                ]
            } radius={35} animate={true} label={({dataEntry}) =>
                JSON.stringify(dataEntry.value)+ "% " + dataEntry.title
            } labelStyle={{
                ...defaultLabelStyle
            }} viewBoxSize={[100,80]} center={[50,40]}
            />
            <hr/>
            <p style={{fontSize: "1rem"}}>
                Description: <br /> <span className="description">Questions answered: {totalAnswers}</span>
                <br />
                <div className="colorBox correctAnswerBox"></div> <span className="description">Correct Answers: {correctAnswers}</span>
                <br />
                <div className="colorBox incorrectAnswerBox description"></div> <span className="description">Incorrect Answers: {incorrectAnswers}</span>
            </p>
        </React.Fragment>

    );
}