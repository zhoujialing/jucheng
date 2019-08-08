import request from "@/core/http"

export const GET_HOT_CITY = "info/get_hot_city";
export const GET_INDEX_CITY = "info/get_index_city";
export const SET_CURRENT_CITY = "city/set_current_city";
export const GET_INDEX_DATA = "info/get_index_data";
export const GET_VIP_DATE="info/get_vip_data";
export const GET_HOT_RECOMMEND="info/get_hot_recommend"
export const GET_TOUR_RECOMMEND="info/get_tour_recommend"
export const GET_FLOOR_SHOW="get_floor_Show"
export const GET_HOT_THEATER="get_hot_theater"
export const GET_UPLOAD_DATA="get_upload_data"

 const action = (val,type) => {
    return {
        type,
        val,
    }
}
export const loadHotCityListData = (dispatch) => {
    //  热门城市 /city/city/getHotCityList?version=6.0.1&referer=2
    return ()=>{
        request({
            method: "get",
            url: "/city/city/getHotCityList?version=6.0.3&referer=2"
        }).then((res) => {
            dispatch(action(res,GET_HOT_CITY));
        })
    }
    
}

export const loadIndexCityListData = (dispatch) => {
    //全部城市  /city/city/getSortedCityList?version=6.0.1&referer=2
    return ()=>{
        request({
            method: "get",
            url: "/city/city/getSortedCityList?version=6.0.3&referer=2"
        }).then((res) => {
            dispatch(action(res,GET_INDEX_CITY));
        })
    }
    
}

export const loadIndexDataAsync = (dispatch,currentCity) => {
    //全部信息  https://api.juooo.com/home/index/getClassifyHome?city_id=53&abbreviation=AM&version=6.0.1&referer=2
    return ()=>{
        request({
            method: "get",
            url: "/home/index/getClassifyHome?",
            params:{
                city_id: currentCity.id,
                abbreviation: currentCity.Abbreviation||"",
                version:"6.0.1",
                referer:"1"
            }
        }).then((res) => {
            res.currentCity=currentCity
            dispatch(action(res,GET_INDEX_DATA));
        })
    }
}

// vip
// https://api.juooo.com/vip/index/getVipHomeSchedular?version=6.0.1&referer=2
export const loadVipDataAsync = (dispatch) => {
    //全部信息  https://api.juooo.com/home/index/getClassifyHome?city_id=53&abbreviation=AM&version=6.0.1&referer=2
    return ()=>{
        request({
            method: "get",
            url: "https://api.juooo.com/vip/index/getVipHomeSchedular?version=6.0.3&referer=2",
        }).then((res) => {
            dispatch(action(res,GET_VIP_DATE));
        })
    }
}

// 热门演出
// https://api.juooo.com/home/index/getHotsRecommendList?city_id=0&version=6.0.1&referer=2

export const loadHotsRecommend = (dispatch,currentCity) => {
    //全部信息  https://api.juooo.com/home/index/getClassifyHome?city_id=53&abbreviation=AM&version=6.0.1&referer=2

    return ()=>{
        request({
            method: "get",
            url: "/home/index/getHotsRecommendList",
            params:{
                city_id: currentCity.id,
                version:"6.0.3",
                referer:"1"
            }
        }).then((res) => {
            
            dispatch(action(res,GET_HOT_RECOMMEND));
        })
    }
}

// 巡回演出
export const loadTourRecommend = (dispatch,currentCity) => {
    //全部信息  https://api.juooo.com/home/index/getClassifyHome?city_id=53&abbreviation=AM&version=6.0.1&referer=2
    console.log(currentCity);
    
    return ()=>{
        request({
            method: "get",
            url: "/home/index/getTourRecommendList",
            params:{
                city_id: currentCity.id,
                version:"6.0.3",
                referer:"2"
            }
        }).then((res) => {
            
            dispatch(action(res,GET_TOUR_RECOMMEND));
        })
    }
}

// 演出分类
// https://api.juooo.com/home/index/getFloorShow?city_id=0&version=6.0.3&referer=2
export const loadFloorShow = (dispatch,currentCity) => {
    console.log(currentCity);
    
    return ()=>{
        request({
            method: "get",
            url: "/home/index/getFloorShow",
            params:{
                city_id: currentCity.id,
                version:"6.0.3",
                referer:"2"
            }
        }).then((res) => {
            dispatch(action(res,GET_FLOOR_SHOW));
        })
    }
}

// 热门场馆
//https://api.juooo.com/home/index/getHotTheatre?version=6.0.3&referer=2
export const loadHotTheater= (dispatch) => {
    return ()=>{
        request({
            method: "get",
            url: "/home/index/getHotTheatre?version=6.0.3&referer=2",
        }).then((res) => {
            dispatch(action(res,GET_HOT_THEATER));
        })
    }
}


// https://api.juooo.com/home/index/getRecommendShow?cityAdd=&page=2&version=6.0.3&referer=2
export const loadRecommendShow= (dispatch,data) => {
    return ()=>{
        request({
            method: "get",
            url: "/home/index/getRecommendShow",
            params:{
                cityAdd:data.cityAdd,
                page:data.page,
                version:"6.0.3",
                referer:"2"
            }
        }).then((res) => {
            dispatch(action(res,GET_UPLOAD_DATA));
        })
    }
}