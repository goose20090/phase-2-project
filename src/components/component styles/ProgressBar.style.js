import ProgressBar  from "../ProgressBar";
import styled from "styled-components";

export const StyledProgressBar = styled(ProgressBar)`

.container{
        height: 20;
        width: 70%;
        background-color: #5c1014;
        border-radius: 50px;
        margin: 5px;
        display: inline-block;

}

.filler{
        height: 100%;
    width: ${((props)=>props.completed)}%;

    background-color: #FBC841;
    border-radius: inherit;
    text-align: right;
    transition: width 1s ease-in-out;

}

span{
        padding: 5;
        color: black;
        font-weight: bold;
        margin-right: 10px;
}

button{


        display: inline-block;
        margin-left: 2.5%;
}
`
