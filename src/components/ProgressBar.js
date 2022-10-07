import React from "react";
import {StyledButton} from "./component styles/Button.style"



function ProgressBar({completed, className, buttonStatus}){

    function moveToLaunch(e){
        window.location.href= '/launch'
    }

    return(
        <div className={className}>
        <div className= "container">
            <div className = "filler" completed = {completed}>
                <span>{`${completed}%`} </span>
            </div>
        </div>
        <StyledButton
        buttonStatus= {buttonStatus}
        clickFunction = {moveToLaunch}
        buttonLabel = "Launch Party"
        />
        
        </div>
    )
}

export default ProgressBar; 