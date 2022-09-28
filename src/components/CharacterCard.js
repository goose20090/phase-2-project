import React from "react";
import { useRouteMatch} from "react-router-dom";
import {StyledButton} from "./component styles/Button.style"

function CharacterCard({className, card, handleCardDelete}){
    const match = useRouteMatch();
    const {name, race, height, birth} = card;

       return(
   <div className={className}>
    <span onClick={handleCardDelete}>X</span>
    <h1>{name}</h1>
    <h3>{race}</h3>

    <p>{height}</p>
    <p>{birth}</p>
    {match.url === "/finder" ? <StyledButton backgroundColor = "aquamarine" buttonLabel={"Add To Party"} />: null}
    </div>
   ) 
}


export default CharacterCard;