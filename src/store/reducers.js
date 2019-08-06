
import { combineReducers } from "redux-immutable";
import indexReducer from "@/components/main/index/reducer"
import mineReducer from "@/components/main/mine/reducer"

export default combineReducers({
    indexReducer,
    mineReducer
})