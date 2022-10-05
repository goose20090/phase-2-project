import styled from "styled-components";
import CharacterCard from "../CharacterCard";

export const StyledCharacterCard = styled(CharacterCard)`
    width: fit-content;
    height: fit-content;
    background-color: #FBC841;
    margin-left: 5px;
    padding-left: 5px;
    display: inline-block;

    span {
        float: right; 
        cursor: pointer;
    }
`