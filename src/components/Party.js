import React from "react";
import { StyledPartyContainer } from "./component styles/PartyContainer.style";
import ProgressBar from "./ProgressBar"

function Party({partyCards, setPartyCards, handleCardDelete}){
    return(
        <div>
            <h1>Party Component</h1>
            <StyledPartyContainer partyCards = {partyCards} setPartyCards = {setPartyCards} handleCardDelete = {handleCardDelete}/>
            <ProgressBar bgcolor = {"red"} completed = {80}/>
        </div>
    )
}

export default Party;