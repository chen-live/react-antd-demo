import React from "react"
import Home from "./children/Home"
import About from "./children/About"
import Inbox from "./children/Inbox"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      lists: [1000, 1100, 1234]
    }
  }
  render() {
    const linkList = this.state.lists.map(item => <Link key={item} to={`/about/${item}/${item}`}>{item}<br/></Link>)
    return (
      <Router>
        {linkList}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/inbox">Inbox</Link>
          </li>
        </ul>
        <Route path="/" component={Home} exact />
        <Route path="/about/:tel?/:id?" component={About} />
        <Route path="/inbox" component={Inbox} />
      </Router>
    )
  }
}