import React from "react"
import Son from "./Son"
import { ThemeContext, theme } from "./theme"
export default class Parent extends React.Component {
  constructor() {
    super()
    this.toggleTheme = () => {
      this.setState(state => ({
        theme: state.theme === theme.dark ? theme.light : theme.dark
      }))
    }
    this.state = {
      theme: theme.dark,
      toggleTheme: this.toggleTheme,
      hasError: false,
      error: {
        error: null,
        errorInfo: null,
      }
    }
  }
  componentDidCatch(error, errorInfo) {
    return { hasError: true, error: { error: error, errorInfo: errorInfo } }
  }
  render() {
    const { theme } = this.state
    if (this.state.hasError) {
      return <div>出错啦!</div>
    } else {
      return (
        <div>
          <ThemeContext.Provider value={{ theme: this.state.theme, toggleTheme: this.state.toggleTheme }}>
            <div style={{ color: theme.color, padding: "15px 15px", background: theme.background }}>
              Parent:background:{theme.background}
              <Son />
            </div>
          </ThemeContext.Provider>
        </div>
      )
    }
  }
}