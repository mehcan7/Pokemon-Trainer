import { Link } from 'react-router-dom'
import Pokemon from '../components/Pokemon'

function Team({ team, setTeam }) {
  function removeFromTeam(pokemon) {
    setTeam(team.filter((p) => p.name !== pokemon.name))
  }

  return (
    <div className="page-card">
      <h2>Mijn team <span className="team-count">{team.length}/6 Pokémon</span></h2>
      <ul className="pokemon-grid">
        {team.map((p) => (
          <li className="pokemon-card" key={p.name}>
            <Pokemon name={p.name} sprite={p.sprites.front_default} />
            <Link to={`/detail/${p.id}`}>
              <button>Bekijk</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Team
