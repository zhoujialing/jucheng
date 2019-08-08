
import { combineReducers } from "redux-immutable";
import indexReducer from "@/components/main/index/reducer"
import mineReducer from "@/components/main/mine/reducer"
import theaterReducer from "@/components/main/theater/reducer"
import ticketReducer from "@/components/main/ticket/reducer"


export default combineReducers({
    indexReducer,
    mineReducer,
    theaterReducer,
    ticketReducer
})