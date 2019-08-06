import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { VipWrap } from "./styled"
import { loadVipDataAsync } from "@/components/main/index/actionCreator"


class Vip extends PureComponent {

    render() {
        return (
            <VipWrap>
                <div className="vipTop">
                    <div>
                        <span>VIP+会员尊享权益</span>
                    </div>
                    <div className="vipYear">
                        <span>
                            99元/年
                            </span>
                    </div>
                </div>
                <div className="vipContent">
                    <div className="vipLeft">
                        <h3>专享折扣</h3>
                        <ul>
                            {
                                this.props.discountList.map((item, index) => (
                                    <li key={index}>
                                        <img src={item.pic} alt="" />
                                        <p>
                                            <span>{item.min_discount}</span>&nbsp;
                                            折</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="vipRight">
                        <h3>免费观演</h3>
                        <ul>
                            {
                                this.props.watchList.map((item, index) => (
                                    <li key={index}>
                                        <img src={item.pic} alt="" />
                                        <p>
                                            <span>￥0</span>&nbsp;
                                            <span className="oldPrice">{item.price}</span>
                                        </p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>

                </div>
            </VipWrap>
        )
        // }else{
        //     return null
        // }
    }
    componentDidMount() {
        this.props.pageInit.bind(this)()
    }
}

const mapStateToProps = (state) => {

    var tmp = state.getIn(["indexReducer", "getVipData"]).toJS();
    return {
        discountList: tmp.discountList,
        watchList:tmp.watchList
    }
}

const mapDispatchToProps = (dispatch) => ({
    pageInit() {
        dispatch(loadVipDataAsync(dispatch))
    }
})



export default connect(mapStateToProps, mapDispatchToProps)(Vip)