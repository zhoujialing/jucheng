import request from "@/core/http"

export const GET_THEATER_LIST = "info/get_theater_list";

const action = (val,type) => {
    return {
        type,
        val,
    }
}

export const loadTheaterList = (dispatch) => {
    //  剧院 https://api.juooo.com/theatre/index/getTheatreList?page=1&version=6.0.3&referer=2
    return ()=>{
        request({
            method: "get",
            url: "/theatre/index/getTheatreList?page=1&version=6.0.3&referer=2"
        }).then((res) => {
            dispatch(action(res,GET_THEATER_LIST));
        })
    }
    
}