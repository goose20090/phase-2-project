import React, { useEffect, useState } from "react";

function LaunchPage(){

    const [party, setParty] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/party")
        .then(res=>res.json())
        .then(res=> setParty(res))
    }, [])

    function partyStringMaker(party){
        let string
        for(let i = 0; i< party.length; i++)
        {
            if (i === party.length - 2){
                let name = `${party[i].name} `
            string = string + name
            }

            else if (i < party.length - 1){
                let name = `${party[i].name}, `
                string ? string = string + name: string = name;
                }

            else {
                let name = `and ${party[i].name}`
                string = string + name;
            }
        }
        console.log(string)
        return string;
    }

    function handleClick(){
        
        console.log(partyStringMaker(party))
    }

    return(
        <div>
            <h1 onClick={handleClick}>The party is chosen:</h1>
            <h2>{partyStringMaker(party)} have formed a Fellowship. May the Valar speed them on their quest.</h2>
        </div>
    )

}

export default LaunchPage