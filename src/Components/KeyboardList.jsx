import "../css/KeyboardList.css"


function KeebCard({ pokemon }){

    function onFavoriteClick(){
        alert("clicked")
    }

    return <div className="keeb-card">
        <div className="keeb-poster">  
             <img src={pokemon.sprites.front_default}/>  
        </div>
        <div className="keeb-info">
            <h3>{pokemon.forms[0].name}</h3>
            <p>{pokemon.height}</p>
            <ul>
                {
                    pokemon.abilities.map(pokemonAbility => (
                        <li key={pokemonAbility.ability.url}>{pokemonAbility.ability.name}</li>
                    ))
                }
            </ul>
        </div>
    </div>

}

export default KeebCard