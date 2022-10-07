import React from "react";
import PartyContainer from "./PartyContainer";
import {StyledProgressBar} from "./component styles/ProgressBar.style"

function Party({partyCards, setPartyCards, handleCardDelete, className, progress, buttonStatus}){
    return(
        <div>
            <h1>Party Component</h1>
            <PartyContainer className = {className} partyCards = {partyCards} setPartyCards = {setPartyCards} handleCardDelete = {handleCardDelete}/>
            <StyledProgressBar completed = {progress} buttonStatus= {buttonStatus}/>
        </div>
    )
}

export default Party;