import React from "react"
import store from "./index"
export default class ReduxDemo extends React.Component {
  constructor() {
    super()
    this.state = {
      count: store.getState()
    }
    this.increaseHandler = this.increaseHandler.bind(this);
    this.decreaseHandler = this.decreaseHandler.bind(this);
  }
  increaseHandler() {
    store.dispatch({
      type: "INCREMENT"
    })
    this.setState({
      count: store.getState()
    })
  }
  decreaseHandler() {
    store.dispatch({
      type: "DECREMENT"
    })
    this.setState({
      count: store.getState()
    })
  }
  render() {
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>{store.getState()}</h2>
        <div style={{ textAlign: "center" }}>
          <button onClick={this.increaseHandler}>increase</button>
          <button onClick={this.decreaseHandler}>decrease</button>
        </div>
      </div>
    )
  }
}