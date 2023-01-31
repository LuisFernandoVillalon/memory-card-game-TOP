import React from "react";
import '../styles.css';

const ScoreContainer = ({ bestScore, currScore, currLevel}) => {
    return (
        <div className="score-container">
            <p>Best Score: {bestScore}</p>
            <p>Current Score: {currScore}</p>
            <p>Current Level: {currLevel}</p>
        </div>
    )
}

export default ScoreContainer;