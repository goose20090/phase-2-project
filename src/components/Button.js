import React from "react";

function Button({className, buttonLabel, handleAddToParty, card}){

    function handleClick(){
        handleAddToParty(card)

    }

    return (
        <button onClick = {handleClick}className= {className}>{buttonLabel}</button>
    )
}

export default Button;