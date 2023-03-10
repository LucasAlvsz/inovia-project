import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
    *{
        outline: 0;
        padding: 0;
        border: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        
        button {
            cursor: pointer;
        }

    }

    :root {
        
        font-size: 62.5%;
        font-family: 'Roboto', sans-serif;

    }
 
`
