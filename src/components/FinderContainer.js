import React, {useState} from "react";
import { StyledFinderForm } from "./component styles/FinderForm.style";
import { StyledCharacterCard } from "./component styles/CharacterChard.style";

function FinderContainer({className, handleAddToParty, handleChange, handleSubmit, formData, cards, handleCardDelete}){

    return(
        <div className={className}>
            <h1>Find Your Party</h1>
            <StyledFinderForm  formData = {formData} handleChange= {handleChange} handleSubmit= {handleSubmit}/>
            {cards.map((card)=> <StyledCharacterCard key = {card._id} handleCardDelete= {handleCardDelete} card = {card} handleAddToParty = {handleAddToParty}/>)} 
        </div>
    )
}

export default FinderContainer;