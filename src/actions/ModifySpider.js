import * as axios from "axios";
import {BASE_API_URL} from "../config"

export const handleChange = (value) => {return {
    type: "MODIFY_SPIDER_CHANGE",
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

const showSuccess = () => {return {
    type: "MODIFY_SPIDER_SHOW_SUCCESS"
}}

const showError = (message) => {return {
    type: "MODIFY_SPIDER_SHOW_ERROR",
    message: message
}}

const loading = () => {return {type: "MODIFY_SPIDER_LOADING"}}
const fetched = (spiderModify) => {return {type: "MODIFY_SPIDER_FETCHED", spiderModify: spiderModify}}

export const refresh = () => {return {type: "MODIFY_SPIDER_REFRESH"}}
export const fetchModify = (namenow) => {return (dispatch) => {
    // dispatch(loaded())
    dispatch(loading())

    axios.get(`${BASE_API_URL}/spider/`+namenow).then(response => {
        let spiderModify = response.data.data[0];
        // response.data.data.map(value => {
        //     spiderDetail.push(value)
        // })
        //console.log(spiderDetail)
        dispatch(fetched(spiderModify))
    })
}}

export const modifySpiderClick = (namenow,typenow) => {return (dispatch, getState) => {
    dispatch(loading())
    let typename = typenow;
    let spidername = namenow;
    let spidercategory = getState().ModifySpider.spidercategory;
    let spidercountry = getState().ModifySpider.country;
    let indexUrl = getState().ModifySpider.indexurl;
    let indexStartDate = getState().ModifySpider.indexstart;
    let indexEndDate = getState().ModifySpider.indexend;
    let indexOffsetIncremenet = getState().ModifySpider.indexoffset;
    let indexMaxPageNumber = getState().ModifySpider.indexmax;
    let ignoreDomainList = getState().ModifySpider.ignoredomainlist;
    let entryDateParser = getState().ModifySpider.entrydate;
    let categorylist = getState().ModifySpider.categorylist;
    
    let postauthorName = getState().ModifySpider.postauthoridname;
    let postid = getState().ModifySpider.postid;
    let postauthorId = getState().ModifySpider.postauthorid;
    let postitem = getState().ModifySpider.postitem;
    let postfirstPostId = getState().ModifySpider.postfirstpostid;
    let postentryDate = getState().ModifySpider.postentrydate;
    let postcontent = getState().ModifySpider.postcontent;
    let postpermalink = getState().ModifySpider.postpermalink;
    let postauthorUrl = getState().ModifySpider.postauthoridurl;
    let categorylastPage = getState().ModifySpider.categorylastpage;
    let categoryprevPage = getState().ModifySpider.categoryprevPage;
    let threadurl = getState().ModifySpider.threadurl;
    let threadlastPage = getState().ModifySpider.threadlastpage;
    let threadnextPage = getState().ModifySpider.threadnextpage;
    let threadtitle = getState().ModifySpider.threadtitle;
    let threadprevPage = getState().ModifySpider.threadprevpage;
    
    let articleurl = getState().ModifySpider.articleurl;
    let articletitle = getState().ModifySpider.articletitle;
    let articlecontent = getState().ModifySpider.articlecontent;
    let articleentryDate = getState().ModifySpider.articleentrydate;
    
    if(typename === "Forum Spider 1"){
        axios.patch(`${BASE_API_URL}/spider/`+spidername, {
            category : spidercategory,
            country : spidercountry,
            name : spidername,
            type : {
                name : typename,
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
    else if (typename === "News Spider 1"){
        axios.patch(`${BASE_API_URL}/spider/`+spidername, {
            category : spidercategory,
            country : spidercountry,
            name : spidername,
            indexUrl : indexUrl,
            indexMaxPageNumber : parseInt(indexMaxPageNumber),
            ignoreDomainList : ignoreDomainList,
            entryDateParser : entryDateParser,
            type : {
                name : typename,
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
        }).then(response => {
            dispatch(showSuccess())
        }).catch(err => {
            console.log(err.response)
            dispatch(showError("Server gangguan!"))
        })
    }
    else if (typename === "News Spider 2"){
        axios.patch(`${BASE_API_URL}/spider/`+spidername, {
            category : spidercategory,
            country : spidercountry,
            name : spidername,
            indexUrl : indexUrl,
            indexStartDate : indexStartDate,
            indexEndDate : indexEndDate,
            ignoreDomainList : ignoreDomainList,
            entryDateParser : entryDateParser,
            type : {
                name : typename,
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
        }).then(response => {
            dispatch(showSuccess())
        }).catch(err => {
            console.log(err.response)
            dispatch(showError("Server gangguan!"))
        })
    }
    else{
        axios.patch(`${BASE_API_URL}/spider/`+spidername, {
            category : spidercategory,
            country : spidercountry,
            categoryList : categorylist,
            name : spidername,
            indexUrl : indexUrl,
            indexStartDate : indexStartDate,
            indexEndDate : indexEndDate,
            indexOffsetIncremenet: indexOffsetIncremenet,
            ignoreDomainList : ignoreDomainList,
            entryDateParser : entryDateParser,
            type : {
                name : typename,
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
        }).then(response => {
            dispatch(showSuccess())
        }).catch(err => {
            console.log(err.response)
            dispatch(showError("Server gangguan!"))
        })
    }
}}