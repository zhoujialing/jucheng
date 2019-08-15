// import request from "@/core/http"
import axios from "axios"
import qs from "qs";


// export const GET_THEATER_LIST = "info/get_theater_list";

const action = (val,type) => {
    return {
        type,
        val,
    }
}

export const loginAsync = (data,callback) => {
    axios({
        method: "post",
        url: "/login",
        data:qs.stringify(data)
    }).then((res) => {
        callback(res);
    })
}