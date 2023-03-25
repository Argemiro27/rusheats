import { createGlobalStyle } from "styled-components"

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: 'Play', sans-serif;
  }
  h1{
    font-family: 'Merienda', cursive;
  }

`

export const colors = {
    primary: "#de8304",
    secondary: "#ffc107",
    button: "#4a2b64",
    third: "#ffb74d",
    thirdLight: "#ffe9ca",
    white: "#ffffff",
    black: "#000000",
    success: "#50ba9e",
    danger: "#660000",
};