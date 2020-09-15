import React from "react"
export const theme = {
  light: {
    background: "#000000",
    color: "#ffffff",
  },
  dark: {
    background: "#ffffff",
    color: "#000000",
  }
}
export const ThemeContext = React.createContext({
  theme: theme.dark,
  toggleTheme: () => {
    console.log(theme)
  }
})