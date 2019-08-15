import { fromJS } from "immutable"
import {
    GET_CITY_LIST,
    GET_SHOW_CATEGORY,
    GET_SHOW_LIST
} from "./actionCreator"
const defaultStore = fromJS({
    cityList:[],
    show_category_list: [],
    showList:{},
})
export default (state = defaultStore, action) => {
    switch (action.type) {
        case GET_CITY_LIST:
                return state.update("cityList",(x) => x = fromJS(action.val.data.data.city_list))
        case GET_SHOW_CATEGORY:
            return state.update("show_category_list",(x) => x = fromJS(action.val.data.data.show_category_list))
        case GET_SHOW_LIST:
            
            return state.update("showList",(x) => x = fromJS(action.val.data.data))
        default:
            return state;
    }
}