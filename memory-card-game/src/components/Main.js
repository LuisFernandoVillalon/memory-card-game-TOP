import React, { useState } from "react";
import './styles.css';
import CardsContainer from './Content/Cards.js';
import ScoreContainer from './Content/Score.js'
import populateArrays from "./Images/ArrayLevels/ArrayLevels";
import GameOver from "./Content/GameOver";
import GameWon from "./Content/GameWon";


const Main = () => {
    const updateCurrentScore = (card, currLevelImgs, currScore) => {
        if (card[1] === 0) {
            card[1] = 1;
            setCurrScore( currScore => currScore + 1);
            changeLevel(currLevelImgs)
        } else {

            setBestScore((prevBestScore) => {
                if (prevBestScore < currScore) {
                   setBestScore(currScore)
                } else {
                    setBestScore(prevBestScore)
                }
            })

            setGameStatus(true);
        }
    }

    const changeLevel = (currLevelImgs) => {
        const checkImgStatus = (currentImg) => currentImg[1] === 1;
        const statusLevel = currLevelImgs.every(checkImgStatus);
        if (statusLevel && currLevel == 1) {
            setCurrLevel( currLevel => currLevel + 1);
            setCurrLevelImgs(levelArray.levelTwo);
        } else if (statusLevel && currLevel == 2) {
            setCurrLevel( currLevel => currLevel + 1);
            setCurrLevelImgs(levelArray.levelThree)
        } else if (statusLevel && currLevel == 3) {
            setCurrLevel( currLevel => currLevel + 1);
            setCurrLevelImgs(levelArray.levelFour)
        } else if (statusLevel && currLevel == 4) {
            setCurrLevel( currLevel => currLevel + 1);
            setCurrLevelImgs(levelArray.levelFive)
        } else if (statusLevel && currLevel == 5) {
            setGameWon(true);
        }

    }

    const resetGame = (currLevelImgs) => {
        setCurrScore(0);
        setCurrLevel(1);
        setCurrLevelImgs(levelArray.levelOne);
         for (let i = 0; i < currLevelImgs.length; ++i) {
            currLevelImgs[i][1] = 0;
        }
        setGameStatus(false);
        setGameWon(false);
    }

    const startGame = (currLevelImgs) => {
        setCurrScore(0);
        setCurrLevel(1);
        setCurrLevelImgs(levelArray.levelOne);
         for (let i = 0; i < currLevelImgs.length; ++i) {
            currLevelImgs[i][1] = 0;
        }
        setGameStatus(false);
        setGameWon(false);
        setBestScore(40);
    }

    const randomOrder = (currLevelImgs) => {
        let currentIndex = currLevelImgs.length,  randomIndex;

        // While there remain elements to shuffle.
        while (currentIndex != 0) {
      
          // Pick a remaining element.
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
          // And swap it with the current element.
          [currLevelImgs[currentIndex], currLevelImgs[randomIndex]] = [
            currLevelImgs[randomIndex], currLevelImgs[currentIndex]];
        }
      
    }

    const levelArray = {
        levelOne: [],
        levelTwo: [],
        levelThree: [],
        levelFour: [],
        levelFive: []
    }

    populateArrays(levelArray);

    
    const [bestScore, setBestScore] = useState(0);
    const [currScore, setCurrScore] = useState(0);

    const [gameStatus, setGameStatus] = useState(false);
    const [gameWon, setGameWon] = useState(false);

    const [currLevel, setCurrLevel] = useState(1);

    const [currLevelImgs, setCurrLevelImgs] = useState(levelArray.levelOne);
    
    return (
        <div className="content-height">
            <ScoreContainer 
                bestScore={bestScore} setBestScore={setBestScore}
                currScore={currScore} setCurrScore={setCurrScore}
                currLevel={currLevel} setCurrLevel={setCurrLevel}
            />

            <CardsContainer 
                bestScore={bestScore} setBestScore={setBestScore}
                currScore={currScore} setCurrScore={setCurrScore}
                currLevel={currLevel} setCurrLevel={setCurrLevel}
                currLevelImgs={currLevelImgs} setCurrLevelImgs={setCurrLevelImgs}
                updateCurrentScore={updateCurrentScore}
                gameStatus={gameStatus} setGameStatus={setGameStatus}

                randomOrder={randomOrder}
            />
            {gameStatus && <GameOver 
                currScore={currScore} setCurrScore={setCurrScore}
                currLevel={currLevel} setCurrLevel={setCurrLevel}
                currLevelImgs={currLevelImgs} setCurrLevelImgs={setCurrLevelImgs}
                gameStatus={gameStatus} setGameStatus={setGameStatus}
                resetGame={resetGame}
            />}
            {gameWon && <GameWon 
                currScore={currScore} setCurrScore={setCurrScore}
                currLevel={currLevel} setCurrLevel={setCurrLevel}
                currLevelImgs={currLevelImgs} setCurrLevelImgs={setCurrLevelImgs}
                gameStatus={gameStatus} setGameStatus={setGameStatus}
                startGame={startGame}
                gameWon={gameWon} setGameWon={setGameWon}
            />}
        </div>
    )
}


export default Main;