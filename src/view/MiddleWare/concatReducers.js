import { combineReducers } from "redux"
import reducer from "./reducers/reducer"
import user from "./reducers/user"
const rootRoducer = combineReducers({
  reducer,
  user
})
export default rootRoducer