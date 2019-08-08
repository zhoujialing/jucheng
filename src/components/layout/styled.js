import styled from "styled-components"
import global from "@/core/global"

let r = global.r
const TabbarWrap = styled.div`
    position: fixed;
    width: 100%;
    bottom: 0;
    z-index:99;
    .am-tab-bar-bar{
        height:50px;
        position: fixed;
    }
`

const SwiperWrap=styled.div`
    .swiper-container{
        width:100%;
        height:${r(props => {
            return props.height ? props.height : '160px';
        })};
        .swiper-slide{
            img{
                width:100%;
                height:auto;
            }
        }
    }
`
export {TabbarWrap,SwiperWrap}