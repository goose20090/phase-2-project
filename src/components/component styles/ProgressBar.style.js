import styled from "styled-components";


export const StyledContainer = styled.div`

        height: 20;
        width: 80%;
        background-color: white;
        border-radius: 50px;
        margin: 5px;

`

export const StyledFiller = styled.div`

    height: 100%;
    width: ${((props)=>props.completed)}%;

    background-color: brown;
    border-radius: inherit;
    text-align: right;


`

export const StyledLabel = styled.span`

        padding: 5;
        color: white;
        font-weight: bold;
    
`