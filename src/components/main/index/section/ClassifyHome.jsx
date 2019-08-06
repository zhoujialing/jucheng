import React, { PureComponent } from "react";
import {BannerWrap, NavWrap } from "./styled"
import { Carousel, WingBlank } from 'antd-mobile';

export class Banner extends PureComponent {
  state = {
    imgHeight: 196,
  }
  render() {
    if(this.props.indexTopData.slide_list.length!==0){
      return (
        <BannerWrap>
          <WingBlank>
            <Carousel
              autoplay={true} 
              infinite
              >
              {
                this.props.indexTopData.slide_list.map((val, index) => (
                <a
                  key={index}
                  href={val.url}
                  style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                >
                  <img
                    src={val.image_url}
                    alt=""
                    style={{ width: '100%', verticalAlign: 'middle' }}
                    onLoad={() => {
                      // fire window resize event to change height
                      window.dispatchEvent(new Event('resize'));
                      this.setState({ imgHeight: 'auto' });
                    }}
                  />
                </a>
              ))}
            </Carousel>
          </WingBlank>
        </BannerWrap>
      );
    }else{
      return null;
    }
  }
  
}
export class Nav extends PureComponent {
  render() {
    // console.log(this.props.getVipData.priorList);
    
   if(this.props.indexTopData.slide_list.length!==0){
    return (
      <NavWrap>
        {/* */}
        <ul className="navTop">
          {
            this.props.indexTopData.classify_list.map((val, index) => (
              <li key={index}>
                <a
                  href={val.url}
                >
                  <img
                    src={val.pic} alt=""
                  />
                  <p>{val.name}</p>
                </a>
              </li>
            ))
          }
        </ul>
        {/* ------------------vip--------------------- */}
        <div>
         {/* {
            this.props.getVipData.priorList.length !== 0 ? (
              // var vipData = this.props.getVipData.priorList[0]
              <div className="vip">
                <div className="vipTop">
                  <div >
                    <span className="yxgp">优先购票</span>
                    <span className="vipTopl">VIP+会员尊享权益</span>
                  </div>
                  <div>
                    <span className="vipTopl">
                      开通99元/年
                  </span>
                  </div>
                </div>
                <div className="vipCon">
                  <div className="vipConImg">
                    <img src={this.props.getVipData.priorList[0].pic}  alt=""/>
                  </div>
                  <div className="vipConInfo">
                    <h3>{this.props.getVipData.priorList[0].schedular_name}</h3>
                    <p>{this.props.getVipData.priorList[0].city_name} | {this.props.getVipData.priorList[0].venue_name}</p>
                    <div className="time">
                      <span>{this.props.getVipData.priorList[0].pre_time}</span> 开始
                  </div>
                  </div>
                </div>
              </div>
            ) : (  */}
                <div className="imgBox">
                  <img src={this.props.indexTopData.ad_list.advert1[0].pic} alt=""/>
                </div>
              {/* )
          } */}
        </div>

        {/* ---------------vip卡------------------- */}
        <div className="operation">
          <ul className="operationTop">
            {
              this.props.indexTopData.operation_list.map((val, index) => (
                <li key={index}>
                  <a
                    href={val.url}
                  >
                    <div>
                      <h3>{val.name}</h3>
                      <div dangerouslySetInnerHTML={{ __html: val.describe }}></div>
                    </div>
                    <img
                      src={val.pic} alt=""
                    />

                  </a>
                </li>
              ))
            }
          </ul>
        </div>


      </NavWrap>
    )
   }else{
     return null
   }

  }
}


// const mapStateToProps = (state) => {
//   // console.log(state.getIn(["indexReducer", "getVipData"]))
//   return {
//     currentCity: state.getIn(["indexReducer", "currentCity"]).toJS(),
//     indexTopData: state.getIn(["indexReducer", "indexTopData"]).toJS(),
//     getVipData: state.getIn(["indexReducer", "getVipData"]).toJS(),
    
//   }
// }

// const mapDispatchToProps = (dispatch) => ({
//   pageInit() {
//     dispatch(loadHotCityListData(dispatch))
//     dispatch(loadIndexCityListData(dispatch))
//     dispatch(loadVipDataAsync(dispatch))
//   },
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Banner)
