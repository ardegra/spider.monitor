import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import ForumSpiderTestForm from "../../components/form/ForumSpiderTestForm";
import * as action from "../../actions/form/forumSpiderTestForm";

const mapStateToProps = (state) => {return {
  category: state.forumSpiderTestForm.category,
  post: state.forumSpiderTestForm.post,
  thread: state.forumSpiderTestForm.thread
}}

const mapDispatchToPros = (dispatch) => {return {
  onUrlChange: (e) => {dispatch(action.onUrlChange(e.target.value))},
  onLastPageChange: (e) => {dispatch(action.onLastPageChange(e.target.value))},
  onPrevPageChange: (e) => {dispatch(action.onPrevPageChange(e.target.value))},
  onNextPageChange: (e) => {dispatch(action.onNextPageChange(e.target.value))},
  onTitleChange: (e) => {dispatch(action.onTitleChange(e.target.value))},
  onFirstPostIdChange: (e) => {dispatch(action.onFirstPostIdChange(e.target.value))},
  onItemChange: (e) => {dispatch(action.onItemChange(e.target.value))},
  onIdChange: (e) => {dispatch(action.onIdChange(e.target.value))},
  onPermalinkChange: (e) => {dispatch(action.onPermalinkChange(e.target.value))},
  onEntryDateChange: (e) => {dispatch(action.onEntryDateChange(e.target.value))},
  onContentChange: (e) => {dispatch(action.onContentChange(e.target.value))},
  onAuthorIdChange: (e) => {dispatch(action.onAuthorIdChange(e.target.value))},
  onAuthorNameChange: (e) => {dispatch(action.onAuthorNameChange(e.target.value))},
  onAuthorUrlChange: (e) => {dispatch(action.onAuthorUrlChange(e.target.value))},
  onCategoryLastPageChange: (e) => {dispatch(action.onCategoryLastPageChange(e.target.value))},
  onCategoryPrevPageChange: (e) => {dispatch(action.onCategoryPrevPageChange(e.target.value))}
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(ForumSpiderTestForm));
