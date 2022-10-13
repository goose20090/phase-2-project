import React, { useEffect, useState } from "react";

function LaunchPage({className}){

    // State for final party
    const [party, setParty] = useState([])

    // Setting state for final party pased on json server on component loading
   
    useEffect(()=>{
        fetch("https://partybuilderjsonserver.herokuapp.com/party")
        .then(res=>res.json())
        .then(res=> setParty(res))
    }, [])

    // Timers to fade in different components by changing class names
    useEffect(()=>{
        const timerIntro = setTimeout(fadeInIntro, 1000)
        const timerParty = setTimeout(fadeInParty, 2000);
        const timerValar = setTimeout(fadeInValarLine, 5500);
        return ()=> clearTimeout(timerIntro, timerParty, timerValar)
        
    }, [])

    function fadeInIntro(){
        let intro = document.getElementById('intro')
        intro.className = 'visible'
    }

    function fadeInParty(){

        for(let i = 0; i< 10; i ++){

            setTimeout(()=>{
                fadeInEachPartyMember(i)
            }, i * 200)
           
        }
    }

    function fadeInEachPartyMember(i){
        let partyMembers = document.querySelectorAll('.not-visible')
        partyMembers[0].className = 'visible'
        
    }

    function fadeInValarLine(){
        let valarLine = document.getElementById('valar')
        valarLine.className = "visible"



    }


    // Make final party state into an array of a gramatically correct list, ready to feed into our JSX

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
            <h1 id = "intro" className="not-visible">The party is chosen:</h1>
            <ul>
                {partyArr.map((partymember)=><li key = {partymember} className = {"not-visible"}>{partymember}</li>)}
            </ul>
            <h2 className="not-visible">have formed a Fellowship.</h2>
            <br></br>
            <h3 className = "not-visible" id = "valar">May the Valar speed them on their quest</h3>
        </div>
    )

}

export default LaunchPage;