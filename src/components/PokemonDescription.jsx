import { useEffect, useState } from "react";

export default function PokemonDescription({userInput}) {

    const [isLoading ,setIsLoading] = useState(true)
    const [flavourText, setFlavourText] = useState("");    

useEffect(() => {
        setIsLoading(true);
        if(userInput.length > 1) {
            fetch(`https://pokeapi.co/api/v2/pokemon-species/${userInput}/`)
            .then((response) => response.json())
            .then(({flavor_text_entries}) => {
                setIsLoading(false);
                const filteredEntries = flavor_text_entries.filter((entry)=>{
       return entry.language.name === 'en'
                })
                const returnedFlavourTxt = filteredEntries[0].flavor_text
                return setFlavourText(returnedFlavourTxt)
            })
   }     
       
    } , [setIsLoading, userInput, setFlavourText] 
)

if (isLoading){
    return (<div>
        No Pokemon selected 
    </div>
    )
}

    return (
        <section className="p-6">
            <p> Description: {flavourText} </p> 
        </section>
    )
    
}