import * as consts from "../constans/index"
export function increment(num) {
  return {
    type: consts.INCREMENT,
    num
  }
}
export function decrement(num) {
  return {
    type: consts.DECREMENT,
    num
  }
}