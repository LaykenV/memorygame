import React, { useState, useEffect } from 'react';

function Scoreboard({ currentScore, bestScore }) {

    return (
        <div className='scoreboardDiv'>
            <div className='scoreDiv'>Score: {currentScore} </div>
            <div className='bestScoreDiv'>Best Score: {bestScore} </div>
        </div>
    )
}

export default Scoreboard;