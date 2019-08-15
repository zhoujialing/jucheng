import styled from "styled-components"
import global from "@/core/global"
import login_bg from "@/images/login_bg.png"
import mineTop from "@/images/mineTop.png"

let r = global.r

const LoginWrap = styled.div`
    position:relative;
    z-index:100;
    height:100%;
    background-image:url(${login_bg});
    background-repeat: no-repeat;
    background-size: 100%;
    background-position: center center;
    .nav{
        padding:0 ${r(30)};
        font-size:${r(30)};
        color:#666;
    }
    .fromBox{
        padding:${r(75)} ${r(40)} 0 ${r(40)};
        h1{
            height:${r(48)};
            text-align:center;
            font-size:${r(25)};
            margin:0;
            padding:0;
        }
        ul{
            padding-top:${r(40)};
            letter-spacing:${r(20)};
            li{
                margin-bottom:${r(20)};
                padding:${r(20)} 0;
                font-size:${r(16)};
                input{
                    border:none
                }
                div{
                    display: block;
                    width: 100%;
                    height: ${r(40)};
                    line-height: ${r(40)};
                    font-size: ${r(16)};
                    color: #fefefe;
                    border-radius: ${r(20)};
                    background-color: #ebebeb;
                    border: none;
                    text-align:center;
                }
            }
            li:nth-child(1), li:nth-child(2){
                    border-bottom:${r(1)} solid #ccc;
                }
        }
    }
`
const MineWrap = styled.div`
        height: 100%;
        background-color: #f5f5f5;
        .main{
            padding-bottom:${r(50)};
            .mine_info{
                background:url(${mineTop}) no-repeat;
                /* height:${r(210)}; */
                background-size: 100%;
                padding-top:${r(57.5)};
                box-sizing:border-box;
                .mine_main{
                background-color: #fff;
                box-shadow: 0 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,.08);
                border-radius: .10667rem;
                margin: 0 ${r(15)};
                position: relative;
                .mine_mainHead{
                    padding: ${r(15)};
                    position: relative;
                    div{
                        display: inline-block;
                        width: ${r(58)};
                        height: ${r(58)};
                        border-radius: 50%;
                        border: .02667rem solid #fff;
                        margin-top: -${r(22)};
                        margin-right: ${r(10)};
                        background: #f5f5f5;
                        overflow: hidden;
                    }
                    span{
                            position: absolute;
                            top: .33333rem;
                            color: #232323;
                            font-size: .4rem;
                            font-weight: 700;
                        }
                }
                .mine_mainVip{
                    overflow:hidden;
                    p{
                        float: right;
                        font-size: .37333rem;
                        color: #454341;
                        font-weight: 700;
                        padding: .09333rem .28rem .09333rem .38667rem;
                        background: linear-gradient(-45deg,#f5dea9,#f8d583);
                        border-radius: .36rem 0 0 .36rem;
                    }
                }
                .mine_cont{
                    display: flex;
                    -webkit-box-align: center;
                    align-items: center;
                    box-sizing:border-box;
                    a{
                        flex: 1;
                        text-align: center;
                        position: relative;
                        padding: .4rem 0 .52rem;
                        color: #666;
                        font-weight: 500;
                        font-size: .32rem;
                        .num{
                            color: #ff6743;
                            font-size: ${r(20)};
                            margin-bottom: ${r(7.5)};
                        }
                        .name{
                            font-size: ${r(12)};
                            color:#666;
                        }
                        .kai{
                            font-size: ${r(13)};
                            color:#232323;
                            margin-bottom: ${r(7.5)};

                        }
                    }
                }
            }
            }
            .imgBox{
                img{
                    display: block;
                    width: 9.86667rem;
                    height: 2.4rem;
                    margin: 0 auto;
                }
            }
            .mine_setting{
                padding:0 ${r(15)};
                .setting_list{
                    display:flex;
                    align-items:center;
                    margin-bottom: .32rem;
                    background-color: #fff;
                    box-shadow: 0 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,.08);
                    border-radius: .10667rem;
                }
            }
        }
`
export { LoginWrap, MineWrap }