import React from "react"
import qs from "querystring"
import { Prompt } from "react-router-dom"
export default class Mine extends React.Component {
  constructor() {
    super()
    this.state = {
      message: ""
    }
    this.changeHandler = this.changeHandler.bind(this)
  }
  componentDidMount() {
    console.log(this.props)
    // const params = new URLSearchParams(this.props.location.search);
    // console.log(params.get("name"))
    // console.log(params.get("age"))
    const value = qs.parse(this.props.location.search)
    console.log(value)
  }
  changeHandler(e) {
    this.setState({
      message: e.target.value
    })
  }
  render() {
    return (
      <div>
        <Prompt when={!!this.state.message} message={"确定要离开吗？"} />
        MINE
        <input type="text" onChange={this.changeHandler} />
      </div>
    )
  }
}