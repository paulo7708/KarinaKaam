import { createGlobalStyle } from "styled-components";
import abstrato from '../assets/backgroundFull.png'
export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme["#fff"]};
  }

  body {

  color: white;
  background-color: #181a1b;
  -webkit-tap-highlight-color: transparent;
    
  background-image: url(${abstrato});
  background-repeat: no-repeat;
  background-size: cover;
  background-position-x: center;
    /* background-color: ${(props) => props.theme["white"]} */
  }

  

  body, input, textarea, button, a {    
    font-family: Eras;
    font-weight: 400;
    font-size: 1rem;
  }

  h1 {
    font-size: 2.7rem;
    background-image: -webkit-linear-gradient(50deg, #dab4d1, #feab3a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;  
  }
  h2 {
    font-size: 2rem;
    background-image: -webkit-linear-gradient(50deg, #dab4d1, #feab3a);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
  }
  h3 {
    font-size: 1.8rem;
    color: ${(props) => props.theme["gray-300"]} 
  }
  p {
    font-size: 1.3rem;
    color: ${(props) => props.theme["text"]}
    
  }
  

`;
