import React from "react"
import Home from "./children/Home"
import About from "./children/About"
import Inbox from "./children/Inbox"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
export default class App extends React.Component {
  render() {
    return (
      <Router>
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
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/inbox" component={Inbox} />
      </Router>
    )
  }
}