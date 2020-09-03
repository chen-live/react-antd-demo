import { createStore, applyMiddleware } from "redux"
import { logger, errorCollect } from "./middleWare"
import reducers from "./reducers"
const store = createStore(reducers, {}, applyMiddleware(logger, errorCollect))
export default store;