import styled from "styled-components";
import Button from "./Button";

export const StyledButton = styled(Button)`

    width: 200px;
    height: 50px;
    background-color: ${(props)=> props.backgroundColor};

    &:active {
        background-color: coral;
    }

    &:hover{
        background-color: aquamarine;
        & label{
            color: green;
        }
    }

`

export const ButtonLabel = styled.label`

    color: white;


`

