import React from "react";
import { StyledProgressBar } from "./component styles/ProgressBar.style";
import FinderContainer from "./FinderContainer";


function CharacterFinder({handleAddToParty, handleChange, handleSubmit, formData, cards, handleCardDelete, progress, buttonStatus}){
    return(
        <div>
            <h1>Find Your Party</h1>
            <FinderContainer cards = {cards} handleAddToParty={handleAddToParty} handleChange = {handleChange} handleSubmit= {handleSubmit} formData = {formData} handleCardDelete= {handleCardDelete}/>
            <StyledProgressBar completed = {progress} buttonStatus= {buttonStatus}/>
        </div>
    )
}

export default CharacterFinder;