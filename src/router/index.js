import React from "react"
import { Route, Switch } from "react-router-dom"
import App from "../components/App"
import SignupPage from "../components/signup/SignupPage"
import NavgationBar from "@/components/NavgationBar"
export default (
  <div>
    <NavgationBar />
    <div className="container">
      <Switch>
        <Route exact path="/" component={App}></Route>
        <Route exact path="/signup" component={SignupPage}></Route>
      </Switch>
    </div>
  </div>
)