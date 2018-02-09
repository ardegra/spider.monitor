import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { addSpiderClick } from "../actions/AddSpider";
import { refresh } from "../actions/AddSpider";
import AddSpider from "../components/AddSpider";
import * as action from "../actions/AddSpider";

const mapStateToProps = (state) => {return {
    value : state.AddSpider.value,
    threadurl : state.AddSpider.threadurl,
    threadlastpage : state.AddSpider.threadlastpage,
    threadprevpage : state.AddSpider.threadprevpage,
    threadnextpage : state.AddSpider.threadnextpage,
    threadtitle : state.AddSpider.threadtitle,
    categorylastpage : state.AddSpider.categorylastpage,
    categoryprevpage : state.AddSpider.categoryprevpage,
    categorylist : state.AddSpider.categorylist,
    postfirstpostid : state.AddSpider.postfirstpostid,
    postitem : state.AddSpider.postitem,
    postid : state.AddSpider.postid,
    postpermalink : state.AddSpider.postpermalink,
    postentrydate : state.AddSpider.postentrydate,
    postcontent : state.AddSpider.postcontent,
    postauthorid : state.AddSpider.postauthorid,
    postauthoridname : state.AddSpider.postauthoridname,
    postauthoridurl : state.AddSpider.postauthoridurl,
    ignoredomainlist : state.AddSpider.ignoredomainlist,
    articleurl : state.AddSpider.ArticleUrl,
    articletitle : state.AddSpider.ArticleTitle,
    articlecontent : state.AddSpider.ArticleContent,
    articleentrydate : state.AddSpider.ArticleEntryDate,
    
    spidername : state.AddSpider.spidername,
    isspidername : state.AddSpider.isspidername,
    spidercategory : state.AddSpider.spidercategory,
    isspidercategory: state.AddSpider.isspidercategory,
    country: state.AddSpider.country,
    iscountry: state.AddSpider.iscountry,
    indexurl: state.AddSpider.indexurl,
    isindexurl: state.AddSpider.isindexurl,
    entrydate: state.AddSpider.entrydate,
    isentrydate: state.AddSpider.isentrydate,
    indexmax: state.AddSpider.indexmax,
    isindexmax: state.AddSpider.isindexmax,
    indexstart: state.AddSpider.indexstart,
    isindexstart: state.AddSpider.isindexstart,
    indexend: state.AddSpider.indexend,
    isindexend: state.AddSpider.isindexend,
    indexoffset: state.AddSpider.indexoffset,
    isindexoffset: state.AddSpider.isindexoffset,
    iscategorylist: state.AddSpider.iscategorylist,
    isignoredomainlist: state.AddSpider.isignoredomainlist,
    
    isError: state.AddSpider.isError,
    isLoading: state.AddSpider.isLoading,
    isSuccess: state.AddSpider.isSuccess,
    errorMessage: state.AddSpider.errorMessage
}}

const mapDispatchToPros = (dispatch) => {return {
    handleChange: (value) => {dispatch(action.handleChange(value))},
    onThreadUrlChange : (e) => {dispatch(action.onThreadUrlChange(e.target.value))},
    onThreadLastPage : (e) => {dispatch(action.onThreadLastPage(e.target.value))},
    onThreadPrevPage : (e) => {dispatch(action.onThreadPrevPage(e.target.value))},
    onThreadNextPage : (e) => {dispatch(action.onThreadNextPage(e.target.value))},
    onThreadTitle : (e) => {dispatch(action.onThreadTitle(e.target.value))},
    CategoryLastPage : (e) => {dispatch(action.CategoryLastPage(e.target.value))},
    CategoryPrevPage : (e) => {dispatch(action.CategoryPrevPage(e.target.value))},
    CategoryList : (e) => {dispatch(action.CategoryList(e.target.value))},
    PostFirstPostId : (e) => {dispatch(action.PostFirstPostId(e.target.value))},
    PostItem : (e) => {dispatch(action.PostItem(e.target.value))},
    PostId : (e) => {dispatch(action.PostId(e.target.value))},
    PostPermalink : (e) => {dispatch(action.PostPermalink(e.target.value))},
    PostEntryDate : (e) => {dispatch(action.PostEntryDate(e.target.value))},
    PostContent : (e) => {dispatch(action.PostContent(e.target.value))},
    PostAuthorld : (e) => {dispatch(action.PostAuthorld(e.target.value))},
    PostAuthorldName : (e) => {dispatch(action.PostAuthorldName(e.target.value))},
    PostAuthorldUrl : (e) => {dispatch(action.PostAuthorldUrl(e.target.value))},
    IgnoreDomainList : (e) => {dispatch(action.IgnoreDomainList(e.target.value))},
    ArticleUrl : (e) => {dispatch(action.ArticleUrl(e.target.value))},
    ArticleTitle : (e) => {dispatch(action.ArticleTitle(e.target.value))},
    ArticleContent : (e) => {dispatch(action.ArticleContent(e.target.value))},
    ArticleEntryDate : (e) => {dispatch(action.ArticleEntryDate(e.target.value))},
    
    SpiderName : (e) => {dispatch(action.SpiderName(e.target.value))},
    SpiderCategory : (e) => {dispatch(action.SpiderCategory(e.target.value))},
    Country : (e) => {dispatch(action.Country(e.target.value))},
    IndexUrl : (e) => {dispatch(action.IndexUrl(e.target.value))},
    EntryDate : (e) => {dispatch(action.EntryDate(e.target.value))},
    IndexMax : (e) => {dispatch(action.IndexMax(e.target.value))},
    IndexStart : (e) => {dispatch(action.IndexStart(e.target.value))},
    IndexEnd : (e) => {dispatch(action.IndexEnd(e.target.value))},
    IndexOffset : (e) => {dispatch(action.IndexOffset(e.target.value))},
    
    refresh : () => {dispatch(refresh())},
    addSpiderClick: (e) => {
        e.preventDefault()
        dispatch(addSpiderClick())
    }
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(AddSpider));