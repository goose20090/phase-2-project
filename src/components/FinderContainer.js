import React, {useState} from "react";
import { StyledSubContainer } from "./component styles/SubContainer.style";
import {StyledFinderForm} from "./component styles/FinderForm.style"
import { StyledCharacterCard } from "./component styles/CharacterChard.style";
import { StyledTroubleshooter } from "./component styles/ClickableTroubleshooter.style";

function FinderContainer({className, handleAddToParty, handleChange, handleSubmit, formData, cards, handleCardDelete, }){

    return(
        <StyledSubContainer className={className}>
            <h2>Search for your favourite character</h2>
            <StyledFinderForm  formData = {formData} handleChange= {handleChange} handleSubmit= {handleSubmit}/>
            {cards.map((card)=> <StyledCharacterCard key = {card._id} height = { "fit-to-content"}handleCardDelete= {handleCardDelete} card = {card} handleAddToParty = {handleAddToParty}/>)} 
            <StyledTroubleshooter/>
        </StyledSubContainer>
    )
}

export default FinderContainer;