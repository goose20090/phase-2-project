import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){
    return(
        <>
            <h1>LOTR APP</h1>
            <NavLink
            to= "/"
            exact>
                Home
            </NavLink>
            <NavLink
            to= "/characters"
            exact>
                Characters
            </NavLink>
            <NavLink
            to= "/quotes"
            exact>
                Quotes
            </NavLink>
        </>
    )
}

export default NavBar