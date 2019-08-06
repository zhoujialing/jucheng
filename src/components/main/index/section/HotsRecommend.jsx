import React,{PureComponent} from 'react';
import { connect } from "react-redux";
import Swiper from "@/components/layout/swiper/index"
import { loadHotsRecommend } from "@/components/main/index/actionCreator"
import { Recommend,Title } from "@/components/main/index/section/styled"

class HotRecommend extends PureComponent {
    render() {
        if (this.props.hotShowList.length!==0) {
            return (
                <Recommend>
                    <div>
                        <Title>热门演出</Title>
                    </div>
                    <Swiper id={'hotRecommend'} height={"178px"} swiperConfig={{ slidesPerView : 3,spaceBetween: 5,paginationClickable: true,}}>
                        {
                            this.props.hotShowList.map((item,index)=>(
                                <div className="swiper-slide" key={index}>
                                    <img src={item.pic} alt=""/>
                                    <h3>{item.show_name}</h3>
                                </div>
                            ))
                        }
                    </Swiper>
                </Recommend>
            )
        }else{
            return null
        }
    }
    componentDidMount () {
        this.props.pageInit.bind(this)();
    }
}
const mapStateToProps = (state) => {
    // console.log(state.getIn(["indexReducer", "currentCity"]).toJS());
    
    return {
        currentCity: state.getIn(["indexReducer", "currentCity"]).toJS(),
        hotShowList: state.getIn(["indexReducer", "hots_show_list"]).toJS(),
    }
}

const mapDispatchToProps = (dispatch) => ({
    pageInit() {
        dispatch(loadHotsRecommend(dispatch, this.props.currentCity))
    }
})



export default connect(mapStateToProps, mapDispatchToProps)(HotRecommend)