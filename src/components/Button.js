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
        <div className={className}>
            <button disabled = {buttonStatus} onClick = {handleClick} className= {buttonStatus? "disabled": null}>{buttonLabel}</button>
        </div>
    )
}

export default Button;