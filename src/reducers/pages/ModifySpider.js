const ModifySpider = (state ={
    value: "F1",
    spiderModify: [],
    isLoading: true,
    threadurl: "",
    threadlastpage: "",
    threadprevpage: "",
    threadnextpage: "",
    threadtitle: "",
    categorylastpage: "",
    categoryprevpage: "",
    categorylist: "",
    postfirstpostid: "",
    postitem: "",
    postid: "",
    postpermalink: "",
    postentrydate: "",
    postcontent: "",
    postauthorid: "",
    postauthoridname: "",
    postauthoridurl: "",
    articleurl: "",
    articletitle: "",
    articlecontent: "",
    articleentrydate: "",
    ignoredomainlist: "",
    
    spidername: "",
    spidercategory: "",
    country: "",
    indexurl: "",
    entrydate:"",
    indexmax:"",
    indexstart:"",
    indexend:"",
    indexoffset:"",
    
    isLoading: false,
    isError: false,
    isSuccess: false
}, action) => {
    switch(action.type){
        case "MODIFY_SPIDER_CHANGE":
            return Object.assign({}, state, {
                value: action.value,
                threadurl: "",
                threadlastpage: "",
                threadprevpage: "",
                threadnextpage: "",
                threadtitle: "",
                categorylastpage: "",
                categoryprevpage: "",
                categorylist: "",
                postfirstpostid: "",
                postitem: "",
                postid: "",
                postpermalink: "",
                postentrydate: "",
                postcontent: "",
                postauthorid: "",
                postauthoridname: "",
                postauthoridurl: "",
                articleurl: "",
                articletitle: "",
                articlecontent: "",
                articleentrydate: "",
                ignoredomainlist: "",
                spidername: "",
                spidercategory: "",
                country: "",
                indexurl: "",
                entrydate: "",
                indexmax: "",
                indexstart: "",
                indexend: "",
                indexoffset: "",
                isLoading: false,
                isError: false,
                isSuccess: false
            })
        case "XPATHF_ON_THREAD_URL_CHANGE":
            // let newSpiderModify = Object.assign({}, state.spiderModify.xpath.thread, {url: action.threadurl})
            // return Object.assign({}, state, {spiderModify: newSpiderModify})
            return Object.assign({}, state, {threadurl: action.threadurl})
        case "XPATHF_ON_THREAD_LAST_PAGE":
            return Object.assign({}, state, {threadlastpage: action.threadlastpage})
        case "XPATHF_ON_THREAD_PREV_PAGE":
            return Object.assign({}, state, {threadprevpage: action.threadprevpage})
        case "XPATHF_ON_THREAD_NEXT_PAGE":
            return Object.assign({}, state, {threadnextpage: action.threadnextpage})
        case "XPATHF_ON_THREAD_TITLE":
            return Object.assign({}, state, {threadtitle: action.threadtitle})
        case "XPATHF_CATEGORY_LAST_PAGE":
            return Object.assign({}, state, {categorylastpage: action.categorylastpage})
        case "XPATHF_CATEGORY_PREV_PAGE":
            return Object.assign({}, state, {categoryprevpage: action.categoryprevpage})
        case "XPATHF_CATEGORY_LIST":
            return Object.assign({}, state, {categorylist: action.categorylist})
        case "XPATHF_POST_FIRST_POST_ID":
            return Object.assign({}, state, {postfirstpostid: action.postfirstpostid})
        case "XPATHF_POST_ITEM":
            return Object.assign({}, state, {postitem: action.postitem})
        case "XPATHF_POST_ID":
            return Object.assign({}, state, {postid: action.postid})
        case "XPATHF_POST_PERMALINK":
            return Object.assign({}, state, {postpermalink: action.postpermalink})
        case "XPATHF_POST_ENTRY_DATE":
            return Object.assign({}, state, {postentrydate: action.postentrydate})
        case "XPATHF_POST_CONTENT":
            return Object.assign({}, state, {postcontent: action.postcontent})
        case "XPATHF_IGNORE_DOMAIN_LIST":
            return Object.assign({}, state, {ignoredomainlist: action.ignoredomainlist})
        case "XPATHF_POST_AUTHOR_ID":
            return Object.assign({}, state, {postauthorid: action.postauthorid})
        case "XPATHF_POST_AUTHOR_ID_NAME":
            return Object.assign({}, state, {postauthoridname: action.postauthoridname})
        case "XPATHF_POST_AUTHOR_ID_URL":
            return Object.assign({}, state, {postauthoridurl: action.postauthoridurl})
        case "XPATHF_ARTICLE_URL":
            return Object.assign({}, state, {articleurl: action.articleurl})
        case "XPATHF_ARTICLE_TITLE":
            return Object.assign({}, state, {articletitle: action.articletitle})
        case "XPATHF_ARTICLE_CONTENT":
            return Object.assign({}, state, {articlecontent: action.articlecontent})
        case "XPATHF_ARTICLE_ENTRY_DATE":
            return Object.assign({}, state, {articleentrydate: action.articleentrydate})
            
        case "XATTRIBUTE_SPIDER_NAME":
            return Object.assign({}, state, {spidername: action.spidername})
        case "XATTRIBUTE_SPIDER_CATEGORY":
            return Object.assign({}, state, {spidercategory: action.spidercategory})
        case "XATTRIBUTE_COUNTRY":
            return Object.assign({}, state, {country: action.country})
        case "XATTRIBUTE_INDEX_URL":
            return Object.assign({}, state, {indexurl: action.indexurl})
        case "XATTRIBUTE_ENTRY_DATE":
            return Object.assign({}, state, {entrydate: action.entrydate})
        case "XATTRIBUTE_INDEX_MAX":
            return Object.assign({}, state, {indexmax: action.indexmax})
        case "XATTRIBUTE_INDEX_START":
            return Object.assign({}, state, {indexstart: action.indexstart})
        case "XATTRIBUTE_INDEX_END":
            return Object.assign({}, state, {indexend: action.indexend})
        case "XATTRIBUTE_INDEX_OFFSET":
            return Object.assign({}, state, {indexoffset: action.indexoffset})
            
        case "MODIFY_SPIDER_LOADING":
            return Object.assign({}, state, {isLoading: true, isError: false, isSuccess: false})
        case "MODIFY_SPIDER_FETCHED" :
            let doc = {
                spidercategory: action.spiderModify.category,
                country: action.spiderModify.country,
                indexurl: action.spiderModify.indexUrl,
                entrydate: action.spiderModify.entryDateParser,
                indexmax: parseInt(action.spiderModify.indexMaxPageNumber),
                indexstart: action.spiderModify.indexStartDate,
                indexend: action.spiderModify.indexEndDate,
                indexoffset: action.spiderModify.indexOffsetIncrement,
                categorylist: action.spiderModify.categoryList,
                ignoredomainlist: action.spiderModify.ignoreDomainList
            }
            if(action.spiderModify.type.name === "Forum Spider 1"){
                doc = {...doc, 
                    threadurl: action.spiderModify.xpath.thread.url,
                    threadlastpage: action.spiderModify.xpath.thread.lastPage,
                    threadprevpage: action.spiderModify.xpath.thread.prevPage,
                    threadnextpage: action.spiderModify.xpath.thread.nextPage,
                    threadtitle: action.spiderModify.xpath.thread.title,
                    categorylastpage: action.spiderModify.xpath.category.lastPage,
                    categoryprevpage: action.spiderModify.xpath.category.prevPage,
                    postfirstpostid: action.spiderModify.xpath.post.firstPostId,
                    postitem: action.spiderModify.xpath.post.item,
                    postid: action.spiderModify.xpath.post.id,
                    postpermalink: action.spiderModify.xpath.post.permalink,
                    postentrydate: action.spiderModify.xpath.thread.entryDate,
                    postcontent: action.spiderModify.xpath.post.content,
                    postauthorid: action.spiderModify.xpath.post.authorId,
                    postauthoridname: action.spiderModify.xpath.post.authorName,
                    postauthoridurl: action.spiderModify.xpath.post.authorUrl
                }
            }else{
                doc = {...doc, 
                    articleurl: action.spiderModify.xpath.article.url,
                    articletitle: action.spiderModify.xpath.article.title,
                    articlecontent: action.spiderModify.xpath.article.content,
                    articleentrydate: action.spiderModify.xpath.article.entryDate
                }
            }
            return Object.assign({}, state, {...doc,  spiderModify : action.spiderModify, isLoading: false})
        case "MODIFY_SPIDER_REFRESH" :
            return Object.assign({}, state, {isLoading: true})
        case "MODIFY_SPIDER_SHOW_SUCCESS":
            return Object.assign({}, state, {
                isLoading: false,
                isError: false,
                isSuccess: true
            })
        case "MODIFY_SPIDER_SHOW_ERROR":
            return Object.assign({}, state, {
                isLoading: false,
                isSuccess: false,
                isError: true,
                errorMessage: action.message
            })
        default:
            return state
    }
}
export default ModifySpider