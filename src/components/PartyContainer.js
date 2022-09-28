import React, { useState, useEffect } from "react";
import { StyledCharacterCard } from "./component styles/CharacterChard.style";
import useQuery from "../hooks/useQuery"
function PartyContainer({className}){

    const [cards, setCards] = useState([])

    useEffect(()=>{fetch ("http://localhost:3000/party")
    .then(res=> res.json())
    .then(res=>setCards(res))}, [])



    return(
        <div className={className}>
            {cards.map((card)=> <StyledCharacterCard key = {card._id} card = {card}/>)}            
        </div>
    )
}

export default PartyContainer;