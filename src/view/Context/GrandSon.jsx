import React from "react"
import { Consumer } from "./Parent"
export default class GrandSon extends React.Component {
  render() {
    return (
      <Consumer>
        {(value) => (<div style={{ color: "blue", padding: "15px 15px", border: "1px solid blue " }}>
          GrandSon:{value}
        </div>)}
      </Consumer>
    )
  }
}