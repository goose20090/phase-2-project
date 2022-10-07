import React from "react";
import {StyledSubContainer} from "../components/component styles/SubContainer.style"
import {StyledList, StyledListItem} from "../components/component styles/List.style"
import {ToastContainer, toast} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


function SuggestionsList({className}){

    const characterArr = ["Aragorn II Elessar", "Arwen", "Balin", "Bard", "Beorn", "Beren", "Bilbo Baggins", "Boromir", "Celeborn", "Celebrimbor", "Denethor II", "Eärendil", "Elwing", "Elendil", "Elrond", "Éomer", "Éowyn", "Faramir", "Fëanor", "Fíli and Kíli", "Fingolfin", "Finrod", "Frodo Baggins", "Galadriel", "Gandalf", "Gil-galad", "Glorfindel", "Gimli", "Goldberry", "Gollum", "Gríma Wormtongue", "Húrin", "Idril", "Isildur", "Legolas", "Lúthien", "Maedhros", "Melian", "Melkor", "Meriadoc Brandybuck", "Peregrin Took", "Radagast", "Samwise Gamgee", "Saruman", "Sauron", "Shelob", "Smaug", "Théoden", "Thingol", "Thranduil", "Thorin II Oakenshield", "Tom Bombadil", "Treebeard", "Tuor", "Túrin", "Ungoliant", "Watcher in the Water"]

    function copyName(e){
        let name = e.target.textContent;
        navigator.clipboard.writeText(name)
        toast.success(`"${name}" copied to clipboard`, {position: toast.POSITION.BOTTOM_RIGHT})
        console.log("Copied the text:" + name)

    }
    return (
        <div>
            <h1>Search Suggestions</h1>
            <StyledSubContainer className={className}>
                <StyledList>
                    {characterArr.map((character)=> <StyledListItem key = {character} onClick={copyName}>{character}</StyledListItem>)}
                </StyledList>
            </StyledSubContainer>
            <ToastContainer/>
        </div>
    )}

    export default SuggestionsList;