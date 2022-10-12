import {createGlobalStyle} from "styled-components"


export const GlobalStyles = createGlobalStyle`

    @font-face {
    font-family: "kelt";
    src: url(/fonts/keltn.ttf);
    }
    body {
        font-family: 'kelt';
        background-color: lightgoldenrodyellow;
        
    }

    :root{
    --toastify-color-success: #ffc000;
    --toastify-color-error: #8b0000;
    }

`