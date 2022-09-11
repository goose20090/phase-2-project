import React, {useState, useEffect} from "react";
import CharacterCard from "./CharacterCard";

function Frodo(){

    const [frodoCard, setCard]= useState({})

    useEffect(()=>{

       fetch("https://the-one-api.dev/v2/character?name=Frodo Baggins",{
            method: "GET",
            headers:{
                'Accept': 'application/json',
                'Authorization': 'Bearer DXTHdjzueNO5IyvdtUYC'
            }
        })
        .then(res=>res.json())
        .then(res=> {setCard(res.docs[0]);
          console.log(res.docs[0]);})}, [])
    return(
        <CharacterCard card={frodoCard}/>

    )
}

export default Frodo