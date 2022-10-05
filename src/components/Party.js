import React from "react";

import {StyledProgressBar} from "../components/component styles/ProgressBar.style"
import PartyContainer from "./PartyContainer";

function Party({partyCards, setPartyCards, handleCardDelete, className}){
    return(
        <div>
            <h1>Party Component</h1>
            <PartyContainer className = {className} partyCards = {partyCards} setPartyCards = {setPartyCards} handleCardDelete = {handleCardDelete}/>
            <StyledProgressBar bgcolor = {"red"} completed = {"50"}/>
        </div>
    )
}

export default Party;