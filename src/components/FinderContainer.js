import React, {useState} from "react";
import { StyledFinderForm } from "./component styles/FinderForm.style";
import { StyledCharacterCard } from "./component styles/CharacterChard.style";

function FinderContainer({className}){

    const initialState = {
        name: "",
        race: ""
    }

    const [formData, setFormData] = useState(initialState)

    const [cards, setCards] = useState([])

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
            .then((res)=>{
                res.docs.length ? setCards([...cards, res.docs[0]]) : console.log('no matching character')
            })
    }

    return(
        <div className={className}>
            <h1>Find Your Party</h1>
            <StyledFinderForm initialState = {initialState} formData = {formData} handleChange= {handleChange} handleSubmit= {handleSubmit}/>
            {cards.map((card)=> <StyledCharacterCard key = {card._id} card = {card}/>)} 
        </div>
    )
}

export default FinderContainer;