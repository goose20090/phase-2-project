import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    const linkStyles = {
        display: "inline-block",
        width: "60px",
        padding: "12px",
        margin: "0 10px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white"
      }
    return(
        <>
            <h1>LOTR APP</h1>
            <NavLink
            to= "/aragon"
            exact
            
            style = {linkStyles}
            
            activeStyle = {{
                background: "darkblue",
            }}
            >
                Aragon
            </NavLink>
            <NavLink
            to= "/gandalf"
            exact
            
            style = {linkStyles}
            
            activeStyle = {{
                background: "darkblue",
            }}
            >
                Gandalf
            </NavLink>
            <NavLink
            to= "/frodo"
            exact
            
            style = {linkStyles}
            
            activeStyle = {{
                background: "darkblue",
            }}
            >
                Frodo
            </NavLink>
        </>
    )
}

export default NavBar