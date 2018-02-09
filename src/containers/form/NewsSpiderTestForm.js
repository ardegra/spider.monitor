import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import NewsSpiderTestForm from "../../components/form/NewsSpiderTestForm";
import * as action from "../../actions/form/newsSpiderTestForm";

const mapStateToProps = (state) => {return {
  article: state.newsSpiderTestForm.article
}}

const mapDispatchToPros = (dispatch) => {return {
  onUrlChange: (e) => {dispatch(action.onUrlChange(e.target.value))},
  onTitleChange: (e) => {dispatch(action.onTitleChange(e.target.value))},
  onContentChange: (e) => {dispatch(action.onContentChange(e.target.value))},
  onEntryDateChange: (e) => {dispatch(action.onEntryDateChange(e.target.value))}
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(NewsSpiderTestForm));
