import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import * as userActions from "../actions/user"
class ReactReduxUserDemo extends React.Component {
  render() {
    console.log(this.props);
    const { error, isFetching, user } = this.props.user;
    let data;
    if (error) data = error;
    else if (isFetching) data = "loading......";
    else data = user.title
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>user</h2>
        <h2 style={{ textAlign: "center" }}>{data}</h2>
        <button onClick={() => this.props.userActions.get_user()}>getUser</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    userActions: bindActionCreators(userActions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ReactReduxUserDemo)