import styled from "styled-components";
import CharacterCard from "../CharacterCard";

export const StyledCharacterCard = styled(CharacterCard)`
    width: 236px;
    height: 180px;
    background-color: #FBC841;
    margin-left: 5px;
    padding-left: 5px;
    display: inline-block;
    overflow: auto;

    ::-webkit-scrollbar{
        display: none;

    }

    span {
        float: right; 
        cursor: pointer;
    }
    h1{
        margin-top: 2px;
    }
`