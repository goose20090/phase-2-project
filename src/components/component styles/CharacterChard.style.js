import styled from "styled-components";
import CharacterCard from "../CharacterCard";

export const StyledCharacterCard = styled(CharacterCard)`
    width: fit-content;
    height: fit-content;
    background-color: #FBC841;
    float: left;
    margin-left: 5px;
    padding-left: 5px;

    span {
        float: right; 
        cursor: pointer;
    }
`