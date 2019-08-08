import React from 'react';
import { connect } from "react-redux"
import { PullToRefresh } from 'antd-mobile';
import { Refresh } from '../styled'

import {
  loadRecommendShow
} from "@/components/main/index/actionCreator"

class UpLoad extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
  }
  render() {
    return (
      <PullToRefresh
        damping={60}
        ref={el => this.ptr = el}
        direction={'up'}
        onRefresh={() => {
          this.props.getUploadData.bind(this, { cityAdd: this.props.currentCity.Abbreviation, page: ++this.state.page })();
        }}
      >
        {this.props.children}
        <Refresh >
          <div className="title">
            <h3>为你推荐</h3>
          </div>
          <ul className="tuijian">
            {
              this.props.upLoad.map((item, index) => (
                <li key={index} className="showList">
                  <div className="showImg">
                    <img src={item.schePic} />
                    <div dangerouslySetInnerHTML={{ __html: item.tag_icon }}></div>
                  </div>
                  <div className="showinfo">
                    <p>{item.show_time}</p>
                    <h3>{item.show_name}</h3>
                    <p>{item.c_name}|{item.v_name}</p>
                    <p>
                      <span>￥{parseInt(item.low_price)}</span>起
                    </p>
                  </div>
                </li>
              ))
            }
          </ul>
        </Refresh>
      </PullToRefresh>
    );
  }
  componentDidMount() {
    this.props.getUploadData.bind(this, { cityAdd: this.props.currentCity.Abbreviation, page: 1 })();
  }
}
const mapStateToProps = (state) => {
  return {
    currentCity: state.getIn(["indexReducer", "currentCity"]).toJS(),
    upLoad: state.getIn(["indexReducer", "upLoad"]).toJS(),
  }
}

const mapDispatchToProps = (dispatch) => ({
  getUploadData(data) {
    dispatch(loadRecommendShow(dispatch, data))
  },

})

export default connect(mapStateToProps, mapDispatchToProps)(UpLoad)