import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import EntryDateParserTestPage from "../../components/page/EntryDateParserTestPage";
import * as action from "../../actions/page/entryDateParserTestPage";

const mapStateToProps = (state) => {return {
  parserName: state.entryDateParserTestPage.parserName,
  parserList: state.entryDateParserTestPage.parserList,
  entryDate: state.entryDateParserTestPage.entryDate,
  result: state.entryDateParserTestPage.result
}}

const mapDispatchToPros = (dispatch) => {return {
  onParserNameChange: (e) => {dispatch(action.onParserNameChange(e.target.value))},
  onEntryDateChange: (e) => {dispatch(action.onEntryDateChange(e.target.value))},
  onSubmit: (e) => {
    e.preventDefault();
    dispatch(action.onSubmit())
  }
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(EntryDateParserTestPage));
