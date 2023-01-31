import React from "react";
import '../styles.css';
import uniqid from "uniqid";


const CardsContainer = ({ bestScore, currScore, currLevel, currLevelImgs, updateCurrentScore, gameStatus, randomOrder }) => {

    const imgsList = currLevelImgs.map((card) => (
         
        <IndvCard 
            key={uniqid()}
            card={card}
            updateCurrentScore={updateCurrentScore}
            currScore={currScore}
            currLevelImgs={currLevelImgs}
            gameStatus={gameStatus}
            randomOrder={randomOrder}
        />
    ));



    return (
        <div className="center-grid">
            <div className="cards-container">
                {imgsList}
            </div>
        </div>
    )
}

const IndvCard = ({card, updateCurrentScore, currLevelImgs, gameStatus, currScore, randomOrder}) => {    
    return (
        <div className="center-card">
            <div className="card-border">
                <img className="card"  onClick={() => { 
                    updateCurrentScore(card, currLevelImgs, currScore);
                    randomOrder(currLevelImgs); 
                }} 
                src={card[0]} />
            </div>
        </div>
    )
}



export default CardsContainer;