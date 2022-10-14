import '../css/App.css';
import {StyledNavBar} from "./component styles/NavBar.style"
import SuggestionsList from './SuggestionsList';
import {Route, Switch} from "react-router-dom";
import Party from './Party';
import {MainAppContainer} from "./component styles/MainAppContainer.style"
import {GlobalStyles} from "../GlobalStyles.style"
import CharacterFinder from './CharacterFinder';
import React, {useEffect, useState} from 'react';
import Home from './Home';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {StyledLaunchPage} from './component styles/LaunchPage.style'

function App() {


  // State for Form Component

  const initialState = {
    name: ""
}

  const [formData, setFormData] = useState(initialState)

  const [finderCards, setFinderCards] = useState([])

  // State for Party Component

  const [partyCards, setPartyCards] = useState([])

  // GET Request for Party Component

  useEffect(()=>{fetch ("https://partybuilderjsonserver.herokuapp.com/party")
    .then(res=> res.json())
    .then(res=>setPartyCards(res))}, [partyCards])


  //Change Handler for ControlledForm

  function handleChange(e){
    setFormData({
        ...formData,
        [e.target.name]: `${e.target.value}`
    })
  } 

  // State for Progress Bar Component

  const [progress, setProgress] = useState(partyCards.length)

  // Function to set Progress Bar percentage (called in useEffect on App's first load, handleAddToParty and handlePartyCardDelete)

  function setProgressBarPercentage(){
    console.log('progressbar setter triggered')
    fetch("https://partybuilderjsonserver.herokuapp.com/party")
    .then(res=>res.json())
    .then(res=>{
      let percentageProgress = Math.round((res.length / 9) * 100)
    console.log(percentageProgress)
    setProgress(percentageProgress)
    if(percentageProgress === 100){
      setButtonStatus(false)
    }
    else setButtonStatus(true)
    })
  }
  useEffect(()=> {
    setProgressBarPercentage()
  }, [])

  const [buttonStatus, setButtonStatus]= useState(true)


// Capitalise form Data to prepare GET request to API

function capitaliseString(string){
  const words = string.split(" ");
  for (let i = 0; i < words.length; i++){
    if (words[i].length === 2){
      words[i].toUpperCase()
    }
    else if (words[i] === "and" || words[i] ==="in" || words[i] === "the"){
      words[i].toLowerCase()
    }
    else {words[i]= words[i][0].toUpperCase() + words[i].substr(1).toLowerCase()}
  }

  return words.join(" ")

}

// GET request for Form Submit


function handleSubmit(e){
  e.preventDefault()

  let capFormData = capitaliseString(formData.name)

  fetch(`https://the-one-api.dev/v2/character?name=${capFormData}`,{
      method: "GET",
      headers:{
          'Accept': 'application/json',
          'Authorization': 'Bearer DXTHdjzueNO5IyvdtUYC'
      }
      })
      .then(res=> res.json())
      .then((res)=>{
          console.log(res);
          res.docs.length ? setFinderCards([...finderCards, res.docs[0]]) : showToastErrorMessage("No matching character found!")
          setProgressBarPercentage();
          setFormData(initialState);
      })
}

// Toast notifications

function showToastErrorMessage(message){
  toast.error(message, {position: toast.POSITION.BOTTOM_LEFT,
  className: "removing-toast"})
}

function showToastSuccessMessage(message){
  toast.success(message, {position: toast.POSITION.BOTTOM_LEFT,
    className: "adding-toast"
  })
}




// Card deletion for "X" clicks

function handleFinderCardDelete(card, e){
  const updatedCards = finderCards.filter((finderCard)=> finderCard.name !== card.name)
  setFinderCards(updatedCards)
}

function handlePartyCardDelete(card, e){

  if (card.name === "Frodo Baggins"){
    showToastErrorMessage("Frodo is the ring bearer! He must be in your party.")
  }
  else{
    fetch(`https://partybuilderjsonserver.herokuapp.com/party/${card.id}`,{
      method: "DELETE"
    })
    .then((res)=> {
      console.log(res);
      const updatedCards = partyCards.filter((partyCard)=> partyCard.name !== card.name);
      setPartyCards(updatedCards);
      setProgressBarPercentage();
      showToastErrorMessage(`${card.name} has been removed from your party`)
    });
    
    
    
    
  }
}


// POST request to add party members to json server
  
function handleAddToParty(card){

  console.log(partyCards)

  let existingCard = partyCards.find((partyCard)=> partyCard.name === card.name)
  if (existingCard){
    showToastErrorMessage(`${existingCard.name} is already in your party!`)
  }
  else if (progress === 100){

    showToastErrorMessage("Your party is full!")
  }

  else {
  fetch("https://partybuilderjsonserver.herokuapp.com/party"
  , {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(card)
  })
  .then(res=>res.json())
  .then((res)=> {
    console.log(res)
    handleFinderCardDelete(card);
    setProgressBarPercentage();
    showToastSuccessMessage(`${res.name} has been added to your party!`)
  })
}
}



  return (
    <MainAppContainer>
      <GlobalStyles/>
      <StyledNavBar/>
      <Switch>
        <Route exact path = "/party">
          <Party partyCards = {partyCards} setPartyCards = {setPartyCards} handleCardDelete= {handlePartyCardDelete} progress = {progress} buttonStatus = {buttonStatus}/>
        </Route>
        <Route exact path = "/finder">
          <CharacterFinder progress = {progress} cards = {finderCards} handleChange = {handleChange} handleSubmit= {handleSubmit} formData = {formData} handleAddToParty={handleAddToParty} handleCardDelete = {handleFinderCardDelete} buttonStatus = {buttonStatus}/>
        </Route>
        <Route exact path = "/suggestions">
          <SuggestionsList/>
        </Route>
        <Route exact path = "/launch">
          <StyledLaunchPage/>
        </Route>
        <Route path = "/">
          <Home/>
        </Route>
      </Switch>
      <ToastContainer/>
    </MainAppContainer >
  );
}

export default App;
