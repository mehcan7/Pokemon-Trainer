import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Pokemon from '../components/Pokemon'

function Detail({ team, setTeam, favorites, setFavorites }) {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState(null)

  function removeFromTeam() {
    setTeam(team.filter((p) => p.name !== pokemon.name))
  }

  function addToTeam() {
    if (team.length >= 6) {
      alert('Je team is al vol (max 6)')
      return
    }
    setTeam([...team, pokemon])
  }

  function isFavorite() {
    return favorites.some((p) => p.name === pokemon.name)
  }

  function addToFavorites() {
    setFavorites([...favorites, pokemon])
  }

  function removeFromFavorites() {
    setFavorites(favorites.filter((p) => p.name !== pokemon.name))
  }

  useEffect(() => {
    async function fetchPokemon() {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const data = await response.json()
      setPokemon(data)
    }

    fetchPokemon()
  }, [id])

  if (!pokemon) {
    return <p>Laden...</p>
  }

  return (
    <div className="page-card detail-page">
      <Link to="/list"><button className="btn-outline">‹ Terug naar lijst</button></Link>

      <div className="home-hero">
        <Pokemon name={pokemon.name} sprite={pokemon.sprites.front_default} />

        <div className="detail-actions">
          <button onClick={addToTeam}>Toevoegen aan team</button>
          {isFavorite() ? (
            <button className="btn-accent" onClick={removeFromFavorites}>Favoriet verwijderen</button>
          ) : (
            <button className="btn-accent" onClick={addToFavorites}>Favoriet toevoegen</button>
          )}
          <button className="btn-outline" onClick={removeFromTeam}>Verwijderen</button>
        </div>
      </div>
    </div>
  )
}

export default Detail
