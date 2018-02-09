import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import HistorySpider from "../components/HistorySpider";
import {fetchHistory} from "../actions/HistorySpider";

const mapStateToProps = (state) => {return {
    HistorySpider: state.HistorySpider.HistorySpider,
    isLoading: state.HistorySpider.isLoading
}}

const mapDispatchToPros = (dispatch) => {return {
    fetchHistory: () => {dispatch(fetchHistory())}
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(HistorySpider));