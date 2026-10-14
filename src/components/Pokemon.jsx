import '../assets/css/pokemon.css'

// Herbruikbaar kaartje-onderdeel: plaatje + naam, gebruikt op Home, List,
// Favorites, Team en Detail. number/abilities zijn optioneel: ze worden
// alleen getoond als ze meegegeven zijn (anders is props.number undefined,
// en toont {props.number && ...} dus niets).
function Pokemon(props) {
    return(
        <>
            <span className="pokemon-sprite-wrap">
                <img className="pokemon-sprite" src={props.sprite} />
            </span>
            <p className="pokemon-name">{props.name}</p>
            {props.number && <p className="pokemon-number">#{String(props.number).padStart(3, '0')}</p>}
            {props.abilities && <p className="pokemon-abilities">{props.abilities}</p>}
        </>
    )
}

export default Pokemon
