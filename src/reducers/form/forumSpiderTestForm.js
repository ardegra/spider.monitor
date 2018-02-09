const forumSpiderTestForm = (state ={
  thread: {
    lastPage: "(//a[@class='tooltips last-page'])[last()]",
    prevPage: "(//a[@class='tooltips previous-page'])[last()]",
    nextPage: "(//a[@class='tooltips next-page'])[last()]",
    title: "//div[@class='current']",
    url: "//tr[@itemprop='itemListElement']//div[@class='post-title']/a"
  },
  category: {
    lastPage: "(//a[@class='tooltips last-page'])[last()]",
    prevPage: "(//a[@class='tooltips previous-page'])[last()]"
  },
  post: {
    authorId: ".//div[@class='user-name']/@data-userid",
    authorName: ".//span[@itemprop='name']",
    authorUrl: ".//a[@class='nickname']",
    id: "./@id",
    item: "(//div[@class='row nor-post']|//div[@class='row first-post'])",
    permalink: ".//div[@class='permalink']/a",
    entryDate: ".//time[@class='entry-date']/@datetime", 
    firstPostId: "//div[@class='row first-post']/@id",
    content: ".//div[@class='entry']"
  }
}, action) => {
  let newThread;
  let newCategory;
  let newPost;
  
  switch(action.type){
    case "FORUM_SPIDER_TEST_FORM/ON_THREAD_URL_CHANGE":
      newThread = Object.assign({}, state.thread, {url: action.value})
      return Object.assign({}, state, {thread: newThread})
    case "FORUM_SPIDER_TEST_FORM/ON_THREAD_LAST_PAGE_CHANGE":
      newThread = Object.assign({}, state.thread, {lastPage: action.value})
      return Object.assign({}, state, {thread: newThread})
    case "FORUM_SPIDER_TEST_FORM/ON_THREAD_PREV_PAGE_CHANGE": 
      newThread = Object.assign({}, state.thread, {prevPage: action.value})
      return Object.assign({}, state, {thread: newThread})
    case "FORUM_SPIDER_TEST_FORM/ON_THREAD_NEXT_PAGE_CHANGE": 
      newThread = Object.assign({}, state.thread, {nextPage: action.value})
      return Object.assign({}, state, {thread: newThread})
    case "FORUM_SPIDER_TEST_FORM/ON_THREAD_TITLE_CHANGE":
      newThread = Object.assign({}, state.thread, {title: action.value})
      return Object.assign({}, state, {thread: newThread})
    case "FORUM_SPIDER_TEST_FORM/ON_POST_FIRST_POST_ID_CHANGE":
      newPost = Object.assign({}, state.post, {firstPostId: action.value})
      return Object.assign({}, state, {post: newPost})
    case "FORUM_SPIDER_TEST_FORM/ON_POST_ITEM_CHANGE":
      newPost = Object.assign({}, state.post, {item: action.value})
      return Object.assign({}, state, {post: newPost})
    case "FORUM_SPIDER_TEST_FORM/ON_POST_ID_CHANGE":
      newPost = Object.assign({}, state.post, {id: action.value})
      return Object.assign({}, state, {post: newPost})
    case "FORUM_SPIDER_TEST_FORM/ON_POST_PERMALINK_CHANGE":
      newPost = Object.assign({}, state.post, {permalink: action.value})
      return Object.assign({}, state, {post: newPost})
    case "FORUM_SPIDER_TEST_FORM/ON_POST_ENTRY_DATE_CHANGE":
      newPost = Object.assign({}, state.post, {entryDate: action.value})
      return Object.assign({}, state, {post: newPost})
    case "FORUM_SPIDER_TEST_FORM/ON_POST_CONTENT_CHANGE":
      newPost = Object.assign({}, state.post, {content: action.value})
      return Object.assign({}, state, {post: newPost})
    case "FORUM_SPIDER_TEST_FORM/ON_POST_AUTHOR_ID_CHANGE":
      newPost = Object.assign({}, state.post, {authorId: action.value})
      return Object.assign({}, state, {post: newPost})
    case "FORUM_SPIDER_TEST_FORM/ON_POST_AUTHOR_NAME_CHANGE":
      newPost = Object.assign({}, state.post, {authorName: action.value})
      return Object.assign({}, state, {post: newPost})
    case "FORUM_SPIDER_TEST_FORM/ON_POST_AUTHOR_URL_CHANGE":
      newPost = Object.assign({}, state.post, {authorUrl: action.value})
      return Object.assign({}, state, {post: newPost})
    case "FORUM_SPIDER_TEST_FORM/ON_CATEGORY_LAST_PAGE_CHANGE":
      newCategory = Object.assign({}, state.category, {lastPage: action.value})
      return Object.assign({}, state, {category: newCategory})
    case "FORUM_SPIDER_TEST_FORM/ON_CATEGORY_PREV_PAGE_CHANGE":
      newCategory = Object.assign({}, state.category, {prevPage: action.value})
      return Object.assign({}, state, {category: newCategory})
    default:
      return state
  }
}
export default forumSpiderTestForm