const spiderTestPage = (state ={
  category: "",
  testUrl: "",
  isTesting: false,
  result: {}
}, action) => {
  switch(action.type){
    case "SPIDER_TEST_PAGE/ON_CATEGORY_CHANGE":
      return Object.assign({}, state, {category: action.value, isTesting: false})
    case "SPIDER_TEST_PAGE/ON_TEST_URL_CHANGE":
      return Object.assign({}, state, {testUrl: action.value, isTesting: false})
    case "SPIDER_TEST_PAGE/TESTING":
      return Object.assign({}, state, {isTesting: true})
    case "SPIDER_TEST_PAGE/TESTED":
      return Object.assign({}, state, {isTesting: false, result: action.result})
    default:
      return state
  }
}
export default spiderTestPage