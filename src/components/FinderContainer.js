import React from "react";
import { StyledFinderForm } from "./component styles/FinderForm.style";

function FinderContainer({className}){



    return(
        <div className={className}>
            <h1>Find Your Party</h1>
            <StyledFinderForm/>
        </div>
    )
}

export default FinderContainer;