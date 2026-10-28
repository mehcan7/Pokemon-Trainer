import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Pokemon from '../components/Pokemon'

function List({ favorites }) {
  function isFavorite(pokemon) {
    return favorites.some((p) => p.name === pokemon.name)
  }

  const [pokemons, setPokemons] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    async function fetchPokemons() {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      const data = await response.json()

      const detailPromises = data.results.map((p) => fetch(p.url).then((res) => res.json()))
      const details = await Promise.all(detailPromises)

      setPokemons(details)
    }

    fetchPokemons()
  }, [])

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
