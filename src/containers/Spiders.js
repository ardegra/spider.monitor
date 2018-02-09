import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Spiders from "../components/Spiders";
import {fetchSpider} from "../actions/Spiders";

const mapStateToProps = (state) => {return {
    spiderList: state.Spiders.spiderList,
    isLoading: state.Spiders.isLoading
}}

const mapDispatchToPros = (dispatch) => {return {
    fetchSpider: () => {dispatch(fetchSpider())}
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(Spiders));