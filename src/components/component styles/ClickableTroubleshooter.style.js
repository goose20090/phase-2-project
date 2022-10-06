import styled from "styled-components";
import ClickableTroubleshooter from "../ClickableTroubleshooter";

export const StyledTroubleshooter = styled(ClickableTroubleshooter)`

float: bottom;

h3 {
    margin: 10px;
    color: blue;
    text-decoration: underline;
    :hover{
        cursor: pointer;
    }
}

p{
    transition: opacity 0.2s;
    margin: 10px;

}

p.fade-out{
    opacity: 0;
}

    
`