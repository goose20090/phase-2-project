import React from "react";
import { StyledFinderContainer } from "./component styles/FinderContainer.style";

function CharacterFinder({handleAddToParty, handleChange, handleSubmit, formData, cards, handleCardDelete}){
    return(
        <div>
            <h1>Character Finder Component</h1>
            <StyledFinderContainer cards = {cards} handleAddToParty={handleAddToParty} handleChange = {handleChange} handleSubmit= {handleSubmit} formData = {formData} handleCardDelete= {handleCardDelete}/>
        </div>
    )
}

export default CharacterFinder;