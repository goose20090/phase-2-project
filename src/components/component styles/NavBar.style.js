import styled from "styled-components";
import NavBar from "../NavBar";
import { NavLink } from "react-router-dom";

export const StyledNavBar = styled(NavBar)`

`

export const StyledNavLink = styled(NavLink)`




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

  box-shadow: inset 0px 0px 5px 3px rgba(1,1,1,0.3);

  &:hover{
  background: radial-gradient(circle, #e52b2b, #8b0000);
  box-shadow: 0px 0 5px 5px rgba(255,255,255,0.2)
}


`

