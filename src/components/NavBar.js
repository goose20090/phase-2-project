import React from "react";
import { StyledNavLink } from "./component styles/NavBar.style";

function NavBar({className}){
    return(
        <div className={className}>
            <h1>LOTR APP</h1>
            <StyledNavLink
            to= "/"
            exact
            activeStyle={{
                background: "#5c1014"
            }}
            
            >
                Home
            </StyledNavLink>
            <StyledNavLink
            to= "/party"
            exact
            activeStyle={{
                background: "#5c1014"
            }}
            
            >
                Party
            </StyledNavLink>
            <StyledNavLink
            to= "/finder"
            exact
            activeStyle={{
                background: "#5c1014"
            }}
            
            >
                Character Finder
            </StyledNavLink>
            <StyledNavLink
            to= "/suggestions"
            exact
            activeStyle={{
                background: "#5c1014"
            }}
            
            >
                Suggestions
            </StyledNavLink>
        </div>
    )
}

export default NavBar