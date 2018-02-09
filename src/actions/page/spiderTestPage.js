import axios from "axios";
import { TESTING_BASE_API_URL } from "../../config.js";

export const onCategoryChange = (value) => {return {
  type: "SPIDER_TEST_PAGE/ON_CATEGORY_CHANGE",
  value: value
}}


export const onTestUrlChange = (value) => {return {
  type: "SPIDER_TEST_PAGE/ON_TEST_URL_CHANGE",
  value: value
}}

const testing = () => {return {type: "SPIDER_TEST_PAGE/TESTING"}}
const tested = (result, testType) => {return {
  type: "SPIDER_TEST_PAGE/TESTED",
  result: result,
  testType: testType
}}

export const onTestThreadClick = () => {return (dispatch, getState) => {
  dispatch(testing())
  axios.post(`${TESTING_BASE_API_URL}/spider/forum/test`, {
    xpath: getState().forumSpiderTestForm,
    type: "Thread Test",
    url: getState().spiderTestPage.testUrl
  }, {headers: {"Content-Type": "application/json"}}).then(res => {
    dispatch(tested(res.data, "Thread Test"))
  }).catch(err => {
    dispatch(tested(err.response.data, "Error"))
  })
}}
export const onTestPostClick = () => {return (dispatch, getState) => {
  dispatch(testing())
  axios.post(`${TESTING_BASE_API_URL}/spider/forum/test`, {
    xpath: getState().forumSpiderTestForm,
    type: "Post Test",
    url: getState().spiderTestPage.testUrl
  }, {headers: {"Content-Type": "application/json"}}).then(res => {
    dispatch(tested(res.data, "Post Test"))
  }).catch(err => {
    dispatch(tested(err.response.data, "Error"))
  })
}}

export const onTestArticleClick = () => {return (dispatch, getState) => {
  dispatch(testing())
  axios.post(`${TESTING_BASE_API_URL}/spider/news/test`, {
    xpath: getState().newsSpiderTestForm,
    type: "Article Test",
    url: getState().spiderTestPage.testUrl
  }, {headers: {"Content-Type": "application/json"}}).then(res => {
    dispatch(tested(res.data, "Article Test"))
  }).catch(err => {
    dispatch(tested(err.response.data, "Error"))
  })
}}

export const onTestArticleUrlClick = () => {return (dispatch, getState) => {
  dispatch(testing())
  console.log(getState())
  axios.post(`${TESTING_BASE_API_URL}/spider/news/test`, {
    xpath: getState().newsSpiderTestForm,
    type: "Article URL Test",
    url: getState().spiderTestPage.testUrl
  }, {headers: {"Content-Type": "application/json"}}).then(res => {
    dispatch(tested(res.data, "Article URL Test"))
  }).catch(err => {
    dispatch(tested(err.response.data, "Error"))
  })
}}