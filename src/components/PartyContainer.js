import React, { useState, useEffect } from "react";
import { StyledCharacterCard } from "./component styles/CharacterChard.style";
function PartyContainer({className, partyCards, setPartyCards, handleCardDelete}){

    

    useEffect(()=>{fetch ("http://localhost:3000/party")
    .then(res=> res.json())
    .then(res=>setPartyCards(res))}, [])



    return(
        <div className={className}>
            {partyCards.map((partyCard)=> <StyledCharacterCard key = {partyCard._id} handleCardDelete = {handleCardDelete} card = {partyCard}/>)}            
        </div>
    )
}

export default PartyContainer;