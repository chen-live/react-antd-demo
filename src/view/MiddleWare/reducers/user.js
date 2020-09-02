import * as consts from "../constans/index"
const initState = {
  user: {},
  isFetching: false,
  error: null
}
const user = (state = initState, action) => {
  // state是只读的，改变state的唯一方法是触发action
  switch (action.type) {
    case consts.FETCH_USER_SUCCESS:
      return {
        isFetching: false,
        error: null,
        user: action.user
      }
    case consts.FETCH_USER_REQUEST:
      return {
        isFetching: true,
        error: null,
        user: {}
      }
    case consts.FETCH_USER_FAILURE:
      return {
        isFetching: false,
        error: action.error,
        user: {}
      }
    default:
      return state
  }
}
export default user