import React from "react"
function logPorps(Component) {
  class LogProps extends React.Component {
    componentDidUpdate(prevProps) {
      console.log("oldProps:", prevProps)
      console.log("newProps:", this.props)
    }
    render() {
      return <Component {...this.props} />
    }
  }
  return LogProps
}
class FancyButton extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "nae"
    }
  }
  render() {
    return (
      <div>
        FancyButton
      </div>
    )
  }
}

// 你可以直接获取 DOM button 的 ref：
// const ref = React.createRef();
// <FancyButton ref={ref}>Click me!</FancyButton>;
export default logPorps(FancyButton)