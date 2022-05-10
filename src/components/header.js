import React, { useState, useEffect } from 'react';
import Scoreboard from './scoreboard';
import logo from '../images/pokemon.png'

function Header({ currentScore, bestScore }) {
    
    return (
        <div className='headerDiv'>
            <h1>Memory Game</h1>
            <img src={logo} alt='pokemon logo'></img>
            <Scoreboard currentScore={currentScore} bestScore={bestScore}/>
        </div>
    )
}

export default Header;