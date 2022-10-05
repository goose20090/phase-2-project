import React from "react";
import FinderContainer from "./FinderContainer";

function CharacterFinder({handleAddToParty, handleChange, handleSubmit, formData, cards, handleCardDelete}){
    return(
        <div>
            <h1>Character Finder Component</h1>
            <FinderContainer cards = {cards} handleAddToParty={handleAddToParty} handleChange = {handleChange} handleSubmit= {handleSubmit} formData = {formData} handleCardDelete= {handleCardDelete}/>
        </div>
    )
}

export default CharacterFinder;