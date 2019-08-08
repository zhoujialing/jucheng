import { fromJS } from "immutable"
import {
    GET_THEATER_LIST,
} from "./actionCreator"
const defaultStore = fromJS({
    theaterList: []
})
export default (state = defaultStore, action) => {
    switch (action.type) {
        case GET_THEATER_LIST:
            console.log(action.val.data.data.theatre_list);
        return state.update("theaterList",(x) => x = fromJS(action.val.data.data.theatre_list))
        default:
            return state;
    }
}