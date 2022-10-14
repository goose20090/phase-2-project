import React from "react";
import { StyledCharacterCard } from "./component styles/CharacterChard.style";
import { StyledSubContainer } from "./component styles/SubContainer.style";

function PartyContainer({className, partyCards, handleCardDelete}){

    return(
        <StyledSubContainer className={className}>
            {partyCards.map((partyCard)=> <StyledCharacterCard key = {partyCard._id} height = {"180px"} handleCardDelete = {handleCardDelete} card = {partyCard}/>)}            
        </StyledSubContainer>
    )
}

export default PartyContainer;