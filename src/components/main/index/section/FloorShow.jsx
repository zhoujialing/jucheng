import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { ShowWrap } from "./styled"
import { loadFloorShow } from "@/components/main/index/actionCreator"
import Swiper from "@/components/layout/swiper/index"

class FloorShow extends PureComponent {

    render() {
        if (this.props.floorShow.length !== 0) {

            return (
                <ShowWrap>
                    <ul >
                        {
                            this.props.floorShow.map((item, index) => (
                                <li key={index} className="showList">
                                    <div className="title">{item.title}</div>
                                    <div className="showOne" >
                                        <div className="showOneL">
                                            <img src={item.list[0].pic} alt="" />
                                        </div>
                                        <div className="showOneR">
                                            <p>
                                                <span>{item.list[0].date}</span>
                                                {item.list[0].week}
                                            </p>
                                            <h3>{item.list[0].schedular_name}</h3>
                                            <p>{item.list[0].city_name} | {item.list[0].venue_name}</p>
                                        </div>
                                    </div>
                                    <div className="swiperBox">
                                        <Swiper id={'floorShow'+index} height={"107px"} swiperConfig={{ slidesPerView : 3,spaceBetween: 5,paginationClickable: true,}}>
                                            {
                                                item.list.map((el, i) => (
                                                            i > 0 ? (
                                                                <ul className="swiper-slide" key={i}>
                                                                    <li>
                                                                        <img src={el.pic} alt="" />
                                                                        <h3>{el.schedular_name}</h3>
                                                                        <p>
                                                                        <span>￥{parseInt(el.low_price)}</span>起
                                                                        </p>
                                                                    </li>
                                                                </ul>
                                                            ) : null
                                                ))
                                            }
                                        </Swiper>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </ShowWrap>
            )
        } else {
            return null
        }
    }
    componentDidMount() {
        this.props.pageInit.bind(this)()
    }
}

const mapStateToProps = (state) => {
    return {
        currentCity: state.getIn(["indexReducer", "currentCity"]).toJS(),
        floorShow: state.getIn(["indexReducer", "floorShow"]).toJS(),
    }
}

const mapDispatchToProps = (dispatch) => ({
    pageInit() {
        dispatch(loadFloorShow(dispatch, this.props.currentCity))
    }

})



export default connect(mapStateToProps, mapDispatchToProps)(FloorShow)