import { createGlobalStyle } from "styled-components"
import { colors } from "../styles/colors";

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
    margin-bottom: 25px;
  }
  body{
    background-color: ${colors.primary};
  }
`

