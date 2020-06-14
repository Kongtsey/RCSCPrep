import React from "react";
import {PieChart} from "react-minimal-pie-chart";
import "../style-sheet/math-stats-jumbo-box.css";
const defaultLabelStyle = {
    fontSize: '10px',
    fontFamily: 'Helvetica Neue',

};
const segmentStyling = {
    margin: '10px'
}
export const SimplePieChart = (props) => {
    let correctAnswers = props.correctAnswers;
    let incorrectAnswers = props.incorrectAnswers;
    return (
        <React.Fragment>
            <PieChart data={
                [
                    {
                        title: "correct answers",value: correctAnswers, color: "#fefefe", key: "correct"
                    },
                    {
                        title: "incorrect answers",value: incorrectAnswers, color: "#113f72", key: "incorrect"
                    }
                ]
            } radius={35} animate={true} label={({dataEntry}) =>
                dataEntry.value
            } labelStyle={{
                ...defaultLabelStyle
            }} viewBoxSize={[100,80]} center={[50,40]}
            />
            <hr/>
            <p style={{fontSize: "1rem"}}>
                Description: <br /> correct ={correctAnswers} <br /> Incorrect = {incorrectAnswers}
                <br />
            </p>
        </React.Fragment>

    );
}