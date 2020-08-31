import React from "react"
import  {ThemeContext} from "./theme" // 引入父组件的Consumer容器
export default class GrandSon extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(value) => (<div style={{ color: "blue", padding: "15px 15px", border: "1px solid blue " }}>
          GrandSon:{value}
        </div>)}
      </ThemeContext.Consumer>
    )
  }
}