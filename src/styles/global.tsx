import { theme } from '.'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline:none;
  }
  body {
    background-color: ${theme.colors.gray900};
    color: ${theme.colors.gray100};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing:grayscale
  }
  body, input, textarea, button {
    font-family: ${theme.fonts.roboto};
    font-weight: 400;
  }
`
