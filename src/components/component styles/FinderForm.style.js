import styled from "styled-components";
import FinderForm from "../FinderForm";

export const StyledFinderForm = styled(FinderForm)`


    padding: 10px;
    
    input {
        margin: 10px;

        width: 40%;
        font-size: 20px;
    }

    select{
        margin: 10px;
    }

    button{
        float: right;
        height: 100px;
        width: 100px;
        margin: 10px;
        margin-right: 30%;
        border-radius: 100px;
        background-color: #5c1014;
        color: white;
    }

`