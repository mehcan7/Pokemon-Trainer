import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/home.css'

// Home pagina (URL "/"): haalt 1 vaste Pokemon op als welkomstplaatje.
function Home() {
  const [pokemon, setPokemon] = useState(null) // null = nog niet opgehaald

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/typhlosion')
      const data = await response.json()
      setPokemon(data)
    }

    fetchPokemon()
  }, [])

  return (
    <div className="page-card">
      {!pokemon && <p>Laden...</p>}

      {pokemon && (
        <div className="home-hero">
          <span className="pokemon-sprite-wrap">
            <img className="pokemon-sprite" src={pokemon.sprites.front_default} alt={pokemon.name} />
          </span>
          <h2>Welkom bij Pokemon Team Manager</h2>
          <p className="muted">Klaar om je teams te bekijken?</p>
          <Link to="/team"><button>Bekijk mijn teams</button></Link>
        </div>
      )}
    </div>
  )
}

export default Home
