import { useState } from 'react'
import { Link } from 'react-router-dom'
import Pokemon from '../components/Pokemon'

// Favorites pagina (URL "/favorites"): toont de Pokemon die je via de
// Detail-pagina als favoriet hebt gemarkeerd, met eigen zoekbalk.
function Favorites({ favorites, setFavorites }) {
  const [search, setSearch] = useState('')

  function removeFavorite(pokemon) {
    setFavorites(favorites.filter((p) => p.name !== pokemon.name))
  }

  const filteredFavorites = favorites.filter((p) =>
    p.name.includes(search.toLowerCase())
  )

  return (
    <div className="page-card">
      <h2>Favorieten <span className="team-count">{favorites.length} Pokémon</span></h2>

      <input
        className="search-input"
        type="text"
        placeholder="Zoek in favorieten..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {favorites.length === 0 && (
        <p className="muted">Nog geen favorieten. Voeg Pokémon toe via de Lijst.</p>
      )}

      <ul className="pokemon-grid">
        {filteredFavorites.map((p) => (
          <li className="pokemon-card" key={p.name}>
            <span className="favorite-badge">★</span>
            <Pokemon name={p.name} sprite={p.sprites.front_default} number={p.id} />
            <Link to={`/detail/${p.id}`}>
              <button>Bekijk</button>
            </Link>
            <button className="btn-outline" onClick={() => removeFavorite(p)}>Verwijderen</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Favorites
