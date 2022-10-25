import { useEffect, useState } from 'react';

export default function PokemonSearch({userInput, setUserInput, setRequestedPokemon, setIsLoading}) {

    const [trackUserInput, setTrackUserInput] = useState("");

    const handleChange = (event) => {
        setTrackUserInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setUserInput(() => {
            const newInput = trackUserInput.toLowerCase();
            setTrackUserInput("");
            return newInput;
        });
    }

    useEffect(() => {
        setIsLoading(true);
        if(userInput.length > 1) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${userInput}/`)
            .then((response) => response.json())
            .then(({id, name, sprites:{other}, species, stats}) => {
                setIsLoading(false);
                const returnedPokemon = {
                    id, 
                    name,
                    other,
                    species,
                    stats
                }
                return setRequestedPokemon(returnedPokemon)
            })
        }
    }, [setIsLoading, userInput, setRequestedPokemon])

    return (
        <form className="flex justify-center relative w-full p-6" onSubmit={handleSubmit}>
            <input className=" justify-center bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-60 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"id="1" onChange={handleChange} value={trackUserInput} placeholder="Enter Your PokeSearch"></input>
            <button className="border border-gray-200 bg-gray-200 text-gray-700 rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-gray-300 focus:outline-none focus:shadow-outline">Search</button>
        </form>
    )
}