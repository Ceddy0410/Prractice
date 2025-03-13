import KeyboardList from "../Components/KeyboardList"
import {useEffect, useState} from "react"
import {getPokemons, searchPokemon} from "../services/api";
import "../css/Home.css"


function Home() {
    const [searchQuery, setSearchQuery] = useState("");
    const [pokemons, setPokemons] = useState([]);
    const [pokemonImages, setPokemonImages] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getPokemons();
            const pokemonList = await Promise.all(response.results.map(pokemon => searchPokemon(pokemon.url)));
            console.log(pokemonList)
            setPokemons(pokemonList);
        };
        fetchData();
    }, []);
    
    

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    }

    return <div className="home">

        <div className="keeb-grid">
            {pokemons.map((pokemon) => 
            (
            <KeyboardList pokemon={pokemon} key={pokemon.id} />
            ))}
        </div>

    </div>
}

export default Home