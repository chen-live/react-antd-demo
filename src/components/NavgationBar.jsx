import React from "react"
import { NavLink } from "react-router-dom"
import "./NavgationBar.css"
class NavgationBar extends React.Component {
  render() {
    return (
      <div className="container_home">
        <NavLink exact className="btn_login" activeClassName="active_btn" to="/">login switch</NavLink>
        <NavLink exact className="btn_register" activeClassName="active_btn" to="/signup">register</NavLink>
      </div>
    )
  }
}
export default NavgationBar