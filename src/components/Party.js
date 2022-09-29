import React from "react";
import { StyledPartyContainer } from "./component styles/PartyContainer.style";

function Party({partyCards, setPartyCards}){
    return(
        <div>
            <h1>Party Component</h1>
            <StyledPartyContainer partyCards = {partyCards} setPartyCards = {setPartyCards}/>
        </div>
    )
}

export default Party;