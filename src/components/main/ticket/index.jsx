import React, { Fragment } from 'react';
import { TicketWrap } from './styled'
import { connect } from "react-redux"
import {
    loadCityList,
    loadShowCategory,
    loadShowList
} from "@/components/main/ticket/actionCreator"
import { Tabs, WhiteSpace } from 'antd-mobile';
import PiaoContnt from "./piaoCont"

class Ticket extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            category_id: "",
        }
    }
    renderContent = tab => {
        // console.log(this);
        this.setState({category_id:tab.category_id})
        return (
            <Fragment>
                <PiaoContnt category_id={this.state.category_id} />
            </Fragment>
        )
    }
        ;
    render() {
        const tabs = [];
        if (this.props.show_category_list.length !== 0) {
            this.props.show_category_list.map((item) => {
                tabs.push({ title: item.name, category_id: item.category_id })
            })
            console.log(tabs);

            return (
                <TicketWrap>
                    <header>
                        <div className="headTop">
                            <p>演出</p>
                        </div>
                        <div className="classify">
                            <WhiteSpace />
                            <Tabs tabs={tabs} renderTabBar={props => <Tabs.DefaultTabBar {...props} page={4} />}>
                                {this.renderContent}
                            </Tabs>
                            <WhiteSpace />
                            {/* <div className="address">
                                <span>全国</span>
                                <span className="addImg"></span>
                            </div> */}
                        </div>

                    </header>
                </TicketWrap>
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
    console.log(state.getIn(["ticketReducer", "showList"]).toJS());

    return {
        currentCity: state.getIn(["ticketReducer", "cityList"]).toJS(),
        show_category_list: state.getIn(["ticketReducer", "show_category_list"]).toJS(),
        showList: state.getIn(["ticketReducer", "showList"]).toJS()
    }
}

const mapDispatchToProps = (dispatch) => ({
    pageInit() {
        dispatch(loadShowCategory(dispatch))
        dispatch(loadCityList(dispatch))

        let data = {
            category: this.props.category_id,
            city_id: 0,
            page: 1,
        }
        this.props.getshow(data)
    },
    getshow(data) {
        dispatch(loadShowList(dispatch, data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Ticket)


