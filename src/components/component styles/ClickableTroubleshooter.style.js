import styled from "styled-components";
import ClickableTroubleshooter from "../ClickableTroubleshooter";

export const StyledTroubleshooter = styled(ClickableTroubleshooter)`

float: bottom;

h3 {
    margin: 10px;
    color: blue;
    text-decoration: underline;
    font-size: 22px;
    :hover{
        cursor: pointer;
    }
}

p{
    transition: opacity 1s;
    margin: 10px;
    font-size: 20px;
}

p.fade-out{
    opacity: 0;
}

    
`