import React from "react";

function CharacterCard({className, card}){

    console.log(card)

    const {name, race, height, birth} = card;
       return(
   <div className={className}>
    <h1>{name}</h1>

    <h3>{race}</h3>

    <p>{height}</p>
    <br/>
    <p>{birth}</p>
    
    </div>
   ) 
}


export default CharacterCard;