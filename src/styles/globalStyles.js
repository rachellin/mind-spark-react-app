import { createGlobalStyle} from "styled-components";
import { lightTheme, darkTheme } from './themes'

// export const GlobalStyles = createGlobalStyle`
//   body {
//     background: ${lightTheme.background};
//     color: ${lightTheme.color};
//     font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
//     transition: all 0.50s linear;
//   }
// `

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    box-sizing: border-box;
  }
`;