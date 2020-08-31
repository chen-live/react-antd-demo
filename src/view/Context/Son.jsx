import React from "react"
import GrandSon from "./GrandSon"
import { Consumer } from "./Parent" // 引入父组件的Consumer容器
export default class Son extends React.Component {
  render() {
    return (
      <div>
        <Consumer>
          {/* Consumer容器，可以拿到上下文提供的值，需要用函数去渲染，不用函数的话只能拿到默认值 */}
          {(value) =>
            (<div style={{ color: "green", padding: "15px 15px", border: "1px solid green " }}>
              Son:{value}
              <GrandSon />
            </div>)
          }
        </Consumer >
      </div>
    )
  }
}