import { combineReducers } from "redux"//合并store库
import reducer from "./reducers/reducer"
import user from "./reducers/user"
const rootRoducer = combineReducers({
  reducer,
  user
})
export default rootRoducer