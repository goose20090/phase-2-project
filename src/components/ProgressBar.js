import React from "react";

import { StyledContainer, StyledFiller, StyledLabel } from "./component styles/ProgressBar.style";

function ProgressBar({completed, className}){

    return(
        <StyledContainer className= {className}>
            <StyledFiller completed = {completed}>
                <StyledLabel>{`${completed}%`} </StyledLabel>
            </StyledFiller>
        </StyledContainer>
    )
}

export default ProgressBar; 