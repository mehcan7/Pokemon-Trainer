import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Pokemon from '../components/Pokemon'

// List pagina (URL "/list"): haalt 20 Pokemon op en laat ze zien,
// met een zoekbalk en een sterretje bij Pokemon die al favoriet zijn.
function List({ favorites }) {
  // checkt of een Pokemon al in de favorieten-lijst staat (puur om te tonen,
  // favoriet maken gebeurt zelf op de Detail-pagina)
  function isFavorite(pokemon) {
    return favorites.some((p) => p.name === pokemon.name)
  }

  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function fetchPokemons() {
      // stap 1: lijst van 20 namen + links ophalen
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      const data = await response.json()

      // stap 2: voor elk van die 20, de volledige info ophalen (incl. sprite)
      const detailPromises = data.results.map((p) => fetch(p.url).then((res) => res.json()))
      const details = await Promise.all(detailPromises)

      setPokemons(details)
    }

    fetchPokemons()
  }, [])

  // alleen de Pokemon waarvan de naam past bij het zoekveld
  const filteredPokemons = pokemons.filter((p) =>
    p.name.includes(search.toLowerCase())
  )

  return (
    <div className="page-card">
      <input
        className="search-input"
        type="text"
        placeholder="Zoek in favorieten..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul className="pokemon-grid">
        {filteredPokemons.map((p) => (
          <li className="pokemon-card" key={p.name}>
            {isFavorite(p) && <span className="favorite-badge">★</span>}
            <Pokemon name={p.name} sprite={p.sprites.front_default} number={p.id} />
            <Link to={`/detail/${p.id}`}>
              <button>Bekijk</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default List
