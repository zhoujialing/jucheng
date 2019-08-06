import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { CityWrap, CityBox } from "@/components/main/index/section/styled"
import {
    loadHotCityListData,
    loadIndexCityListData,
    loadIndexDataAsync,
    GET_INDEX_DATA
} from "@/components/main/index/actionCreator"

class City extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isCity: true,
            all: {
                id: 0,
                Abbreviation: "",
                name: "全国"
            }
        }
    }
    render() {
        if (this.state.isCity) {
            return (
                <header>
                    {/* onClick={this.props.handleCity.bind(this)} */}
                    <div className="address" onClick={() => {
                        this.setState({ isCity: !this.state.isCity })
                    }}>
                        <div className="addImg"></div>
                        <div className="city" >
                            {this.props.currentCity.name}
                        </div>
                    </div>
                    <div className="search">
                    </div>
                </header>
            )
        } else {
            return (
                <CityWrap>
                    <div className="top">
                        城市选择
                      </div>
                    <div className="content">
                        <div className="left">
                            <div className="cityTop">
                                <p>当前城市</p>
                                <CityBox onClick={this.props.handleCity.bind(this, this.props.currentCity)}>{this.props.currentCity.name}</CityBox>
                            </div>
                            <div className="cityTop">
                                <p>定位城市</p>
                                <CityBox onClick={this.props.handleCity.bind(this, this.state.all)}>全国</CityBox>

                            </div>
                            <p>热门城市</p>
                            <ul className="hotList">

                                {
                                    this.props.hotList.map((item, index) => (
                                        <CityBox key={index} onClick={this.props.handleCity.bind(this, item)}>{item.name}</CityBox>
                                    ))
                                }
                            </ul>
                            <ul className="cityList">
                                {
                                    this.props.cityList.map((item, index) => (
                                        <li key={index}>
                                            <p>{item.id}</p>
                                            <ul className="cityCon">
                                                {
                                                    item.list.map((it, dex) => (
                                                        <div key={dex} onClick={this.props.handleCity.bind(this, it)}>{it.name}</div>
                                                    ))
                                                }
                                            </ul>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="right">
                            <div>
                                当前
                                  </div>
                            <div>
                                定位
                                  </div>
                            <div>
                                热门
                                  </div>
                            <ul>
                                {
                                    this.props.cityList.map((el, i) => (
                                        <li key={i}>
                                            {el.id}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </CityWrap>
            )
        }
    }
    componentDidMount() {
        this.props.handleGetCityData.bind(this)();
    }

}


const mapStateToProps = (state) => {
    return {
        hotList: state.getIn(["indexReducer", "hotList"]).toJS(),
        cityList: state.getIn(["indexReducer", "cityList"]).toJS(),
        currentCity: state.getIn(["indexReducer", "currentCity"]).toJS(),
        indexTopData: state.getIn(["indexReducer", "indexTopData"]).toJS(),
        getVipData: state.getIn(["indexReducer", "getVipData"]).toJS(),
    }
}
const mapDispatchToProps = (dispatch) => ({
    handleCity(item) {
        item.type = GET_INDEX_DATA;
        this.props.getIndexData(item)
        this.setState({ isCity: !this.state.isCity })
        // dispatch(loadVipDataAsync(dispatch))
        // this.props.getIndexData(this.props.currentCity)
        // this.props.getIndexData(this.props.currentCity)
    },
    handleGetCityData() {
        // console.log(this.props);
        
        dispatch(loadHotCityListData(dispatch))
        dispatch(loadIndexCityListData(dispatch))
        this.props.getIndexData(this.props.currentCity)

       
    },
    getIndexData(currentCity) {
        dispatch(loadIndexDataAsync(dispatch, currentCity))
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(City);



