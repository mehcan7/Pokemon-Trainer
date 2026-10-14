import '../assets/css/pokemon.css'

function Pokemon(props) {
    return(
        <>
            <span className="pokemon-sprite-wrap">
                <img className="pokemon-sprite" src={props.sprite} />
            </span>
            <p className="pokemon-name">{props.name}</p>
            {props.abilities && <p className="pokemon-abilities">{props.abilities}</p>}
        </>
    )
}

export default Pokemon
