import React from "react"

// 你可以直接获取 DOM button 的 ref：
const ref = React.createRef();
export default class Ref extends React.Component {
  constructor() {
    super()
    this.clickHandler = this.clickHandler.bind(this)
  }
  clickHandler() {
    console.log(ref.current)
  }
  render() {
    const FancyButton = React.forwardRef((props, ref) => (
      <button onClick={this.clickHandler} ref={ref} className="FancyButton">
        {props.children}
      </button>
    ));
    return (
      <div>
        <FancyButton ref={ref} >Click me!</FancyButton>
      </div>
    )
  }
}