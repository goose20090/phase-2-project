import React from "react";
import PartyContainer from "./PartyContainer";
import ProgressBar from "./ProgressBar";

function Party({partyCards, setPartyCards, handleCardDelete, className}){
    return(
        <div>
            <h1>Party Component</h1>
            <PartyContainer className = {className} partyCards = {partyCards} setPartyCards = {setPartyCards} handleCardDelete = {handleCardDelete}/>
            <ProgressBar bgcolor = {"red"} completed = {"50"}/>
        </div>
    )
}

export default Party;