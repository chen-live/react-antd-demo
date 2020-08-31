import React from "react"
import Son from "./Son"
import { ThemeContext, theme } from "./theme"
export default class Parent extends React.Component {
  constructor() {
    super()
    this.toggleTheme = () => {
      console.log(this.state.theme)
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
    console.log(1);
    console.error(error, errorInfo)
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
            <div style={{ color: "red", padding: "15px 15px", border: "1px solid red " }}>
              Parent:background:{theme.background},foreground:{theme.foreground}
              <Son />
            </div>
          </ThemeContext.Provider>
        </div>
      )
    }
  }
}