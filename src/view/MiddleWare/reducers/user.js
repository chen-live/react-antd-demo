import * as consts from "../constans/index"
const user = (state = {}, action) => {
  switch (action.type) {
    case consts.ADD_USER:
      state.push("iwen")
      return;
    default:
      return state
  }
}
export default user