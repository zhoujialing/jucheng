import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { TheaterWrap } from "./styled"
import { loadHotTheater } from "@/components/main/index/actionCreator"
import Swiper from "@/components/layout/swiper/index"

class HotTheater extends PureComponent {

    render() {
        if (this.props.theaterList.length !== 0) {
            return (
                <TheaterWrap>
                    <div className="title">
                        热门场馆
                 </div>
                    <Swiper id={'hotTheater'} height={"297px"} swiperConfig={{ slidesPerView: 3, spaceBetween: 5 }}>
                        {
                            this.props.theaterList.map((item, index) => (
                                <div className="swiper-slide" key={index}>
                                    <div className="swiperT">
                                        <div className="imgBox">
                                            <img src={item.pic} alt="" />
                                        </div>
                                        <div className="name">
                                            <h3>{item.name}</h3>
                                            <p>{item.count}场演出</p>
                                        </div>
                                    </div>
                                    <ul className="swiperB">
                                        <div className="theaterDate">
                                            {
                                                item.showList.map((el, i) => (
                                                    <div key={i} >
                                                        <p>{el.show_time}</p>
                                                        <span></span>
                                                    </div>

                                                ))
                                            }
                                        </div>
                                        <div className="hotTheater">
                                            {
                                                item.showList.map((el, i) => (
                                                    <div key={i} >
                                                        <img src={el.pic} alt="" />
                                                    </div>
                                                ))
                                            }
                                        </div>


                                    </ul>
                                </div>
                            ))
                        }
                    </Swiper>
                </TheaterWrap>
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
        theaterList: state.getIn(["indexReducer", "theater_list"]).toJS(),
    }
}

const mapDispatchToProps = (dispatch) => ({
    pageInit() {
        dispatch(loadHotTheater(dispatch))
    }

})



export default connect(mapStateToProps, mapDispatchToProps)(HotTheater)