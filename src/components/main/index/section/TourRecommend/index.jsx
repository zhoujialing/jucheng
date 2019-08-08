import React, { PureComponent } from 'react';
import { connect } from "react-redux";
import { loadTourRecommend } from "@/components/main/index/actionCreator"
import { RecommendT, Title } from "@/components/main/index/section/styled"
import { Carousel, WingBlank } from 'antd-mobile';

class TourRecommend extends PureComponent {
    state = {
        data: [],
        imgHeight: 176,
    }
    componentDidMount() {
        this.props.pageInit.bind(this)()
    }
    render() {
        if (this.props.tourShowList.length !== 0) {

            return (
                <RecommendT>
                    <div>
                        <Title>巡回演出</Title>
                    </div>
                    <WingBlank>

                        <Carousel className="space-carousel"
                            frameOverflow="visible"
                            cellSpacing={10}
                            slideWidth={0.8}
                            dots={false}
                            // beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                            afterChange={index => this.setState({ slideIndex: index })}
                        >
                            {this.props.tourShowList.slice(0, 6).map((val, index) => (
                                <a
                                    key={index}
                                    style={{
                                        display: 'block',
                                        position: 'relative',
                                        top: this.state.slideIndex === index ? -10 : 0,
                                        height: this.state.imgHeight,
                                        boxShadow: '2px 1px 1px rgba(0, 0, 0, 0.2)',
                                    }}
                                >
                                    <img
                                        src={val.pic}
                                        alt=""
                                        style={{ width: '100%', verticalAlign: 'top' }}
                                        onLoad={() => {
                                            // fire window resize event to change height
                                            window.dispatchEvent(new Event('resize'));
                                            this.setState({ imgHeight: '190' });
                                        }}
                                    />
                                    <h3>{val.show_name}</h3>
                                    <p>{val.schedular_num}场巡演</p>
                                </a>
                            ))}
                        </Carousel>
                    </WingBlank>
                </RecommendT>
            );
        } else {
            return null
        }
    }
}


const mapStateToProps = (state) => {
    // console.log(state.getIn(["indexReducer", "tour_show_list"]))
    return {
        currentCity: state.getIn(["indexReducer", "currentCity"]).toJS(),
        tourShowList: state.getIn(["indexReducer", "tour_show_list"]).toJS(),
    }
}

const mapDispatchToProps = (dispatch) => ({
    pageInit() {
        dispatch(loadTourRecommend(dispatch, this.props.currentCity))
    }
})



export default connect(mapStateToProps, mapDispatchToProps)(TourRecommend)