import React from "react"
import { Route, Link } from "react-router-dom"
export default class Inbox extends React.Component {
  render() {
    return (
      <div>
        Inbox
        <ul>
          <li><Link to={`${this.props.match.url}/components`}>Components</Link></li>
          <li><Link to={`${this.props.match.url}/props-v-state`}>Props .V state</Link></li>
        </ul>
        <Route path={`${this.props.match.path}/:Id?`} exact component={Topic} />
        {/* <Route path={`${this.props.match.path}`} exact render={() => <h3>please select a topic</h3>} /> */}
      </div>
    )
  }
}
function Topic(props) {
  const { Id } = props.match.params
  return (
    <h2>
      {Id ? "your id is " + Id : "please select a topic"}
    </h2>
  )
}