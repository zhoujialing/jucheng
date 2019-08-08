import styled from "styled-components"
import global from "@/core/global"

let r = global.r
const IndexWrap = styled.div`
    width:100%;
    background-color: #fff;
    margin-bottom:${r(50)};
    header{
        height:${r(44)};
        width:100%;
        background:rgba(0,0,0,0);
        padding-left:${r(15)};
        padding-right:${r(15)};
        display:flex;
        align-items:center;
        justify-content: center;
        position: fixed;
        z-index:99;
        .address{
            width:${r(58.5)};
            height:${r(28)};
            display:flex;
            position:fixed;
            left:4%;
            background-color: rgba(0,0,0,.3);
            border: 1px solid hsla(0,0%,88%,.3);
            border-radius:${r(20)};
            justify-content:center;
            align-items:center;
            .addImg{
                background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAaCAMAAACEqFxyAAAAXVBMVEUAAAD+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7+/v7ro0NvAAAAHnRSTlMA+eslChdO2MS2h29oVjqAdu/e27qvpYxbQi0HAUsWcjORAAAAt0lEQVQoz2WR2Q6EMAhFEetarbuOy/D/nzkRadHxvBBOGugNcJG0IxLh2CagmCUiIVqMt3FGN7JYLNIDZG/krZKdc0p6UQIksq23ztle9iZgiZkMD5yIsVBwHYx8deC2AORagVBdnwFiNq83YkTHIZrojkvtdc1tBznX/LjsIS00IQFotsYPo8LtuysorJrpxXxeAP8t8i3W6GmjFZj2qRtNfKOCQKq3TNWq57hv/1GjXq3yRdQJP70QJWgxEHBwAAAAAElFTkSuQmCC);
                width:${r(11)};
                height:${r(13)};
                background-size:contain;
            }
            .city{
                margin-left:${r(3)};
                font-size:${r(15)};
                color:#fefefe;
            }
        }
        .search{
            height:${r(28)};
            width:${r(238)};
            border-radius:${r(20)};
            background-color: rgba(0,0,0,.3);
            border: 1px solid hsla(0,0%,88%,.3);
        }
        .iconTop{
            width:${r(27)};
            height:${r(25)};
            position: fixed;
            top:1.5%;
            right:4%;
            z-index:99;
            img{
                width:100%;
                height:100%;
            }
        }
        
    }
    .section{
        margin-bottom:${r(30)}
    }
`

export { IndexWrap }



