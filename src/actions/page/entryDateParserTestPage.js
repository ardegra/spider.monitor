import axios from "axios";
import { TESTING_BASE_API_URL } from "../../config.js";

export const onParserNameChange = (value) => {return {
  type: "ENTRY_DATE_PARSER_TEST_PAGE/ON_PARSER_NAME_CHANGE",
  value: value
}}

export const onEntryDateChange = (value) => {return {
  type: "ENTRY_DATE_PARSER_TEST_PAGE/ON_ENTRY_DATE_CHANGE",
  value: value
}}

const testing = () => {return {
  type: "ENTRY_DATE_PARSER_TEST_PAGE/TESTING"
}}

const tested = (res) => {return {
  type: "ENTRY_DATE_PARSER_TEST_PAGE/TESTED",
  response: res
}}

export const onSubmit = () => {return (dispatch, getState) => {
  dispatch(testing())
  
  let parserName = getState().entryDateParserTestPage.parserName;
  let date = getState().entryDateParserTestPage.entryDate;
  
  axios.post(`${TESTING_BASE_API_URL}/parser/entryDate/test`, {
    parser: parserName,
    date: date
  }, {headers: {"Content-Type": "application/json"}}).then(res => {
    dispatch(tested(res.data))
  }).catch(err => {
    dispatch(tested(err.response.data))
  })
}}