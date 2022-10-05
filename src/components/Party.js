import React from "react";
import PartyContainer from "./PartyContainer";
import ProgressBar from "./ProgressBar";

function Party({partyCards, setPartyCards, handleCardDelete, className, progress}){
    return(
        <div>
            <h1>Party Component</h1>
            <PartyContainer className = {className} partyCards = {partyCards} setPartyCards = {setPartyCards} handleCardDelete = {handleCardDelete}/>
            <ProgressBar completed = {progress} bgcolor = {"red"}/>
        </div>
    )
}

export default Party;