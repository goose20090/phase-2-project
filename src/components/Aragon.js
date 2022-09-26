import React from "react";
import { StyledCharacterCard } from "./CharacterChard.style";
import useQuery from "../hooks/useQuery";

function Aragon(){
    const {data: aragonCard} = useQuery("https://the-one-api.dev/v2/character?name=Aragorn II Elessar")

    return(
        <StyledCharacterCard card={aragonCard}/>
    )

}

export default Aragon;