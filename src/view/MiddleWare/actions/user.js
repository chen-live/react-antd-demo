import * as consts from "../constans/index"
export const fetch_user_failure = (error) => {
  return {
    type: consts.FETCH_USER_FAILURE,
    error
  }
}
export const fetch_user = (user) => {
  return {
    type: consts.FETCH_USER_SUCCESS,
    user
  }
}
export const fetch_user_request = () => {
  return {
    type: consts.FETCH_USER_REQUEST,
  }
}

export const get_user = () => {
  return dispatch => {
    dispatch(fetch_user_request())
    fetch("http://iwenwiki.com/api/blueberrypai/getChengpinDetails.php").then(r => r.json()).then(res => {
      dispatch(fetch_user(res.chengpinDetails[0]))
    }).catch(error => {
      console.error(error)
      fetch_user_failure(error)
    })
  }

}