import React from "react";



function ProgressBar({completed, className, buttonStatus}){

    return(
        <div className={className}>
        <div className= "container">
            <div className = "filler" completed = {completed}>
                <span>{`${completed}%`} </span>
            </div>
        </div>
        <button
        disabled = {buttonStatus}
        onClick= {event=> window.location.href= '/launch'}
        >Launch Party</button>
        
        </div>
    )
}

export default ProgressBar; 