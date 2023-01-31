import React from "react";

const GameWon = ({ currScore, currLevel, currLevelImgs, gameStatus, resetGame, gameWon }) => {

    return (
        <div className="black-background">
            <div className="gameover-container">
                <div className="gameover-content">
                    <p>You beat all five levels! 🥳</p>
                    <p className="small-text">*Your memory is 😚🤌*</p>
                    <button className="reset-btn" onClick={() => resetGame(currScore, currLevel, currLevelImgs, gameStatus, gameWon)}>Play Again?</button>
                </div>
            </div>
        </div>

    )
}

export default GameWon;