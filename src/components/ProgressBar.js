import React from "react";

function ProgressBar({bgcolor, completed, className, StyledContainer}){

    // const containerStyles = {
    //     height: 20,
    //     width: "80%",
    //     backgroundColor: "blue",
    //     borderRadius: 50,
    //     margin: 5
    // }

    // const fillerStyles = {
    //     height: "100%",
    //     width: `${completed}%`,
    //     backgroundColor: bgcolor,
    //     borderRadius: "inherit",
    //     textAlign: "right"
    // }

    // const labelStyles ={
    //     padding: 5,
    //     color: "white",
    //     fontWeight: "bold"
    // }

    return(
        <div className= {className}>
            <div>
                <div>
                    <span>{`${completed}%`} </span>
                </div>
            </div>
        </div>
    )
}

export default ProgressBar; 