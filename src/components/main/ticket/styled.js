import styled from "styled-components"
import global from "@/core/global"

let r = global.r

const TicketWrap = styled.div`
    header{
        position:fixed;
        z-index:99;
        top:0;
        background-color: #fff;
        width:100%;
        .headTop{
            width:100%;
            height:${r(43)};
            font-size:${r(18)};
            line-height:${r(43)};
            border-bottom: 1px solid #ebebeb;
            p{
                text-align:center;
                height:100%;

            }
        }
        .classify{
            padding:0 ${r(15)} ${r(10)} ${r(15)};
            display:flex;
            box-sizing: border-box;
            background-color: #fefefe;
            position: relative;
            .am-tabs-tab-bar-wrap {
                width:80% !important;
                font-size:${r(15)} !important;
                overflow:hidden;
            }
            .address{
                position: absolute;
                top:0;
                right:${r(15)};
                z-index:100;
                font-size:${r(15)};
                .addImg{
                    display:inline-block;
                    width:${r(21)};
                    height:${r(21)};
                }
            }
        }
    }
`

export { TicketWrap }