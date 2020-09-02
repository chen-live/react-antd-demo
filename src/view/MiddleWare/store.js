import { createStore, applyMiddleware } from "redux"
import reduxLogger from "redux-logger"
import rootReducer from "./concatReducers"
// const logger = store => next => action => {
//   // console.log(`dispatch=>${action},next state=>${next(action)},next state=>${store.getState()}`)
//   console.log("dispatch=>", action)
//   console.log("next state=>", next(action))
//   console.log("next state=>", store.getState())
// }
const errorCollect = store => next => action => {
  try {
    next(action)
  } catch (e) {
    console.log("error=>", e)
  }
}
const store = createStore(rootReducer, {}, applyMiddleware(errorCollect, reduxLogger));
export default store