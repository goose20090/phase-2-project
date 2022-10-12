import styled from "styled-components";
import NavBar from "../NavBar";
import { NavLink } from "react-router-dom";

export const StyledNavBar = styled(NavBar)`

/* display: "inline-block";
        width: "80px";
        padding: "12px";
        margin: "0 100px 6px";
        background: "#DC824F";
        text-decoration: "none";
        color: "white"; */

`

export const StyledNavLink = styled(NavLink)`

/* display: inline-block;
width: 80px;
padding: 12px;
margin: 0 100px 6px;
background: #8b0000;
text-decoration: none;
color: white; */


margin: 0 50px 6px;
display: inline-block;


text-decoration: none;
  width: 140px;
  letter-spacing: 2px;
  border-radius: 8px;
  font-family: 'kelt', cursive;
  color: #ffc000;
  font-size: 25px;
  font-weight: 400;
  text-shadow: 0 1px 3px #000;
  text-align: center;
  padding: 10px 0;
  background: radial-gradient(circle, #8b0000, #8b0000);
  /* border-top: 4px ridge #ffb000;
  border-left: 4px groove #ffb000;
  border-right: 4px ridge #ffb000;
  border-bottom: 4px groove #ffb000; */
  box-shadow: inset 0px 0px 5px 3px rgba(1,1,1,0.3);

  &:hover{
  background: radial-gradient(circle, #e52b2b, #8b0000);
  box-shadow: 0px 0 5px 5px rgba(255,255,255,0.2)
}


`

