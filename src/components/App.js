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

function handleFinderCardDelete(card, e){
  const updatedCards = finderCards.filter((finderCard)=> finderCard.name !== card.name)
  setFinderCards(updatedCards)
}

function handlePartyCardDelete(card, e){
  fetch(`http://localhost:3000/party/${card.id}`,{
    method: "DELETE"
  })
  .then(res=> console.log(res));
  const updatedCards = partyCards.filter((partyCard)=> partyCard.name !== card.name);
  setPartyCards(updatedCards);
}


// POST request to add party members to json server
  
function handleAddToParty(card){
  fetch("http://localhost:3000/party"
  , {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(card)
  })
  .then(res=>res.json())
  .then(res=> console.log(res))
}









  return (
    <Container>
      <GlobalStyles/>
      <NavBar/>
      <Switch>
        <Route exact path = "/party">
          <Party partyCards = {partyCards} setPartyCards = {setPartyCards} handleCardDelete= {handlePartyCardDelete}/>
        </Route>
        <Route exact path = "/finder">
          <CharacterFinder cards = {finderCards} handleChange = {handleChange} handleSubmit= {handleSubmit} formData = {formData} handleAddToParty={handleAddToParty} handleCardDelete = {handleFinderCardDelete}/>
        </Route>
      </Switch>
    </Container >
  );
}

export default App;
