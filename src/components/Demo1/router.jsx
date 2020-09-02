import { HashRouter, Route, Switch } from "react-router-dom"
import React from "react"
import Home from "./Home"
import Parent from "./parent"
export default class Router extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/parent" component={Parent}></Route>
        </Switch>
      </HashRouter>
    )
  }
}