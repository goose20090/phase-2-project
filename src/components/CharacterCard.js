import React from "react";
import { useRouteMatch} from "react-router-dom";
import {StyledButton} from "./component styles/Button.style"

function CharacterCard({className, card, handleCardDelete, handleAddToParty }){
    const match = useRouteMatch();

    const {name, race, height, birth} = card;

    function handleClick(){
        console.log("helloo")
    }

       return(
   <div className={className}>
    <span onClick={handleCardDelete}>X</span>
    <h1>{name}</h1>
    <h3>{race}</h3>

    <p>{height}</p>
    <p>{birth}</p>
    {match.url === "/finder" ? <StyledButton card = {card} handleAddToParty = {handleAddToParty} backgroundColor = "aquamarine" buttonLabel={"Add To Party"}/>: null}
    </div>
   ) 
}


export default CharacterCard;