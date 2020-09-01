import { createStore } from "redux"
import rootReducer from "./concatReducers"
const store = createStore(rootReducer);
export default store