import React, { Fragment } from 'react';
import { connect } from "react-redux"



class PiaoConten extends React.PureComponent {
    
    render() {
        return (
            <Fragment>
               <div>xxxxx</div>
            </Fragment>
        )
    }
    
    componentWillReceiveProps(props){
        console.log(props)
    }
}
const mapStateToProps = (state) => {
    console.log(state.getIn(["ticketReducer", "showList"]).toJS());

    return {
        // currentCity: state.getIn(["ticketReducer", "cityList"]).toJS(),
        // show_category_list: state.getIn(["ticketReducer", "show_category_list"]).toJS(),
        // showList:state.getIn(["ticketReducer", "showList"]).toJS()
    }
}

const mapDispatchToProps = (dispatch) => ({
    pageInit() {
        // dispatch(loadShowCategory(dispatch))
        // dispatch(loadCityList(dispatch))

        // let data = {
        //     category: this.props.category_id,
        //     city_id: 0,
        //     page: 1,
        // }
        // this.props.getshow(data)
    },
    getshow(data) {
        //  dispatch(loadShowList(dispatch,data))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(PiaoConten)


