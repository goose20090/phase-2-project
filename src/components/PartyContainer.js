import React from "react";
import { StyledCharacterCard } from "./CharacterChard.style";

function PartyContainer({className}){

    let testCharacterObj= {
        name: "Angus",
        race: "Human",
        height: '5"11',
        birth: "20/08/1994"
    }
    return(
        <div className={className}>
            <StyledCharacterCard card = {testCharacterObj}/>
            
        </div>
    )
}

export default PartyContainer;