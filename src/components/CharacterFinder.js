import React from "react";
import FinderContainer from "./FinderContainer";
import ProgressBar from "./ProgressBar";

function CharacterFinder({handleAddToParty, handleChange, handleSubmit, formData, cards, handleCardDelete, progress}){
    return(
        <div>
            <h1>Character Finder Component</h1>
            <FinderContainer cards = {cards} handleAddToParty={handleAddToParty} handleChange = {handleChange} handleSubmit= {handleSubmit} formData = {formData} handleCardDelete= {handleCardDelete}/>
            <ProgressBar completed = {progress}/>
        </div>
    )
}

export default CharacterFinder;