import styled from "styled-components";
import LaunchPage from "../LaunchPage";

export const StyledLaunchPage = styled(LaunchPage)`




    ul {
        font-size: 50px;
        list-style: none;
        margin-left: 20%;
        transition: opacity 2s;

    }

    h2{
        margin-left: 50%
    }
    .animated{
        animation: fadein 2s;
    }
    .party-member{
        opacity: 0;

    }

    /* .partymember-0 {
        animation: fadein 2s;
    }
    .partymember-1{
        animation: fadein 4s;
    }
    .partymember-2{
        animation: fadein 6s;
    }
    .partymember-3{
        animation: fadein 8s;
    }
    .partymember-4{
        animation: fadein 10s;
    }
    .partymember-5{
        animation: fadein 12s;
    }
    .partymember-6{
        animation: fadein 14s;
    }
    .partymember-7{
        animation: fadein 16s;
    }
    .partymember-8{
        animation: fadein 18s;
    } */
    @keyframes fadein{
        from {opacity: 0;}
        to {opacity: 1;}
    }
`