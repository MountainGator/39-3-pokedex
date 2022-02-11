const Pokecard = (props) => {
    return (
        <div className={`pokeCard ${props.type}`} id={props.id}>
            <h3 className="pokeCardTitle">{props.name}</h3>
            <img 
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`}
            alt={props.name}
            className="pokeCardImg" />
            <p className="pokeCardText"> Type: {props.type}</p>
            <p className="pokeCardText"> EXP: {props.base_experience}</p>
        </div>
    )
}

export default Pokecard;