import React from "react";
import { useLocation } from "react-router-dom";
import { StyledNavLink } from "./component styles/NavBar.style";

function NavBar({className}){

    const location = useLocation()


    return(
        <div className={className}>
            {location.pathname === "/launch"? null: 
            
            <div>
                <h1>Middle Earth Party Builder</h1>
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
            </div>}
            
        </div>
    )
}

export default NavBar