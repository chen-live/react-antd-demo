import React from "react"
import { Router, Route, Link } from "react-router-dom"
export default class User extends React.Component {
  constructor() {
    super()
    this.state = {
      users: [
        { id: 123, name: "红红" },
        { id: 223, name: "兰兰" },
        { id: 333, name: "还好" },
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>Users</h1>
        Router
        <div className="detail">
          {this.props.children}
        </div>
      </div>
    )
  }

}