export default function PokemonIdentifier ({requestedPokemon, isLoading}) {

    if(isLoading === true) {
        return(
            <div className="p-6 justify-center">
            <h2>Pokémon ID: None</h2>
            <h2>Pokémon Name: </h2>
            </div>
        )}
    else {
        const { id, name } = requestedPokemon;
        const capitaliseFirstLetter = name.charAt(0).toUpperCase();
        const restOfName = name.slice(1);
        const completedName = capitaliseFirstLetter + restOfName;
    
        return( 
        <div className="p-6 justify-center">
            <h2>Pokémon ID: {id}</h2>
            <h2>Pokémon Name: {completedName} </h2>
        </div>
         )
    }
}


