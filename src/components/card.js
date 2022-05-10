import React, { useState, useEffect } from 'react';

const cards = [1,2,3];

function Card() {

    return (
        <div className='cardsContainer'>
            {cards.map((eachCard) => {
                return (
                    <div className='cardContainer'></div>
                )
            })}
        </div>
    )
}

export default Card;