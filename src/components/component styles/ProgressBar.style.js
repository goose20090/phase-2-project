import styled from "styled-components";


export const StyledContainer = styled.div`

        height: 20;
        width: 70%;
        background-color: #5c1014;
        border-radius: 50px;
        margin: 5px;

`

export const StyledFiller = styled.div`

    height: 100%;
    width: ${((props)=>props.completed)}%;

    background-color: #FBC841;
    border-radius: inherit;
    text-align: right;


`

export const StyledLabel = styled.span`

        padding: 5;
        color: black;
        font-weight: bold;
        margin-right: 10px;
    
`