import '../css/App.css';
import NavBar from './NavBar';
import {Route, Switch} from "react-router-dom";
import Party from './Party';
import {Container} from "./component styles/Container.style"
import {GlobalStyles} from "../GlobalStyles.style"
import CharacterFinder from './CharacterFinder';
import React, {useState} from 'react';

function App() {


  // State for Form Component

  const initialState = {
    name: "",
    race: ""
}

  const [formData, setFormData] = useState(initialState)

  const [finderCards, setFinderCards] = useState([])

  // State for Party Component

  const [partyCards, setPartyCards] = useState([])


  //Change Handler for ControlledForm

  function handleChange(e){
    setFormData({
        ...formData,
        [e.target.name]: `${e.target.value}`
    })
}

// GET request for Form Submit


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
          console.log(res);
          res.docs.length ? setFinderCards([...finderCards, res.docs[0]]) : console.log('no matching character')
      })
}

// Card deletion for "X" clicks

function handleCardDelete(e){
  let clickedCard = e.target.parentNode.childNodes[1].textContent
  const updatedCards = finderCards.filter((card)=> clickedCard !== card.name)
  setFinderCards(updatedCards)
}

  
  function handleAddToParty(card){
    console.log(card)
  }









  return (
    <Container>
      <GlobalStyles/>
      <NavBar/>
      <Switch>
        <Route exact path = "/party">
          <Party partyCards = {partyCards} setPartyCards = {setPartyCards}/>
        </Route>
        <Route exact path = "/finder">
          <CharacterFinder cards = {finderCards} handleChange = {handleChange} handleSubmit= {handleSubmit} formData = {formData} handleAddToParty={handleAddToParty} handleCardDelete = {handleCardDelete}/>
        </Route>
      </Switch>
    </Container >
  );
}

export default App;
