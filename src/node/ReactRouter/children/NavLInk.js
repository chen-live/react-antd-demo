import React from "react"
import { NavLink, Route, Switch } from "react-router-dom"
export default class NL extends React.Component {
  render() {
    const ActiveStyle1 = {fontSize:"17px",color:"#111111"}
    const ActiveStyle2 = {fontSize:"20px",color:"#222222"}
    const ActiveStyle3 = {fontSize:"23px",color:"#333333"}
    const NavList = [
      { to: "/Nl1", title: "Nl1" ,ActiveStyle:ActiveStyle1},
      { to: "/Nl2", title: "Nl2" ,ActiveStyle:ActiveStyle2},
      { to: "/Nl3", title: "Nl3" ,ActiveStyle:ActiveStyle3},
    ]
    return (
      <div>
        <ul>
          {NavList.map(item => 
            (<li key={item.to}>
              <NavLink to={item.to} activeStyle={item.ActiveStyle}>{item.title}</NavLink>
              </li>)
            )}
        </ul>
        <Switch>
          <Route path="/NL1" component={NL1} />
          <Route path="/NL2" component={NL2} />
          <Route path="/NL3" component={NL3} />
        </Switch>
      </div>
    )
  }
}
function NL1() {
  return (
    <div>NL1</div>
  )
}
function NL2() {
  return (
    <div>NL2</div>
  )
}
function NL3() {
  return (
    <div>NL3</div>
  )
}