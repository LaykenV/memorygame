import React, { useState, useEffect } from 'react';

function Card({ pokemons, handleCardClick }) {

    return (
        <div className='cardsContainer' onClick={handleCardClick}>
            {pokemons.map((pokemon) => {
                return (
                    <div className='cardContainer' key={pokemon.id}>
                        <img src={pokemon.image} alt={pokemon.name}></img>
                        <div className='pokemonName'>{pokemon.name}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default Card;