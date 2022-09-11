import React from "react";

function CharacterCard({card}){

    console.log(card)

    const {name, race, height, birth} = card;
       return(
   <>
    <h1>{name}</h1>

    <h3>{race}</h3>

    <p>{height}</p>
    <br/>
    <p>{birth}</p>
    
    </>
   ) 
}


export default CharacterCard;