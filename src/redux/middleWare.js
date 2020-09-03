import logger from "redux-logger"
const errorCollect = store/*store 库*/ => next /*执行下一步*/ => action /*触发的action*/ => {
  try {
    next(action)
  } catch (e) {
    console.error("error=>", e)
  }
}
export { logger, errorCollect }