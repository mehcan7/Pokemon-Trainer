import Pokemon from '../components/Pokemon'

// Team pagina (URL "/team"): overzicht van al je teams.
// Elk team is een los object: { id, name, pokemons: [...] }.
function Team({ teams, setTeams }) {
  // vraagt een naam en voegt een nieuw, leeg team toe aan de lijst
  function createTeam() {
    const name = prompt('Naam van het nieuwe team?')
    if (!name) {
      return // op Annuleren geklikt, of niks ingevuld -> niks doen
    }
    setTeams([...teams, { id: Date.now(), name, pokemons: [] }])
  }

  // verwijdert een heel team uit de lijst
  function deleteTeam(teamId) {
    setTeams(teams.filter((t) => t.id !== teamId))
  }

  // haalt 1 Pokemon uit 1 specifiek team
  function removeFromTeam(teamId, pokemon) {
    setTeams(teams.map((t) =>
      t.id === teamId
        ? { ...t, pokemons: t.pokemons.filter((p) => p.name !== pokemon.name) }
        : t // andere teams blijven ongewijzigd
    ))
  }

  return (
    <div className="page-card">
      <h2>Mijn teams <span className="team-count">{teams.length} teams</span></h2>

      <button onClick={createTeam}>+ Nieuw team</button>

      {teams.map((t) => {
        // bouw een simpel lijstje met het aantal lege plekken dat dit team nog heeft
        // (bijv. bij 4 Pokemon in het team: [0, 1] -> 2 lege plekken)
        const aantalLegePlekken = 6 - t.pokemons.length
        const legePlekken = []
        for (let i = 0; i < aantalLegePlekken; i++) {
          legePlekken.push(i)
        }

        return (
          <div className="team-block" key={t.id}>
            <div className="team-block-header">
              <h3>{t.name} <span className="team-count">{t.pokemons.length}/6 Pokémon</span></h3>
              <button className="btn-outline" onClick={() => deleteTeam(t.id)}>Team verwijderen</button>
            </div>

            <ul className="pokemon-grid">
              {t.pokemons.map((p) => (
                <li className="pokemon-card" key={p.name}>
                  <Pokemon name={p.name} sprite={p.sprites.front_default} />
                  <button className="btn-outline" onClick={() => removeFromTeam(t.id, p)}>Verwijderen</button>
                </li>
              ))}

              {legePlekken.map((i) => (
                <li className="pokemon-card empty-slot" key={'empty-' + i}>
                  <span className="empty-plus">+</span>
                  <p className="muted">Lege plek</p>
                </li>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Team
