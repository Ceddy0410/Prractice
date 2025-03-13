const API_KEY = "U1FU79EGcLydnwalJp85+w==aUvbh9suedMHlJrE";
const BASE_URL = "https://api.api-ninjas.com/v1/cats?name=abyssinian"

export const getPokemons = async () => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100`);
    const data = await response.json()
    return data
};

export const searchPokemon = async (url) => {
   
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        return data
    } catch (error) {
        console.error(error);
    }
};