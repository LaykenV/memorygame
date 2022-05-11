import React, { useState, useEffect } from 'react';
import Scoreboard from './scoreboard';
import logo from '../images/pokemon.png'

function Header({ currentScore, bestScore }) {
    
    return (
        <div className='headerDiv'>
            <div className='logoContainer'>
            <img src={logo} alt='pokemon logo' className='logo'></img>

            </div>
            <Scoreboard currentScore={currentScore} bestScore={bestScore}/>
            <div className='blackBar'>
                <div className='bigCircle'>
                    <div className='lilCircle'></div>
                </div>
            </div>
        </div>
    )
}

export default Header;