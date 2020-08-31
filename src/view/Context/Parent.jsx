import React from "react"
import Son from "./Son"
export const { Provider, Consumer } = React.createContext("defaultValue")
export default class Parent extends React.Component {
  constructor() {
    super()
    this.state = {
      defaultValue: "i am defaultValue"
    }
  }
  render() {
    return (
      <Provider value={this.state.defaultValue}>
        <div style={{ color: "red", padding: "15px 15px", border: "1px solid red " }}>
          Parent:{this.state.defaultValue}
          <Son />
        </div>
      </Provider>
    )
  }
}