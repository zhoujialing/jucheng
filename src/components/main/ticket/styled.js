import styled from "styled-components"
import global from "@/core/global"

let r = global.r

const TicketWrap = styled.div`
    padding-top:${r(48)};
    header{
        position:fixed;
        z-index:10;
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
            border-bottom: 1px solid #ebebeb;

            }
        }
    }
    .classify{
            padding:0 ${r(15)} ${r(10)} ${r(15)};
            display:flex;
            box-sizing: border-box;
            background-color: #fefefe;
            justify-content:center;
            align-items:center;
            position:fixed;
            top:${r(44)};
            .am-tabs-tab-bar-wrap {
                font-size:${r(15)} !important;
                overflow:hidden;
            }
            .address{
                font-size:${r(15)};
                width:${r(75)};
                border-left:1px solid #e0e0e0;
                text-align:center;
                .addImg{
                    display:inline-block;
                    width:${r(21)};
                    height:${r(21)};
                    /* background-image:url("./../../../images/address.png"); */
                    /* background-size:100%; */
                    img{
                        width:${r(21)};
                    height:${r(21)};
                    }
                }
            }
        }
    .showList{
        padding:0 ${r(15)};
        background-color: #fefefe;
        margin-bottom:${r(50)};

            li{
                margin-bottom:${r(32.5)};
                display:flex;
                .imgBox{
                    width:${r(110)};
                    height:${r(150)};
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                .info{
                    flex:1;
                    margin-left:${r(15)};
                    padding-top:${r(5)};
                    p:nth-child(1){
                        font-size:${r(16)};
                        color:#232323;
                        span{
                        font-size:${r(12)};
                        color:#666;
                        margin-left:${r(5)};

                        }
                    }
                    h3{
                        margin-top:${r(12.5)};
                        font-size:${r(17)};
                        line-height:${r(20)};
                        word-break: break-all;
                        display: -webkit-box;
                        -webkit-line-clamp: 2;
                        -webkit-box-orient: vertical;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    p:nth-child(3){
                        margin-top:${r(12.5)};
                        font-size:${r(12)};
                        color:#666;
                    }
                    p:nth-child(4){
                        span{
                        color:#ff6743;
                        font-size:${r(16)};
                        margin-right:${r(5)};
                        }
                        margin-top:${r(12.5)};
                        font-size:${r(12)};
                        color:#666;
                    }
                }
            }
        }
        .none{
            height:100%;
            h3{
                height:${r(30)};
                line-height:${r(30)};
                text-align:center;
                font-size:${r(12)};
                color:#666;
            }
        }
`
const CityWrap = styled.div`
        background-color: rgba(0,0,0,.6);
        position:fixed;
        z-index:100;
        top:${r(44)};
        height:100%;
        .lBox{
            width:${r(81)};
            height:100%;
            float:left;
        }
        .rBox{
            width:${r(264)};
            height:100%;
            background-color: #fefefe;
            float:right;
            padding:${r(15)} ${r(15)} 0 ${r(15)};
            position:relative;
            h3{
                font-size: ${r(15)};
                color: #666;
                height: ${r(19)};
                line-height: ${r(19)};
            }
            .cityList{
                    overflow-y: scroll;
                    height:${r(510)};
                    margin-top: ${r(15)};
                    padding-bottom:${r(45)};
                    -webkit-box-sizing: border-box;
                    box-sizing: border-box;
                    ul{
                        overflow:hidden;
                        li{
                            float: left;
                            text-align: center;
                            width: ${r(82)};
                            height: .85333rem;
                            line-height: .85333rem;
                            border-radius: .05333rem;
                            background-color: #f5f5f5;
                            color: #232323;
                            font-size: .32rem;
                            margin-right: .16rem;
                            margin-bottom: .16rem;
                        }
                        li.native{
                            background-color: #fff1e9;
                            color: #ff6743;
                        }
                    }
                }
            .foot{
                height: ${r(45)};
                border-top: 1px solid #ebebeb;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-align: center;
                -ms-flex-align: center;
                align-items: center;
                text-align: center;
                position: absolute;
                left: 0;
                bottom: ${r(60)};
                width: 100%;
                background-color: #fefefe;
                span{
                    flex: 1;
                    -ms-flex: 1;
                    flex: 1;
                    font-size: .37333rem;
                    color: #232323;
                    height: 1.2rem;
                    line-height: 1.2rem;
                }
                span:nth-child(2){
                    color: #fff;
                    background-color: #ff6743;
                }
            }
        }
        
`

export { TicketWrap, CityWrap }