import React, { useState, useEffect } from "react";

function Aragon(){
    const [aragonCard, setCard]= useState("")

    useEffect(()=>{
        console.log("helloo")
    }, [])
    return(
    <div>
        <h1>Aragon</h1>
    </div>
    )

}

export default Aragon;