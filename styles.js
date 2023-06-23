import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }

  .vocabulary-list {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }

  .vocabulary-item {
    display: flex;
    justify-content: space-between;
    
  }

  .vocabulary-item > span {
    width: 33%;
    border: 1px solid black;
    text-align: center;
  }
`;
