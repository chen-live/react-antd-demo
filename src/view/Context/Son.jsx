import React from "react"
// import GrandSon from "./GrandSon"
import { ThemeContext } from "./theme" // 引入父组件的Consumer容器
export default class Son extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  increaseHandler() {
    const newVal = this.state.count + 1;
    this.setState({
      count: newVal
    })
  }
  render() {
    return (
      <div>
        <ThemeContext.Consumer>
          {/* Consumer容器，可以拿到上下文提供的值，需要用函数去渲染 */}
          {({ theme, toggleTheme }) => {
            return (<div style={{ color: "green", padding: "15px 15px", border: "1px solid green " }}>
              <span onClick={toggleTheme}>son:click me to change theme;</span> background:{theme.background},foreground:{theme.foreground}
              {/* <GrandSon /> */}
            </div>)
          }
          }
        </ThemeContext.Consumer >
        <div onClick={this.increaseHandler.bind(this)}>
          {this.state.count}
        </div>
      </div>
    )
  }
}
Son.contextType = ThemeContext