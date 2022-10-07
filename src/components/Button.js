import React from "react";

function Button({className, buttonLabel, handleAddToParty, card, clickFunction, buttonStatus}){

    function handleClick(e){

        if (!card){
        clickFunction(e)
        }

        else {
            handleAddToParty(card)
        }
    }


    return (
        <button disabled = {buttonStatus} onClick = {handleClick} className= {className}>{buttonLabel}</button>
    )
}

export default Button;