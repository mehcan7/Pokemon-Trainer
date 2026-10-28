import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Pokemon from '../components/Pokemon'

function Detail({ teams, setTeams, favorites, setFavorites }) {
  const { id } = useParams()
  const [pokemon, setPokemon] = useState(null)
  const [selectedTeamId, setSelectedTeamId] = useState('')

  function addToTeam() {
    const chosenTeam = teams.find((t) => t.id === Number(selectedTeamId))

    if (!chosenTeam) {
      alert('Kies eerst een team')
      return
    }
    if (chosenTeam.pokemons.length >= 6) {
      alert('Dit team is al vol (max 6)')
      return
    }

    setTeams(teams.map((t) =>
      t.id === chosenTeam.id ? { ...t, pokemons: [...t.pokemons, pokemon] } : t
    ))
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
          {teams.length === 0 ? (
            <p className="muted">Je hebt nog geen teams. Maak er eerst een aan op de Teams-pagina.</p>
          ) : (
            <>
              <select value={selectedTeamId} onChange={(e) => setSelectedTeamId(e.target.value)}>
                <option value="">Kies een team</option>
                {teams.map((t) => (
                  <option key={t.id} value={t.id}>{t.name}</option>
                ))}
              </select>
              <button onClick={addToTeam}>Toevoegen aan team</button>
            </>
          )}

          {isFavorite() ? (
            <button className="btn-accent" onClick={removeFromFavorites}>Favoriet verwijderen</button>
          ) : (
            <button className="btn-accent" onClick={addToFavorites}>Favoriet toevoegen</button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Detail
