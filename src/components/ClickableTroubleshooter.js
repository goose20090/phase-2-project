import React from "react";
import {Link} from "react-router-dom"

function ClickableTroubleshooter({className}){
    function handleClick(e){
        let p = document.querySelector('#troubleshoot-content')
        p.classList.toggle('fade-out')       

    }
    return(
    <div className={className}>
        <h3 onClick={handleClick}>Having trouble finding a character?</h3>

        <p className = {'fade-out'}id = "troubleshoot-content"> 
            Spelling of the character's name, including accents and epiphets, must be exact. 

            Have a look at our <Link to= "/suggestions">Suggested Charcters List</Link> or the the <a href="https://lotr.fandom.com/wiki/Main_Page">Lord of the Rings Wiki</a> to check the right spelling.
        </p>
    </div>
)}

export default ClickableTroubleshooter;