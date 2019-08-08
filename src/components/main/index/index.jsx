import React from 'react';
import { connect } from "react-redux"
import {
  loadHotCityListData,
  loadIndexCityListData,
  loadVipDataAsync,
} from "./actionCreator"
import { IndexWrap } from "./styled"
import { Banner, Nav } from "@/components/main/index/section/ClassifyHome"
import City from "@/components/main/index/section/City"
import HotsRecommend from "@/components/main/index/section/HotsRecommend"
import TourRecommend from "@/components/main/index/section/TourRecommend"
import Vipdata from "@/components/main/index/section/Vipdata"
import FloorShow from "@/components/main/index/section/FloorShow"
import HotTheater from "@/components/main/index/section/HotTheater"
import PullToRefresh from "@/components/main/index/section/PullToRefresh"


class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      isCity: false,
    }
  }
  render() {
    // console.log(this.props.hotRecommend.hots_show_list);
    // var hotRecommend=this.props.hotRecommend.hots_show_list

    return (
      <IndexWrap>
        <City />
        <PullToRefresh>
          {
            Object.keys(this.props.indexTopData).length !== 0 ? (
              <div>
                <Banner indexTopData={this.props.indexTopData} />
                <div className="section">
                  <Nav indexTopData={this.props.indexTopData} getVipData={this.props.getVipData} />
                </div>
              </div>
            ) : null
          }
          <HotsRecommend />
          <TourRecommend />
          {
            Object.keys(this.props.getVipData).length !== 0 ? (
              <Vipdata />
            ) : null
          }
          <FloorShow />
          <HotTheater />
        </PullToRefresh>
      </IndexWrap>
    )
  }

  componentDidMount() {
    this.props.pageInit.bind(this)()
  }


}




const mapStateToProps = (state) => {
  // console.log(state.getIn(["indexReducer", "getVipData"]))
  return {
    currentCity: state.getIn(["indexReducer", "currentCity"]).toJS(),
    indexTopData: state.getIn(["indexReducer", "indexTopData"]).toJS(),
    getVipData: state.getIn(["indexReducer", "getVipData"]).toJS(),

  }
}

const mapDispatchToProps = (dispatch) => ({
  pageInit() {
    dispatch(loadHotCityListData(dispatch))
    dispatch(loadIndexCityListData(dispatch))
    dispatch(loadVipDataAsync(dispatch))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Index)