import React from "react";
import PartyContainer from "./PartyContainer";
import {StyledProgressBar} from "./component styles/ProgressBar.style"

function Party({partyCards, handleCardDelete, className, progress, buttonStatus}){
    return(
        <div>
            <h1>Your Party</h1>
            <PartyContainer className = {className} partyCards = {partyCards}  handleCardDelete = {handleCardDelete}/>
            <StyledProgressBar completed = {progress} buttonStatus= {buttonStatus}/>
        </div>
    )
}

export default Party;