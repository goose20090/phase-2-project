import React, { useState } from "react";

function FinderForm({className}){

    const initialState = {
        name: "",
        race: ""
    }

    const [formData, setFormData] = useState(initialState)

    function handleChange(e){
        setFormData({
            ...formData,
            [e.target.name]: `${e.target.value}`
        })
        console.log(formData)

    }

    function handleSubmit(e){
        e.preventDefault()
        fetch(`https://the-one-api.dev/v2/character?name=${formData.name}`,{
            method: "GET",
            headers:{
                'Accept': 'application/json',
                'Authorization': 'Bearer DXTHdjzueNO5IyvdtUYC'
            }
            })
            .then(res=> res.json())
            .then(res=>console.log(res))
    }


    return (
            <form className = {className} onSubmit = {handleSubmit}>
                <input onChange = {handleChange} type= "text" name = "name" value = {formData.name} placeholder="Type a name"></input>
                <select onChange = {handleChange} name = "race" value = {formData.race}>
                    <option>Human</option>
                    <option>Elf</option>
                    <option>Hobbit</option>
                </select>
                <button type = "submit" value = "Submit">Submit</button>
            </form>
    )
}

export default FinderForm;