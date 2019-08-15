import React from 'react';
import { connect } from "react-redux"
import { PullToRefresh } from 'antd-mobile';

import {
  loadRecommendShow
} from "@/components/main/index/actionCreator"

class UpLoad extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      height: document.documentElement.clientHeight,

    }
  }
  render() {
    return (
      <PullToRefresh
        damping={60}
        ref={el => this.ptr = el}
        style={{
          height: this.state.height,
          overflow: 'auto',
        }}

        direction={'up'}
        onRefresh={() => {
          this.props.getUploadData.bind(this, { cityAdd: this.props.currentCity.Abbreviation, page: ++this.state.page })();
        }}
      >
        {this.props.children}
        
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