import * as axios from "axios";
import {BASE_API_URL} from "../config"

export const handleChange = (value) => {return {
    type: "ADD_SPIDER_CHANGE",
    value: value
}}

export const onThreadUrlChange = (value) => {return {
    type: "XPATHF_ON_THREAD_URL_CHANGE",
    threadurl: value
}}

export const onThreadLastPage = (value) => {return {
    type: "XPATHF_ON_THREAD_LAST_PAGE",
    threadlastpage: value
}}

export const onThreadPrevPage = (value) => {return {
    type: "XPATHF_ON_THREAD_PREV_PAGE",
    threadprevpage: value
}}

export const onThreadNextPage = (value) => {return {
    type: "XPATHF_ON_THREAD_NEXT_PAGE",
    threadnextpage: value
}}

export const onThreadTitle = (value) => {return {
    type: "XPATHF_ON_THREAD_TITLE",
    threadtitle: value
}}

export const CategoryLastPage = (value) => {return {
    type: "XPATHF_CATEGORY_LAST_PAGE",
    categorylastpage: value
}}

export const CategoryPrevPage = (value) => {return {
    type: "XPATHF_CATEGORY_PREV_PAGE",
    categoryprevpage: value
}}

export const CategoryList = (value) => {return {
    type: "XPATHF_CATEGORY_LIST",
    categorylist: value
}}

export const PostFirstPostId = (value) => {return {
    type: "XPATHF_POST_FIRST_POST_ID",
    postfirstpostid: value
}}

export const PostItem = (value) => {return {
    type: "XPATHF_POST_ITEM",
    postitem: value
}}

export const PostId = (value) => {return {
    type: "XPATHF_POST_ID",
    postid: value
}}

export const PostPermalink = (value) => {return {
    type: "XPATHF_POST_PERMALINK",
    postpermalink: value
}}

export const PostEntryDate = (value) => {return {
    type: "XPATHF_POST_ENTRY_DATE",
    postentrydate: value
}}

export const PostContent = (value) => {return {
    type: "XPATHF_POST_CONTENT",
    postcontent: value
}}

export const PostAuthorld = (value) => {return {
    type: "XPATHF_POST_AUTHOR_ID",
    postauthorid: value
}}

export const PostAuthorldName = (value) => {return {
    type: "XPATHF_POST_AUTHOR_ID_NAME",
    postauthoridname: value
}}

export const PostAuthorldUrl = (value) => {return {
    type: "XPATHF_POST_AUTHOR_ID_URL",
    postauthoridurl: value
}}

export const IgnoreDomainList = (value) => {return {
    type: "XPATHF_IGNORE_DOMAIN_LIST",
    ignoredomainlist: value
}}

export const ArticleUrl = (value) => {return {
    type: "XPATHF_ARTICLE_URL",
    articleurl: value
}}

export const ArticleTitle = (value) => {return {
    type: "XPATHF_ARTICLE_TITLE",
    articletitle: value
}}

export const ArticleContent = (value) => {return {
    type: "XPATHF_ARTICLE_CONTENT",
    articlecontent: value
}}

export const ArticleEntryDate = (value) => {return {
    type: "XPATHF_ARTICLE_ENTRY_DATE",
    articleentrydate: value
}}

export const SpiderName = (value) => {return {
    type: "XATTRIBUTE_SPIDER_NAME",
    spidername: value
}}

export const SpiderCategory = (value) => {return {
    type: "XATTRIBUTE_SPIDER_CATEGORY",
    spidercategory: value
}}

export const Country = (value) => {return {
    type: "XATTRIBUTE_COUNTRY",
    country: value
}}

export const IndexUrl = (value) => {return {
    type: "XATTRIBUTE_INDEX_URL",
    indexurl: value
}}

export const EntryDate = (value) => {return {
    type: "XATTRIBUTE_ENTRY_DATE",
    entrydate: value
}}

export const IndexMax = (value) => {return {
    type: "XATTRIBUTE_INDEX_MAX",
    indexmax: value
}}

export const IndexStart = (value) => {return {
    type: "XATTRIBUTE_INDEX_START",
    indexstart: value
}}

export const IndexEnd = (value) => {return {
    type: "XATTRIBUTE_INDEX_END",
    indexend: value
}}

export const IndexOffset = (value) => {return {
    type: "XATTRIBUTE_INDEX_OFFSET",
    indexoffset: value
}}

const loading = () => {return {
    type: "ADD_SPIDER_LOADING"
}}

const showSuccess = () => {return {
    type: "ADD_SPIDER_SHOW_SUCCESS"
}}

const showError = (message) => {return {
    type: "ADD_SPIDER_SHOW_ERROR",
    message: message
}}

export const refresh = () => {return {type: "ADD_SPIDER_REFRESH"}}

export const addSpiderClick = () => {return (dispatch, getState) => {
    dispatch(loading());
    let typename = getState().AddSpider.value;
    let spidername = getState().AddSpider.spidername;
    let spidercategory = getState().AddSpider.spidercategory;
    let spidercountry = getState().AddSpider.country;
    let indexUrl = getState().AddSpider.indexurl;
    let indexStartDate = getState().AddSpider.indexstart;
    let indexEndDate = getState().AddSpider.indexend;
    let indexOffsetIncremenet = getState().AddSpider.indexoffset;
    let indexMaxPageNumber = getState().AddSpider.indexmax;
    let ignoreDomainList = getState().AddSpider.ignoredomainlist;
    let entryDateParser = getState().AddSpider.entrydate;
    let categorylist = getState().AddSpider.categorylist;
    
    let postauthorName = getState().AddSpider.postauthoridname;
    let postid = getState().AddSpider.postid;
    let postauthorId = getState().AddSpider.postauthorid;
    let postitem = getState().AddSpider.postitem;
    let postfirstPostId = getState().AddSpider.postfirstpostid;
    let postentryDate = getState().AddSpider.postentrydate;
    let postcontent = getState().AddSpider.postcontent;
    let postpermalink = getState().AddSpider.postpermalink;
    let postauthorUrl = getState().AddSpider.postauthoridurl;
    let categorylastPage = getState().AddSpider.categorylastpage;
    let categoryprevPage = getState().AddSpider.categoryprevPage;
    let threadurl = getState().AddSpider.threadurl;
    let threadlastPage = getState().AddSpider.threadlastpage;
    let threadnextPage = getState().AddSpider.threadnextpage;
    let threadtitle = getState().AddSpider.threadtitle;
    let threadprevPage = getState().AddSpider.threadprevpage;
    
    let articleurl = getState().AddSpider.articleurl;
    let articletitle = getState().AddSpider.articletitle;
    let articlecontent = getState().AddSpider.articlecontent;
    let articleentryDate = getState().AddSpider.articleentrydate;
    
    if (typename === "F1"){
        axios.post(`${BASE_API_URL}/spider`, {
            category : spidercategory,
            country : spidercountry,
            name : spidername,
            type : {
                name : "Forum Spider 1",
                description : ""
            },
            categoryList : categorylist,
            xpath : {
                post : {
                    authorName : postauthorName,
                    id : postid,
                    authorId : postauthorId,
                    item : postitem,
                    firstPostId : postfirstPostId,
                    entryDate : postentryDate,
                    content : postcontent,
                    permalink : postpermalink,
                    authorUrl : postauthorUrl
                },
                category : {
                    lastPage : categorylastPage,
                    prevPage : categoryprevPage
                },
                thread : {
                    url : threadurl,
                    lastPage : threadlastPage,
                    nextPage : threadnextPage,
                    title : threadtitle,
                    prevPage : threadprevPage
                }
            }
        }).then(response => {
            dispatch(showSuccess())
        }).catch(err => {
            console.log(err.response)
            dispatch(showError("Server gangguan!"))
        })
    }
    else if (typename === "N1"){
        axios.post(`${BASE_API_URL}/spider`, {
            category : spidercategory,
            indexMaxPageNumber : parseInt(indexMaxPageNumber),
            country : spidercountry,
            name : spidername,
            indexUrl : indexUrl,
            type : {
                name : "News Spider 1",
                description : ""
            },
            xpath : {
                article : {
                    url : articleurl,
                    title : articletitle,
                    content : articlecontent,
                    entryDate : articleentryDate
                }
            },
            ignoreDomainList : ignoreDomainList,
            entryDateParser : entryDateParser
        }).then(response => {
            dispatch(showSuccess())
        }).catch(err => {
            console.log(err.response)
            dispatch(showError("Server gangguan!"))
        })
    }
    else if (typename === "N2"){
        axios.post(`${BASE_API_URL}/spider`, {
            category : spidercategory,
            indexMaxPageNumber : indexMaxPageNumber,
            country : spidercountry,
            name : spidername,
            indexUrl : indexUrl,
            indexStartDate : indexStartDate,
            indexEndDate : indexEndDate,
            type : {
                name : "News Spider 2",
                description : ""
            },
            xpath : {
                article : {
                    url : articleurl,
                    title : articletitle,
                    content : articlecontent,
                    entryDate : articleentryDate
                }
            },
            ignoreDomainList : ignoreDomainList,
            entryDateParser : entryDateParser
        }).then(response => {
            dispatch(showSuccess())
        }).catch(err => {
            console.log(err.response)
            dispatch(showError())
        })
    }
    else if (typename === "N3"){
        axios.post(`${BASE_API_URL}/spider`, {
            category : spidercategory,
            indexMaxPageNumber : indexMaxPageNumber,
            country : spidercountry,
            name : spidername,
            indexUrl : indexUrl,
            indexOffsetIncremenet : indexOffsetIncremenet,
            indexStartDate : indexStartDate,
            indexEndDate : indexEndDate,
            type : {
                name : "News Spider 3",
                description : ""
            },
            categoryList : categorylist,
            xpath : {
                article : {
                    url : articleurl,
                    title : articletitle,
                    content : articlecontent,
                    entryDate : articleentryDate
                }
            },
            ignoreDomainList : ignoreDomainList,
            entryDateParser : entryDateParser
        }).then(response => {
            dispatch(showSuccess())
        }).catch(err => {
            console.log(err.response)
            dispatch(showError("Server gangguan!"))
        })
    }
    else if (typename === "N4") {
        axios.post(`${BASE_API_URL}/spider`, {
            category : spidercategory,
            indexMaxPageNumber : indexMaxPageNumber,
            country : spidercountry,
            name : spidername,
            indexUrl : indexUrl,
            indexOffsetIncremenet : indexOffsetIncremenet,
            indexStartDate : indexStartDate,
            indexEndDate : indexEndDate,
            type : {
                name : "News Spider 4",
                description : ""
            },
            categoryList : categorylist,
            xpath : {
                article : {
                    url : articleurl,
                    title : articletitle,
                    content : articlecontent,
                    entryDate : articleentryDate
                }
            },
            ignoreDomainList : ignoreDomainList,
            entryDateParser : entryDateParser
        }).then(response => {
            dispatch(showSuccess())
        }).catch(err => {
            console.log(err.response)
            dispatch(showError("Server gangguan!"))
        })
    }
}}