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
            return (<div style={
              { background: theme.background, color: theme.color, userSelect: "none" }
            }>
              <span onClick={toggleTheme} style={{color:"red"}}>son:click me to change theme;</span> <br/>background:{theme.background}
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