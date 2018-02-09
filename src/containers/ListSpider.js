import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ListSpider from "../components/ListSpider";
import * as action from "../actions/ListSpider";

const mapStateToProps = (state) => {return {
    spiderList: state.listSpider.spiderList,
    isLoading: state.listSpider.isLoaded
}}

const mapDispatchToPros = (dispatch) => {return {
    startStopClick: (spiderName) => {dispatch(action.startStopClick(spiderName))},
    startAllClick: () => {dispatch(action.startAllClick())},
    loadAllSpider: () => {dispatch(action.loadAllSpider())},
    fetchSpider: () => {dispatch(action.fetchSpider())},
    /*startStopClick: (spiderName) => {
        e.preventDefault()
        dispatch(action.startStopClick(e))
    }*/
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(ListSpider));