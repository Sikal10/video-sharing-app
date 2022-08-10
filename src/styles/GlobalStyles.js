import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  a {
    text-decoration: none;
    color: inherit;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }

  ::-webkit-scrollbar {
    width: .5vw;
  }

  ::-webkit-scrollbar-button {
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
    border-radius: 100vw;
    margin-block: 0.5em;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 100vw;
    background: rgba(34, 34, 34, 0.55);
    height: 100px;
  }
`;

export default GlobalStyles;