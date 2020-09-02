import React from "react"
import { connect } from "react-redux"
// import { increment, decrement } from "../actions/counter"
import * as CounterActions from "../actions/counter"
import { bindActionCreators } from "redux"
import ReactReduxUserDemo from "./user"
class ReduxDemo extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.increaseHandler = this.increaseHandler.bind(this);
    this.decreaseHandler = this.decreaseHandler.bind(this);
  }
  increaseHandler() {
  }
  decreaseHandler() {
  }
  render() {
    // console.log(this.props);
    // const { increment, decrement } = this.props;
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>{this.props.counter}</h2>
        <div style={{ textAlign: "center" }}>
          <button onClick={() => this.props.CounterActions.increment(10)}>increase</button>
          <button onClick={() => this.props.CounterActions.decrement(5)}>decrease</button>
        </div>
        <ReactReduxUserDemo />
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    counter: state.reducer
  }
}
// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => {
//       dispatch(increment())
//     },
//     decrement: () => {
//       dispatch(decrement())
//     }
//   }
// }
const mapDispatchToProps = (dispatch) => {
  return {
    CounterActions: bindActionCreators(CounterActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReduxDemo)