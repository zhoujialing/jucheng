import request from "@/core/http/index_m"

export const GET_CITY_LIST="info/get_city_list";
export const GET_SHOW_CATEGORY = "info/get_show_category";
export const GET_SHOW_LIST="info/get_show_list"

const action = (val,type) => {
    return {
        type,
        val,
    }
}

// https://m.juooo.com/Search/getCity?version=6.0.3&referer=2
export const loadCityList = (dispatch) => {
    //   /Search/getShowCategory?version=6.0.3&referer=2
    return ()=>{
        request({
            method: "get",
            url: "/Search/getCity?version=6.0.3&referer=2"
        }).then((res) => {
            dispatch(action(res,GET_CITY_LIST));
        })
    }
    
}

export const loadShowCategory = (dispatch) => {
    //   /Search/getShowCategory?version=6.0.3&referer=2
    return ()=>{
        request({
            method: "get",
            url: "/Search/getShowCategory?version=6.0.3&referer=2"
        }).then((res) => {
            
            dispatch(action(res,GET_SHOW_CATEGORY));
        })
    }
    
}

// https://m.juooo.com/Search/getShowList?category=35&city_id=0&page=1&keywords=&version=6.0.3&referer=2
export const loadShowList = (dispatch,data) => {
    //   /Search/getShowCategory?version=6.0.3&referer=2
    return ()=>{
        request({
            method: "get",
            url: "/Search/getShowList",
            params:{
                category:data.category_id,
                city_id:data.city_id,
                page:data.page,
                keywords:"",
                version:"6.0.3",
                referer:'2'
            }
        }).then((res) => {
            dispatch(action(res,GET_SHOW_LIST));
        })
    }
    
}