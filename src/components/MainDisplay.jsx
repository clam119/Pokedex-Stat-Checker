import { useState } from "react";
import PokemonSearch from './PokemonSearch';
import PokemonDescription from './PokemonDescription';
import PokemonImage from './PokemonImage';
import PokemonStats from './PokemonStats';
import PokemonIdentifier from './PokemonIdentifier';
import Title from './Title';

export default function MainDisplay() {
    const [userInput, setUserInput] = useState("");    
    const [isLoading, setIsLoading] = useState(true);
    const [requestedPokemon, setRequestedPokemon] = useState([]);

    return (
        <>
        <Title />
        <PokemonIdentifier requestedPokemon={requestedPokemon} isLoading={isLoading} />
        <PokemonSearch userInput={userInput} setUserInput={setUserInput} setRequestedPokemon={setRequestedPokemon} setIsLoading={setIsLoading}/>
        
       <div className="flex flex-row justify-center">

             <div className="left-screen">
               <PokemonImage requestedPokemon={requestedPokemon} isLoading={isLoading}/>
             </div>
        
             <div className="right-screen border-colour">
                <PokemonStats requestedPokemon={requestedPokemon} isLoading={isLoading}></PokemonStats>
             </div>

       </div>

        <PokemonDescription userInput={userInput} > </PokemonDescription>
        
        </>
    )
}

