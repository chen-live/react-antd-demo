import React from "react"
export default class About extends React.Component {
  render() {
    const { tel } = this.props.match.params;
    return (
      <div>
        About:{tel && tel}
      </div>
    )
  }
}