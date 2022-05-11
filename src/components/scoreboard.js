import React, { useState, useEffect } from 'react';

function Scoreboard({ currentScore, bestScore }) {

    return (
        <div className='scoreboardDiv'>
            <div className='scoreDivContainer'>
                <div className='scoreDiv'>Score: {currentScore} </div>
            </div>
            <div className='bestScoreDivContainer'>
                <div className='bestScoreDiv'>Best Score: {bestScore} </div>
            </div>
        </div>
    )
}

export default Scoreboard;