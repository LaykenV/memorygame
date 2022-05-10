import React, { useState, useEffect } from 'react';
import Scoreboard from './scoreboard';

function Header() {
    
    return (
        <div className='headerDiv'>
            <h1>Memory Game</h1>
            <Scoreboard />
        </div>
    )
}

export default Header;