const newsSpiderTestForm = (state ={
  article: {
    url: "//div[@class='sanserif pb5']/h3/a",
    title: "//h1[@class='title']",
    content: "//div[@id='content_news']",
    entryDate: "//div[@class='date mt10 mb10']"
  }
}, action) => {
  let newArticle;
  switch(action.type){
    case "NEWS_SPIDER_TEST_FORM/ON_URL_CHANGE":
      newArticle = Object.assign({}, state.article, {url: action.value})
      return Object.assign({}, state, {article: newArticle})
    case "NEWS_SPIDER_TEST_FORM/ON_TITLE_CHANGE":
      newArticle = Object.assign({}, state.article, {title: action.value})
      return Object.assign({}, state, {article: newArticle})
    case "NEWS_SPIDER_TEST_FORM/ON_CONTENT_CHANGE":
      newArticle = Object.assign({}, state.article, {content: action.value})
      return Object.assign({}, state, {article: newArticle})
    case "NEWS_SPIDER_TEST_FORM/ON_ENTRY_DATE_CHANGE":
      newArticle = Object.assign({}, state.article, {entryDate: action.value})
      return Object.assign({}, state, {article: newArticle})
    default:
      return state
  }
}
export default newsSpiderTestForm