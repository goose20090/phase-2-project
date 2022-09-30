import React from "react";

function ProgressBar({bgcolor, completed}){

    const containerStyles = {
        height: 20,
        width: "80%",
        backgroundColor: "blue",
        borderRadius: 50,
        margin: 5
    }

    const fillerStyles = {
        height: "100%",
        width: `${completed}%`,
        backgroundColor: bgcolor,
        borderRadius: "inherit",
        textAlign: "right"
    }

    const labelStyles ={
        padding: 5,
        color: "white",
        fontWeight: "bold"
    }

    return(
        <div style={containerStyles}>
            <div style = {fillerStyles}>
                <span style = {labelStyles}>{`${completed}%`}</span>
            </div>
        </div>
    )
}

export default ProgressBar; 