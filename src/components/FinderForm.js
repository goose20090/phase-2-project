import React from "react";

function FinderForm({className, handleChange, handleSubmit, formData}){

    return (
            <form className = {className} onSubmit = {handleSubmit}>
                <input onChange = {handleChange} type= "text" name = "name" value = {formData.name} placeholder="Type a name"></input>
                <button type = "submit" value = "Submit">Submit</button>
            </form>
    )
}

export default FinderForm;