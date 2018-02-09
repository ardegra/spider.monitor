const AddSpider = (state ={
    value: "F1",
    threadurl: "",
    threadlastPage: "",
    threadprevPage: "",
    threadnextPage: "",
    threadtitle: "",
    categorylastPage: "",
    categoryprevPage: "",
    categorylist: "",
    postfirstPostId: "",
    postitem: "",
    postid: "",
    postpermalink: "",
    postentryDate: "",
    postcontent: "",
    postauthorId: "",
    postauthorName: "",
    postauthorUrl: "",
    ignoreDomainList: "",
    articleurl: "",
    articletitle: "",
    articlecontent: "",
    articleentryDate: "",
    
    country: "",
    spiderName: "",
    isspidername: false,
    spiderCategory: "",
    isspidercategory: false,
    indexUrl: "",
    isindexurl: false,
    entryDateParser:"",
    isentrydate: false,
    indexMaxPageNumber:"",
    isindexmax: false,
    indexStartDate:"",
    isindexstart: false,
    indexEndDate:"",
    isindexend: false,
    indexOffsetIncremenet:"",
    isindexoffset: false,
    iscategorylist: false,
    isignoredomainlist: false,
    
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMessage: ""
}, action) => {
    switch(action.type){
        case "ADD_SPIDER_CHANGE":
            let newspidername, newspidercategory, newindexurl, newignoredomainlist
            let newentrydate, newindexmax, newindexstart, newcategorylist
            let newindexend, newindexoffset
            if(action.value==='F1'){
                newindexurl= true
                newentrydate= true
                newindexmax= true
                newindexstart= true
                newindexend= true
                newindexoffset= true
                newignoredomainlist= true
            }else if(action.value==='N1'){
                newcategorylist= true
                newindexstart= true
                newindexend= true
                newindexoffset= true
            }else if(action.value==='N2'){
                newcategorylist= true
                newindexoffset= true
                newindexmax= true
            }else {
                newindexmax= true
            }
            return Object.assign({}, state, {
                value: action.value,
                threadurl: "",
                threadlastPage: "",
                threadprevPage: "",
                threadnextPage: "",
                threadtitle: "",
                categorylastPage: "",
                categoryprevPage: "",
                categorylist: "",
                postfirstPostId: "",
                postitem: "",
                postid: "",
                postpermalink: "",
                postentryDate: "",
                postcontent: "",
                postauthorId: "",
                postauthorName: "",
                postauthorUrl: "",
                ignoredomainlist: "",
                articleurl: "",
                articletitle: "",
                articlecontent: "",
                articleentryDate: "",
                country: "",
                spiderName: "",
                isspidername: newspidername,
                spiderCategory: "",
                isspidercategory: newspidercategory,
                indexUrl: "",
                isindexurl: newindexurl,
                entryDateParser: "",
                isentrydate: newentrydate,
                indexMaxPageNumber: "",
                isindexmax: newindexmax,
                indexStartDate: "",
                isindexstart: newindexstart,
                indexEndDate: "",
                isindexend: newindexend,
                indexOffsetIncrement: "",
                isindexoffset: newindexoffset,
                indexOffsetIncrement: "",
                iscategorylist: newcategorylist,
                isignoredomainlist: newignoredomainlist,
                isLoading: false,
                isError: false,
                isSuccess: false,
                errorMessage: ""
            })
        case "XPATHF_ON_THREAD_URL_CHANGE":
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
            
        case "XATTRIBUTE_COUNTRY":
            return Object.assign({}, state, {country: action.country})
        case "XATTRIBUTE_SPIDER_NAME":
            return Object.assign({}, state, {spidername: action.spidername})
        case "XATTRIBUTE_SPIDER_CATEGORY":
            return Object.assign({}, state, {spidercategory: action.spidercategory})
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
        case "ADD_SPIDER_LOADING":
            return Object.assign({}, state, {isLoading: true, isError: false, isSuccess: false})
        case "ADD_SPIDER_REFRESH" :
            return Object.assign({}, state, {
                isLoading: false,
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
                ignoredomainlist: "",
                country: "",
                spidername: "",
                spidercategory: "",
                indexurl: "",
                entrydate:"",
                indexmax:"",
                indexstart:"",
                indexend:"",
                indexoffset:""
            })
        case "ADD_SPIDER_SHOW_SUCCESS":
            return Object.assign({}, state, {
                isLoading: false,
                isError: false,
                isSuccess: true,
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
                ignoredomainlist: "",
                country: "",
                spidername: "",
                spidercategory: "",
                indexurl: "",
                entrydate:"",
                indexmax:"",
                indexstart:"",
                indexend:"",
                indexoffset:""
            })
        case "ADD_SPIDER_SHOW_ERROR":
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
export default AddSpider