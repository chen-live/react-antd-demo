import React from "react"
import { Provider } from "react-redux"
import store from "./store"
import Child from "./children/child"
export default class ReactReduxDemo extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Child/>
      </Provider>
    )
  }
}