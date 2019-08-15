import React from 'react';
import { TicketWrap, CityWrap } from '../styled'
import { connect } from "react-redux"
import {
    loadCityList,
    loadShowCategory,
    loadShowList
} from "@/components/main/ticket/actionCreator"
import { Tabs, WhiteSpace } from 'antd-mobile';

class City extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            isCity: false,
            native: 0,
            currentCity: {
                city_id: '0',
                name: '全国'
            },
            category_id: '0'
        }
    }
    renderContent = tab => {
        this.setState({ category_id: tab.category_id }, () => {
            let data = {
                category_id: this.state.category_id,
                city_id: this.state.currentCity.city_id,
                page: '1',
            }
            this.props.getshow.bind(this, data)()
        })

    };
    render() {
        const tabs = [];
        tabs.push({ title: "全部", category_id: '0' })
        if (this.props.show_category_list.length !== 0) {
            this.props.show_category_list.map((item) => {
                tabs.push({ title: item.name, category_id: item.category_id })
            })
            return (
                <TicketWrap>
                    <div className="classify">
                        <WhiteSpace />
                        <Tabs tabs={tabs} onChange={this.renderContent.bind(this)} onTabClick={this.renderContent.bind(this)} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} initialPage={2}/>}>
                        </Tabs>
                        <WhiteSpace />
                        <div className="address">
                            <span onClick={() => {
                                this.setState({ isCity: !this.state.isCity })
                            }}>{this.state.currentCity.name}</span>
                        </div>
                    </div>
                    <div>
                        {
                            this.state.isCity ? (
                                <CityWrap>
                                    <div className="lBox" onClick={() => {
                                        this.setState({ isCity: !this.state.isCity })
                                    }}>
                                    </div>
                                    <div className="rBox">
                                        <h3>城市</h3>
                                        <div className="cityList">
                                            <ul>
                                                {
                                                    this.props.cityList.map((item, index) => (
                                                        <li key={index} onClick={this.bg.bind(this, item, index)} className={this.state.native === index ? 'native' : ''} >
                                                            {item.name}
                                                        </li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        <div className="foot">
                                            <span onClick={this.initCity.bind(this)}>重置</span>
                                            <span className="active" onClick={this.handleCity.bind(this)}>确定</span>
                                        </div>
                                    </div>
                                </CityWrap>
                            ) : null
                        }
                    </div>

                    {
                        Object.keys(this.props.showList).length !== 0 ? (
                            <ul className="showList">
                                {
                                    this.props.showList.list.map((item, index) => (
                                        <li key={index}>
                                            <div className="imgBox">
                                                <img src={item.pic} alt="" />
                                            </div>
                                            <div className="info">
                                                <p>{item.show_time_top}
                                                    <span>{item.show_time_bottom}</span>
                                                </p>
                                                <h3>{item.name}</h3>
                                                <p>{item.city_name} | {item.venue_name}</p>
                                                <p>
                                                    <span>￥{item.min_price}</span>起
                                        </p>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        ) : (
                                <div className="none">
                                    <h3>没有更多了</h3>
                                </div>
                            )
                    }
                </TicketWrap >
            )
        } else {
            return null
        }
    }
    componentDidMount() {
        this.props.pageInit.bind(this)()
    }
    bg(item, index) {
        console.log(item);

        this.setState({ currentCity: item });
        this.setState({ native: index })
    }
    initCity() {
        let  data= {
            city_id: '0',
            name: '全国'
        }
        this.setState({
            currentCity:data
        });
    }
    handleCity() {
        let data = {
            category_id: this.state.category_id,
            city_id: this.state.currentCity.city_id,
            page: '1',
        }
        this.props.getshow.bind(this, data)()
        this.setState({ isCity: false });
    }
}
const mapStateToProps = (state) => {
    // console.log(state.getIn(["ticketReducer", "cityList"]).toJS());
    return {
        cityList: state.getIn(["ticketReducer", "cityList"]).unshift({ city_id: '0', name: '全国' }).toJS(),
        show_category_list: state.getIn(["ticketReducer", "show_category_list"]).toJS(),
        showList: state.getIn(["ticketReducer", "showList"]).toJS()
    }
}

const mapDispatchToProps = (dispatch) => ({
    pageInit() {
        dispatch(loadShowCategory(dispatch))
        dispatch(loadCityList(dispatch))
        let data = {
            category_id: "0",
            city_id: "0",
            page: '1'
        }
        // console.log(this.props.paramas.category_id);
        
        this.props.getshow(data)
    },
    getshow(data) {
        dispatch(loadShowList(dispatch, data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(City)


