import { createStore } from "redux"
import Reducer from "./Reducer/count"
const store = createStore(Reducer);
export default store