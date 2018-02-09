import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import DetailSpider from "../components/DetailSpider";
import {fetchDetail} from "../actions/DetailSpider";
import {refresh} from "../actions/DetailSpider";

const mapStateToProps = (state) => {return {
    spiderDetail: state.DetailSpider.spiderDetail,
    isLoading: state.DetailSpider.isLoading
}}

const mapDispatchToPros = (dispatch) => {return {
    fetchDetail: (namenow) => {dispatch(fetchDetail(namenow))},
    refresh : () => {dispatch(refresh())}
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(DetailSpider));