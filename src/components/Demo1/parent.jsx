import React from "react"
import Child from "./child"
const MyApi = {
  count: 0,
  subscribe(cb) {
    this.intervalId = setInterval(() => {
      this.count += 1;
      cb(this.count)
    }, 1000)
  },
  unSubscribe() {
    clearInterval(this.intervalId)
  },
  reset() {
    this.count = 0;
  }
}
export default class Parent extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
  }
  componentWillMount(){}
  componentDidMount(){}
  componentWillUpdate(){}
  componentDidUpdate(){}
  componentWillReceiveProps(){}
  shouldComponentUpdate(){}
  componentWillUnmount(){}
  componentDidMount() {
    MyApi.subscribe((currentCount) => {
      this.setState({
        count: currentCount
      })
    })
  }
  componentWillUnmount() {
    MyApi.unSubscribe();
  }
  render() {
    return (
      <div>
        parent:{this.state.count}
        <Child num={this.state.count && 1} />
      </div>
    )
  }
}