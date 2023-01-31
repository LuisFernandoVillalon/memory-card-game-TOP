import React from "react";

const GameOver = ({ currScore, currLevel, currLevelImgs, gameStatus, resetGame }) => {

    return (
        <div className="black-background">
            <div className="gameover-container">
                <div className="gameover-content">
                    <p>Game Over 😅</p>
                    <p className="small-text">*You clicked one of the images twice*</p>
                    <button className="reset-btn" onClick={() => resetGame(currScore, currLevel, currLevelImgs, gameStatus)}>Reset</button>
                </div>
            </div>
        </div>

    )
}

export default GameOver;