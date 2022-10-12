import styled from "styled-components";
import LaunchPage from "../LaunchPage";

export const StyledLaunchPage = styled(LaunchPage)`

    ul {
        font-size: 50px;
        list-style: none;
        margin-left: 33%;
        transition: opacity 2s;

    }

    h1{
        margin-left: 10%;
    }

    h2{
        margin-left: 66%;
        font-size: 30px;
    }

    h3{
        font-size: 50px;
        margin-left: 23%;
    }

    .visible{
        animation: fadein 2s;
    }
    .not-visible{
        opacity: 0;

    }




    @keyframes fadein{
        from {opacity: 0;}
        to {opacity: 1;}
    }
`