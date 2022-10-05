import React from "react";
import {StyledSubContainer} from "../components/component styles/SubContainer.style"
import {StyledList, StyledListItem} from "../components/component styles/List.style"


function SuggestionsList({className}){

    const characterArr = ["Aragorn II Elessar", "Arwen", "Balin", "Bard", "Beorn", "Beren", "Bilbo Baggins", "Boromir", "Celeborn", "Celebrimbor", "Denethor II", "Eärendil", "Elwing", "Elendil", "Elrond", "Éomer", "Éowyn", "Faramir", "Fëanor", "Fíli and Kíli", "Fingolfin", "Finrod", "Frodo Baggins", "Galadriel", "Gandalf", "Gil-galad", "Glorfindel", "Gimli", "Goldberry", "Gollum", "Gríma Wormtongue", "Húrin", "Idril", "Isildur", "Legolas", "Lúthien", "Maedhros", "Melian", "Meriadoc Brandybuck", "Morgoth", "Peregrin Took", "Radagast", "Samwise Gamgee", "Saruman", "Sauron", "Shelob", "Smaug", "Théoden", "Thingol", "Thranduil", "Thorin II Oakenshield", "Tom Bombadil", "Treebeard", "Tuor", "Túrin", "Ungoliant", "Watcher in the Water"]
    return (
        <div>
            <h1>Search Suggestions</h1>
            <p>Accents and Epiphets must be exact</p>
            <StyledSubContainer className={className}>
                <StyledList>
                    {characterArr.map((character)=> <StyledListItem>{character}</StyledListItem>)}
                </StyledList>
            </StyledSubContainer>
        </div>
    )}

    export default SuggestionsList;