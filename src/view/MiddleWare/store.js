import { createStore/*redux store库创建工具*/, applyMiddleware/*中间件处理工具*/ } from "redux"
import reduxLogger from "redux-logger" // 第三方redux中间件
import rootReducer from "./concatReducers" // 引入合并过的的store库
import thunk from "redux-thunk" // 中间件处理异步
// const logger = store => next => action => {
//   // console.log(`dispatch=>${action},next state=>${next(action)},next state=>${store.getState()}`)
//   console.log("dispatch=>", action)
//   console.log("next state=>", next(action))
//   console.log("next state=>", store.getState())
// }
// 定义中间件
// const errorCollect = function (store) {
//   return function (next) {
//     return function (action) {
//       try {
//         next(action)
//       } catch (error) {
//         console.log("error=>", error)
//       }
//     }
//   }
// }
const errorCollect = store/*store 库*/ => next /*执行下一步*/ => action /*触发的action*/ => {
  try {
    next(action)
  } catch (e) {
    console.error("error=>", e)
  }
}
// 挂载中间件与store库
const store = createStore(rootReducer, {}, applyMiddleware(errorCollect, reduxLogger, thunk));
export default store