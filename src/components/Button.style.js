import React from "react";
import styled from 'styled-components';

export const Button = styled.button`

    width: 200px;
    height: 50 px;
    background-color: ${(props) => props.backgroundColor};

    &:hover{
        & label{
            color: green;
        }
    }

`

export const ButtonLabel = styled.label`
    font-size: 25 px;
    color: white;

`
