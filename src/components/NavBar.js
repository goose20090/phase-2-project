import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    const linkStyles = {
        display: "inline-block",
        width: "80px",
        padding: "12px",
        margin: "0 100px 6px",
        background: "#DC824F",
        textDecoration: "none",
        color: "white",
      }
    return(
        <>
            <h1>LOTR APP</h1>
            <NavLink
            to= "/"
            exact
            
            style = {linkStyles}
            
            activeStyle = {{
                background: "#5c1014",
            }}
            >
                Home
            </NavLink>
            <NavLink
            to= "/party"
            exact
            
            style = {linkStyles}
            
            activeStyle = {{
                background: "#5c1014",
            }}
            >
                Party
            </NavLink>
            <NavLink
            to= "/finder"
            exact
            
            style = {linkStyles}
            
            activeStyle = {{
                background: "#5c1014",
            }}
            >
                Character Finder
            </NavLink>
        </>
    )
}

export default NavBar