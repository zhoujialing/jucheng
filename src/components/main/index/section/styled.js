import styled from "styled-components"
import global from "@/core/global"

let r = global.r
const CityWrap = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height:100%;
    overflow:scroll;
    background-color: #f5f5f5;
    z-index:1000;
    .top{
        position: fixed;
        top: 0;
        width: 100%;
        height:${r(43)};
        background-color: #fff;
        display:flex;
        justify-content: center;
        align-items:center;
        font-size:${r(18)}
    }
    .content{
        margin-top:${r(43)};
        .left{
            .cityTop{
                padding-top:${r(13)};
                padding-left:${r(15)};
                p{
                    height:${r(26.5)};
                    margin-bottom:${r(5)};
                }
            }
            p{
                margin-top:${r(13)};
                height:${r(26.5)};
                margin-bottom:${r(5)};
                line-height:${r(26.5)};
                padding-left:${r(15)};
            }
            .hotList{
                margin:0;
                padding-left:${r(15)};
                display:flex;
                justify-content: space-between;
                flex-wrap: wrap;
                padding-right:${r(38)};
            
            }
            .cityList{
                margin:0;
                padding-left:${r(0)};
                list-style:none;
                p{
                    padding-left:${r(15)};
                }
                .cityCon{
                    margin:0;
                    padding-left:${r(15)};
                    background-color: #fff;
                    div{
                        border-bottom: 1px solid #ebebeb;
                        height:${r(50)};
                        font-size:${r(13)};
                        display:flex;
                        align-items:center;
                    }
                }
            }
        }
        .right{
            position: fixed;
            top:${r(119)};
            right:${r(10)};
            color:#666;
            div{
                    margin-bottom:${r(3)};
                }
            ul{
                margin:0;
                padding:0;
                
                li{
                    list-style:none;
                    text-align:center;
                    margin-bottom:${r(3)};

                }
            } 
        }
    }
    
`

const CityBox = styled.div`
    width: ${r(100)};
    height:${r(35)};
    border: 1px solid #ebebeb;
    background-color: #fefefe;
    border-radius: ${r(3)};
    font-size: ${r(13)};
    color: #232323;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: ${r(7.5)};
`


const BannerWrap = styled.div`
    .am-wingblank.am-wingblank-lg{
        margin:0;
    }
    a{
        display:block;
        height:${r(196)} !important;
        img{
        height:100%;
        }
    }
    
`

const NavWrap = styled.div`
    padding:${r(20)} ${r(15)} ${r(0)}  ${r(15)};
    .navTop{
        width:100%;
        margin-bottom:${r(30)};
        list-style:none;
         display:flex;
        justify-content:space-between; 
        li{
            width:${r(75.5)};
         display:flex;
         justify-content:center; 

            a{
                color:#232323;
                img{
                    width:${r(51)};
                }
                p{
                    text-align:center;
                }
            }
            
        }
    }
    /* -------------------------- */
    .vip{
        width: 100%;
        border-radius: ${r(3)};
        background-color: rgba(255,252,245,.5);
        border: 1px solid hsla(30,55%,64%,.3);
        margin-bottom:${r(30)};
        .vipTop{
            padding:0 ${r(15)};
            height:${r(39)};
            display:flex;
            justify-content:space-between;
            align-items: center;
            border-bottom: ${r(1)} dashed hsla(30,55%,64%,.3);
            span{
                font-size:${r(12)};
            }
            .yxgp{
                color: #6b4218;
                font-size:${r(15)};
                margin-right:${r(3)}
            }
            
        }
        .vipCon{
            padding:${r(15)} ${r(15)} ${r(12)}  ${r(15)};
            display:flex;
            justify-content:center;
            .vipConImg{
                width:${r(65)};
                img{
                    width:100%;
                }
            }
            .vipConInfo{
                margin-left:${r(15)};
                flex:1;
                h3{
                    line-height:${r(20)}
                }
                p{
                    color: #666;
                    margin-top:${r(10)};
                }
                .time{
                    margin-top:${r(10)};
                    color: #666;
                    
                }
            }
        }
    }
    .imgBox{
        height:${r(100)};
        margin-bottom:${r(30)};
        img{
            width:100%;
            height:auto;
        }
    }
    /* ---------------------------- */
    .operation{
        background-color: #f5f5f5;
        box-shadow: 0 0.05333rem 0.4rem 0.02667rem rgba(35,35,35,.08);
        ul{
            overflow:hidden;
            li{
                list-style:none;
                float:left;
                background-color: #fff;
                a{
                    color:#666;
                  h3{
                      text-align:center;
                      color: #232323;
                      line-height:${r(18)};
                  }
                  .c_ff6 {
                        color: #ff6743!important;
                    }
                   img{
                       width:${r(42)};
                       height:${r(45)};
                   }
                }
            }
            li:nth-child(1),li:nth-child(2){
                padding:0 ${r(17.5)};
                margin-bottom:${r(6)};
                margin-right:${r(3)};
                a{
                    display:flex;
                    width:${r(134.5)};
                    height:${r(90)};
                    align-items:center;
                }
            }
            li:nth-child(3),li:nth-child(4),li:nth-child(5){
                a{
                    display:flex;
                    width:${r(111)};
                    height:${r(106)};
                    flex-direction:column;
                    justify-content:center;
                    align-items:center;
                }
            }
            li+li{
                margin-right:${r(3)}
            }
        }
    }
    
`

// 热门演出
const Recommend = styled.div`
    padding:${r(20)} ${r(0)} ${r(35)}  ${r(15)};
    .swiper-slide{
        img{
            width:${r(107)} !important;
            height:${(r(146))} !important;
        }
        h3{
            overflow: hidden;
            white-space:nowrap;
            text-overflow: ellipsis;
            margin-top:${r(5)};
            padding-right:${r(15)}
        }
    }
    
`

const RecommendT = styled.div`
    padding:${r(20)} ${r(0)} ${r(35)}  ${r(15)};
    background-color: #f5f5f5;
    .space-carousel{
         background-color: #f5f5f5;
        border:none;
        overflow: hidden;
        padding: ${r(16)};
        a{
            box-shadow:none !important;
        }
        h3{
            overflow: hidden;
            white-space:nowrap;
            text-overflow: ellipsis;
            margin-top:${r(12.5)};
            padding-right:${r(15)};
            text-align:center;
            font-size:${r(17)};
            color:#232323;
        }
        p{
            text-align:center;
            font-size:${r(13)};
            color:#666;

        }
    }
    
`

// 轮播标题
const Title = styled.div`
    color:#232323;
    font-size:${r(20)};
    font-weight:bold;
    margin-bottom:${r(20)};
`

// vip专区
const VipWrap = styled.div`
    margin-bottom:${r(30)};
    .vipTop{
        height:${r(40)};
        padding:0 ${r(15)};
        background-image:url("https://m.juooo.com/static/img/vip_bg.cda230e.png");
        background-repeat: no-repeat;
        background-position: 50%;
        background-size: 100%;
        color:#f0d1b0;
        font-size:${r(15)};
        font-weight:700;
        display:flex;
        justify-content:space-between;
        align-items:center;
        .vipYear{
            font-size:${r(14)};
            font-weight:normal;
        }
    }
    .vipContent{
        padding:0 ${r(15)} ${r(15)} ${r(15)};
        display:flex;
        background-color: #f5f5f5;
        h3{
            height:${r(41)};
            font-size:${r(16)};
            line-height:${r(41)};
        }
        .vipLeft{
            margin-right:${r(8.5)};
            ul{
                display:flex;
                li{
                    width:${r(107)};
                    margin-right:${r(7.5)};
                    img{
                        width:100%;
                        height:auto;
                    }
                    p{
                        font-size: ${r(12)};
                        color: #999;
                        line-height: ${r(24)};
                        margin-top: ${r(5)};
                        padding-left: ${r(15)};
                        span{
                            font-size: ${r(18)};
                            color:#ff6743
                        }
                    }
                }
            }
        }
        .vipRight{
            ul{
                li{
                    width:${r(107)};
                    img{
                        width:100%;
                        height:auto;
                    }
                    p{  
                        line-height: ${r(24)};
                        margin-top: ${r(5)};
                        padding-left: ${r(15)};
                        span{
                            font-size: ${r(18)};
                            color:#ff6743;
                        }
                        .oldPrice{
                            font-size: ${r(12)};
                            color: #999;
                            text-decoration: line-through;
                        }
                    }
                }
            }
        }
    }
`

// 演出分类
const ShowWrap = styled.div`
    .showList{
        padding-bottom:${r(40)};
        .title{
            padding-left:${r(15)};
            font-size:${r(20)};
            font-weight:700;
        }
        .showOne{
            padding:${r(14)} 0 ${r(14)} ${r(14)};
            display:flex;
            justify-content:center;
            /* align-items:center; */
            background: rgb(104, 106, 113);
            margin-top:${r(20)};
            .showOneL{
                width:${r(107)} ;
                height:${r(146)};
                overflow:hidden;
                img{
                    width:100%;
                    height:auto;
                }
            }
            .showOneR{
                flex:1;
                margin-left:${r(15)};
                padding-top:${r(16)};
                color:#fefefe;
                p{
                    font-size:${r(12)};
                    span{
                        font-size:${r(16)};
                    }
                }
                p:nth-child(3){
                    margin-top:${r(14)};

                }
                h3{
                    font-size:${r(17)};
                    margin-top:${r(14)};
                }

            }
        }
        .swiperBox{
            padding-top:${r(15)};
            padding-left:${r(15)};
            ul{
                li{
                    h3{
                        font-size:${r(17)};
                        margin-top:${r(10)};
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space:nowrap;
                    }
                    p{
                        color:#999;
                        margin-top:${r(5)};
                        span{
                            font-size:${r(16)};
                            margin-right:${r(5)};
                            color: #ff6743;
                        }
                    }
                }
            }
        }
    }
`

const TheaterWrap = styled.div`
    padding-left:${r(15)};
    margin-bottom:${r(20)};
    .title{
        font-size:${r(20)};
        margin-bottom:${r(20)};
        font-weight:700;
    }
    .swiper-slide{
        border: 1px solid #ebebeb;
        width:${r(264)} !important;
        padding:${r(20)} ${r(17)};
        box-sizing:border-box;
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
            .theaterDate{
                display:flex;
                margin-top:${r(40)};
                background-color: #ebebeb;
                height:${r(2)};
                position: relative;
                color:#b3b3b3;
                font-size:${r(14)};
                div{    
                    position:absolute;
                    width:50%;
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
            .hotTheater{
               margin-top:${r(17.5)};
                display:flex;
                justify-content:space-between;
                div{
                    width:${r(107)};
                }
    
            }
        }
        
    }
`


export { CityWrap, CityBox, BannerWrap, NavWrap, Recommend, Title, RecommendT, VipWrap, ShowWrap, TheaterWrap }