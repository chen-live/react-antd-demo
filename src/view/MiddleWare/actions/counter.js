import * as consts from "../constans/index"
let timer;
export function increment(num) {
  return (dispatch) => {
    if (timer) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        dispatch({
          type: consts.INCREMENT,
          num
        })
      }, 2000)
      return;
    }
    timer = setTimeout(() => {
      dispatch({
        type: consts.INCREMENT,
        num
      })
    }, 1000)
  }
}
export function decrement(num) {
  return {
    type: consts.DECREMENT,
    num
  }
}