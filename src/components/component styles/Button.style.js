import styled from "styled-components";
import Button from "../Button";

export const StyledButton = styled(Button)`

// Button styled using following template: https://codepen.io/manelsworld/pen/YvPVaw

  margin: 10px auto;
  width: 100px;
  letter-spacing: 2px;
  border-radius: 8px;
  font-family: 'Skranji', cursive;
  color: #ffc000;
  font-size: 18px;
  font-weight: 400;
  text-shadow: 0 1px 3px #000;
  text-align: center;
  padding: 10px 0;
  background: radial-gradient(circle, #8b0000, #8b0000);
  border-top: 4px ridge #ffb000;
  border-left: 4px groove #ffb000;
  border-right: 4px ridge #ffb000;
  border-bottom: 4px groove #ffb000;
  box-shadow: inset 0px 0px 5px 3px rgba(1,1,1,0.3);


&:hover{
  background: radial-gradient(circle, #e52b2b, #8b0000);
  box-shadow: 0px 0 5px 5px rgba(255,255,255,0.2)
}

&:active{
  background: radial-gradient(circle, #ec6a6a, #e52b2b);
  box-shadow: 0px 0 5px 5px rgba(255,255,255,0.2)
}

`

export const ButtonLabel = styled.label`


    letter-spacing: 2px;
    font-family: 'Skranji', cursive;
    color: #ffc000;
    font-size: 26px;
    font-weight: 400;
    text-shadow: 0 1px 3px #000;
    text-align: center;


`

