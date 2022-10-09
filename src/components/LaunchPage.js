import React, { useEffect, useState } from "react";

function LaunchPage({className}){

    const [party, setParty] = useState([])

    useEffect(()=>{
        fetch("http://localhost:3000/party")
        .then(res=>res.json())
        .then(res=> setParty(res))
    }, [])

    useEffect(()=>{
        const timer = setTimeout(fadeInFrodo, 1000);
        return ()=> clearTimeout(timer)
        
    }, [])

    function fadeInFrodo(){
        const frodo = document.querySelector('.party-member')
        console.log(frodo)
        frodo.className = "animated"
        console.log(frodo)
    }


    function partyArrayMaker(party){
        let array = []
        for (let i = 0; i< party.length; i ++){
            if (i === party.length - 2){
                let name = `${party[i].name} `
                array.push(name)
            }

            else if (i < party.length - 1){
                let name = `${party[i].name}, `
                array.push(name)
                }

            else {
                let name = `and ${party[i].name}`
                array.push(name)
            }
        }

        return array

    }

    let partyArr = partyArrayMaker(party)

    
    return(
        <div className={className}>
            <h1>The party is chosen:</h1>
            <ul>
                {partyArr.map((partymember)=><li key = {partymember} className = {"party-member"}>{partymember}</li>)}
            </ul>
            <h2>have formed a Fellowship.</h2>
            <br></br>
            <h2>May the Valar speed them on their quest.</h2>
        </div>
    )

}

export default LaunchPage;