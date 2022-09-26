import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    const linkStyles = {
        display: "inline-block",
        width: "80px",
        padding: "12px",
        margin: "0 200px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
      }
    return(
        <>
            <h1>LOTR APP</h1>
            <NavLink
            to= "/party"
            exact
            
            style = {linkStyles}
            
            activeStyle = {{
                background: "darkblue",
            }}
            >
                Party
            </NavLink>
            <NavLink
            to= "/finder"
            exact
            
            style = {linkStyles}
            
            activeStyle = {{
                background: "darkblue",
            }}
            >
                Character Finder
            </NavLink>
        </>
    )
}

export default NavBar