import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import Body from './components/body';
import Footer from './components/footer';


function App() {
  const [pokemons, setPokemons] = useState([]);
  const [clickedPokemons, setClickedPokemons] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    const loadCards = async () => {
      setPokemons(shuffleArray(await fetchPokemons()))
    }
    loadCards();
  }, []);

  const fetchPokemons = async () => {
    const pokemons = []
    const num = Math.round(Math.random() * 100);
    for (let i = num; i <= num+14; i++) {
      const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${i}`
      const response = await fetch(pokemonUrl)
      const pokemon = await response.json()
      const id = pokemon.id
      const name = capitalizeFirstLetter(pokemon.name)
      const image = pokemon.sprites.front_default
      pokemons.push({ id, name, image })
    }
    console.log(pokemons);
    return pokemons
  }

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const shuffleArray = (array) => {
    return array.map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
  }

  const handleCardClick = (e) => {
    const pokemonName = e.target.parentNode.lastChild.textContent
    playRound(pokemonName)
    setPokemons(shuffleArray(pokemons))
  }

  const playRound = (pokemonName) => {
    if (clickedPokemons.includes(pokemonName)) {
      resetGame()
    } else {
      const newScore = currentScore + 1
      if (newScore > bestScore) setBestScore(newScore)
      setCurrentScore(newScore)
      setClickedPokemons((prevState) => [...prevState, pokemonName])
    }
  }

  const resetGame = () => {
    setClickedPokemons([])
    setCurrentScore(0)
  }
  
  return (
    <div className="App">
      <Header currentScore={currentScore} bestScore={bestScore}/>
      <Body pokemons={pokemons} handleCardClick={handleCardClick}/>
      <Footer />
    </div>
  );
}

export default App;
