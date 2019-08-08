import { fromJS } from "immutable"
import {
    GET_HOT_CITY,
    GET_INDEX_CITY,
    GET_INDEX_DATA,
    GET_VIP_DATE,
    GET_HOT_RECOMMEND,
    GET_TOUR_RECOMMEND,
    GET_FLOOR_SHOW,
    GET_HOT_THEATER,
    GET_UPLOAD_DATA,
} from "./actionCreator"
const defaultStore = fromJS({
    num: 0,
    hotList: [],   //热门城市
    cityList: [],   //全部城市
    indexTopData: {},  //顶部数据
    currentCity: {          //当前城市
        id: 0,
        Abbreviation: "",
        name: "全国"
    },
    getVipData: {},     //vip数据
    hots_show_list: [],  //热门演出
    tour_show_list: [],     //巡回演出
    floorShow: [],        //演出分类
    theater_list: [],   //热门场馆
    upLoad: []      //下拉刷新
})
export default (state = defaultStore, action) => {
    switch (action.type) {
        // 热门城市
        case GET_HOT_CITY:

            var hot_city_List = action.val.data.data.hot_city_List;
            return state.update("hotList", (x) => x = fromJS(hot_city_List));
        // 全部城市
        case GET_INDEX_CITY:
            var res = action.val.data.data;
            var rel = [];
            for (var n in res) {
                rel.push(res[n])
            }
            return state.update("cityList", (x) => x = fromJS(rel));
        //  上面的内容
        case GET_INDEX_DATA:

            return state.update("indexTopData", (x) => x = fromJS(action.val.data.data)).update("currentCity", (x) => x = fromJS(action.val.currentCity))
        // Vip
        case GET_VIP_DATE:
            return state.update("getVipData", (x) => x = fromJS(action.val.data.data));
        // 热门演出
        case GET_HOT_RECOMMEND:
            return state.update("hots_show_list", (x) => x = fromJS(action.val.data.data.hots_show_list));
        // 巡回演出
        case GET_TOUR_RECOMMEND:
            return state.update("tour_show_list", (x) => x = fromJS(action.val.data.data.tour_show_list));
        // 演出分类
        case GET_FLOOR_SHOW:
            return state.update("floorShow", (x) => x = fromJS(action.val.data.data));
        //热门场馆
        case GET_HOT_THEATER:
            return state.update("theater_list", (x) => x = fromJS(action.val.data.data.theatre_list));
        //下拉刷新
        case GET_UPLOAD_DATA:
            return state.update("upLoad",(x)=>{
                return x.concat(fromJS(action.val.data.data.recommend_show_list))
            })
        default:
            return state;
    }
}