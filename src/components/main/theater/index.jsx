import React from 'react';
import { TheaterWrap } from './styled'
import { connect } from "react-redux"
import { loadTheaterList } from "@/components/main/theater/actionCreator"
import Swiper from "@/components/layout/swiper"

class Theater extends React.PureComponent {
    render() {
        if (this.props.theaterList.length !== 0) {
            return (
                <TheaterWrap>
                    <header>
                        <h3>
                            剧院
                        </h3>
                    </header>
                    <div className="content">
                        <div className="theaterList">
                            {
                                this.props.theaterList.map((item, index) => (
                                    <div key={index} className="theInfo">
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
                                            <Swiper id={'theaterSwiper'+index}>
                                                {
                                                    item.showList.map((el, i) => (
                                                        <li key={i} className=" swiper-slide" height={"193px"} swiperconfig={{ slidesPerView: 3, paginationClickable: true}}>
                                                            <div className="theaterDate">
                                                                <div>
                                                                    <p>{el.show_time}</p>
                                                                    <span></span>
                                                                </div>
                                                            </div>
                                                            <div className="hotTheater">
                                                                <div >
                                                                    <img src={el.pic} alt="" />
                                                                </div>
                                                            </div>
                                                        </li>
                                                    ))
                                                }
                                            </Swiper>

                                        </ul>

                                    </div>
                                ))
                            }
                        </div>
                    </div>
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
    console.log(state.getIn(["theaterReducer", "theaterList"]).toJS())
    return {
        theaterList: state.getIn(["theaterReducer", "theaterList"]).toJS()
    }
}

const mapDispatchToProps = (dispatch) => ({
    pageInit() {
        dispatch(loadTheaterList(dispatch))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Theater)
