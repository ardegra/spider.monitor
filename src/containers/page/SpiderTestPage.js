import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import SpiderTestPage from "../../components/page/SpiderTestPage";
import * as action from "../../actions/page/spiderTestPage";

const mapStateToProps = (state) => {return {
  category: state.spiderTestPage.category,
  testUrl: state.spiderTestPage.testUrl,
  isTesting: state.spiderTestPage.isTesting,
  result: state.spiderTestPage.result
}}

const mapDispatchToPros = (dispatch) => {return {
  onCategoryChange: (e) => {dispatch(action.onCategoryChange(e.target.value))},
  onTestUrlChange: (e) => {dispatch(action.onTestUrlChange(e.target.value))},
  onTestThreadClick: (e) => {dispatch(action.onTestThreadClick())},
  onTestPostClick: (e) => {dispatch(action.onTestPostClick())},
  onTestArticleClick: (e) => {dispatch(action.onTestArticleClick())},
  onTestArticleUrlClick: (e) => {dispatch(action.onTestArticleUrlClick())}
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(SpiderTestPage));
