import { useContext } from "react";
import { ThemeContext } from "../context";
import { createGlobalStyle } from "styled-components";


const StyledGlobalStyle = createGlobalStyle`
    * {
        font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }

    body {
      margin: 0;
      background-color: ${({isDarkMode}) => (isDarkMode ? 'black' : 'white')};
    }
`

function GlobalStyle() {
    const { theme } = useContext(ThemeContext)
    return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle