import React from "react"
export const theme = {
  light: {
    foreground: "#000000",
    background: "#ffffff",
  },
  dark: {
    foreground: "#ffffff",
    background: "#000000"
  }
}
export const ThemeContext = React.createContext({
  theme: theme.dark,
  toggleTheme: () => {
    console.log(theme)
  }
})