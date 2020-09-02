import * as consts from "../constans/index"
const reducer = (state = 0, action) => {
  switch (action.type) {
    case consts.INCREMENT:
      // throw new Error("catch it")
      return state + action.num;
    case consts.DECREMENT:
      return state - action.num;
    default:
      return state
  }
}
export default reducer