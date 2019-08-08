import styled from "styled-components"
import global from "@/core/global"

let r = global.r

const TheaterWrap = styled.div`
    header{
        height:${r(43)};
        line-height:${r(43)};
        position:fixed;
        top:0;
        background-color: #fefefe;
        z-index:99;
        width:100%;
        border-bottom:1px solid #ebebeb;
        h3{
            text-align:center;
            font-size:${r(18)};
            font-weight:normal;
        }
    }
    .content{
        padding-top:${r(50)};
        padding-bottom:${r(60)};
        background-color: #fdfdfd;
        height:100%;
        .theaterList{
            width:${r(345)};
            margin:0 auto;
                .theInfo{
                    border: 1px solid #ebebeb;
                    margin-bottom:${r(15)};
                    padding:${r(20)} ${r(17)};
                    box-sizing:border-box;
                    box-shadow: 0 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,.08);
                    .swiperT{
                        display:flex;
                        height:${r(51)};
                        .imgBox{
                            width:${r(50)};
                            height:${r(50)};
                        img{
                            width:100%;
                            height:100%;
                            }
                        } 
                        .name{
                            margin-left:${r(10)};
                            h3{
                                margin-top:${r(2.5)};
                                font-size:${r(17)};
                            }
                            p{
                                font-size:${r(12)};
                                margin-top:${r(7.5)};
                            }
                        }
                    }
                    .swiperB{
                        .swiper-slide{
                            width:${r(114)} !important;
                            margin-right:${r(10)}
                            .theaterDate{
                                display:flex;
                                margin-top:${r(40)};
                                background-color: #ebebeb;
                                height:${r(2)};
                                position: relative;
                                color:#b3b3b3;
                                font-size:${r(14)};
                                margin-bottom:${r(15)};

                                div{    
                                    position:absolute;
                                    width:100%;
                                    p{
                                        text-align:center;
                                    }
                                    span{
                                        width:${r(7)};
                                        height:${r(7)};
                                        background-color: #ccc;
                                        border-radius:50%;
                                        display:block;
                                        position:absolute;
                                        bottom:-${r(14)};
                                        left:50%;
                                    }
                                }
                                div:nth-child(1){
                                    top:-${r(25)};
                                }
                                div:nth-child(2){
                                    top:-${r(25)};
                                    right:  ${r(0)}
                                }
                            }
                        }
                    }
                }
            }
    }
`

export { TheaterWrap }