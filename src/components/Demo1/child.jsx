import React from "react"
export default class Child extends React.PureComponent {
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, nextState, this.props.num)
    if (nextProps.num === this.props.num) { return false } else return true
  }
  render() {
    return (
      <div>
        child:{this.props.num}
      </div>
    )
  }
}