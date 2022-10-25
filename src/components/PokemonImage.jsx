export default function PokemonImage({isLoading, requestedPokemon}) {
    
    if(isLoading){
        const missingNo = 'https://iili.io/DhR92f.png'      
        return (
            <div style={{ height: 475, width: 475}}>
              <img src={missingNo} alt="No pokemon selected" />
            </div>
        )
    }    

    else {    
        const pokemonImg = requestedPokemon.other['official-artwork']['front_default']
        const pokemonName = requestedPokemon.name
        return (
            <div>
              <img src={pokemonImg} alt={pokemonName} />
            </div>
        )
    }    
}


