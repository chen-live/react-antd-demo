import React from "react"
import { Link, NavLink } from "react-router-dom"
import "./index.css"
export default class Nav extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        <ul>
          <li>
            <NavLink exact to="/home" activeStyle={{ color: "green", fontSize: "50px" }}>Home page</NavLink>
          </li>
          <li>
            <NavLink exact to="/mine" >Mine page</NavLink>
          </li>
          <li>
            <NavLink exact to="/mine/ucenter" >Mine UCenter</NavLink>
          </li>
          <li>
            <NavLink exact to="/demo" >Demo</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}