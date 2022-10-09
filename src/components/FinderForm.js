import React from "react";
import {StyledButton} from "./component styles/Button.style"

function FinderForm({className, handleChange, handleSubmit, formData}){

    return (
            <form className = {className}>
                <input onChange = {handleChange} type= "text" name = "name" value = {formData.name} placeholder="Type a name"></input>
                <StyledButton clickFunction={handleSubmit} buttonLabel = {"Search"} buttonStatus= {false}></StyledButton>
            </form>
    )
}

export default FinderForm;