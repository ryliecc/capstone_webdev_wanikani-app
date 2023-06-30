import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: transparent;
  }

  body {
    margin: 0;
    font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;
