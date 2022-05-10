import React, { useState, useEffect } from 'react';
import Card from './card';

function Body({ pokemons, handleCardClick }) {

    return (
        <div className='bodyDiv'>
            <Card pokemons={pokemons} handleCardClick={handleCardClick}/>
        </div>
    )
}

export default Body;