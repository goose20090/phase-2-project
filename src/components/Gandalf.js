import React, {useState, useEffect} from "react";
import { NavLink } from "react-router-dom";
import CharacterCard from "./CharacterCard";
import { StyledCharacterCard } from "./CharacterChard.style";

function Gandalf(){

    const [gandalfCard, setCard]= useState({})

    useEffect(()=>{

       fetch("https://the-one-api.dev/v2/character?name=Gandalf",{
            method: "GET",
            headers:{
                'Accept': 'application/json',
                'Authorization': 'Bearer DXTHdjzueNO5IyvdtUYC'
            }
        })
        .then(res=>res.json())
        .then(res=> {setCard(res.docs[0]);
          console.log(res.docs[0]);})}, [])

    return (
        <div>
            <StyledCharacterCard card={gandalfCard}/>
            
        </div>
    )
}

export default Gandalf;