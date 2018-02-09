import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import { modifySpiderClick } from "../actions/ModifySpider";
import ModifySpider from "../components/ModifySpider";
import {fetchModify} from "../actions/ModifySpider";
import {refresh} from "../actions/ModifySpider";
import * as action from "../actions/ModifySpider";

const mapStateToProps = (state) => {return {
    threadurl : state.ModifySpider.threadurl,
    threadlastpage : state.ModifySpider.threadlastpage,
    threadprevpage : state.ModifySpider.threadprevpage,
    threadnextpage : state.ModifySpider.threadnextpage,
    threadtitle : state.ModifySpider.threadtitle,
    categorylastpage : state.ModifySpider.categorylastpage,
    categoryprevpage : state.ModifySpider.categoryprevpage,
    categorylist : state.ModifySpider.categorylist,
    postfirstpostid : state.ModifySpider.postfirstpostid,
    postitem : state.ModifySpider.postitem,
    postid : state.ModifySpider.postid,
    postpermalink : state.ModifySpider.postpermalink,
    postentrydate : state.ModifySpider.postentrydate,
    postcontent : state.ModifySpider.postcontent,
    postauthorid : state.ModifySpider.postauthorid,
    postauthoridname : state.ModifySpider.postauthoridname,
    postauthoridurl : state.ModifySpider.postauthoridurl,
    ignoredomainlist : state.ModifySpider.ignoredomainlist,
    articleurl : state.ModifySpider.articleurl,
    articletitle : state.ModifySpider.articletitle,
    articlecontent : state.ModifySpider.articlecontent,
    articleentrydate : state.ModifySpider.articleentrydate,
    
    spidername : state.ModifySpider.spidername,
    isspidername : state.ModifySpider.isspidername,
    spidercategory : state.ModifySpider.spidercategory,
    isspidercategory: state.ModifySpider.isspidercategory,
    country: state.ModifySpider.country,
    iscountry: state.ModifySpider.iscountry,
    indexurl: state.ModifySpider.indexurl,
    isindexurl: state.ModifySpider.isindexurl,
    entrydate: state.ModifySpider.entrydate,
    isentrydate: state.ModifySpider.isentrydate,
    indexmax: state.ModifySpider.indexmax,
    isindexmax: state.ModifySpider.isindexmax,
    indexstart: state.ModifySpider.indexstart,
    isindexstart: state.ModifySpider.isindexstart,
    indexend: state.ModifySpider.indexend,
    isindexend: state.ModifySpider.isindexend,
    indexoffset: state.ModifySpider.indexoffset,
    isindexoffset: state.ModifySpider.isindexoffset,
    
    spiderModify: state.ModifySpider.spiderModify,
    isLoading: state.ModifySpider.isLoading,
    isError: state.ModifySpider.isError,
    isSuccess: state.ModifySpider.isSuccess,
    errorMessage: state.ModifySpider.errorMessage
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
    
    fetchModify: (namenow) => {dispatch(fetchModify(namenow))},
    refresh : () => {dispatch(refresh())},
    
    modifySpiderClick: (namenow,typenow) => {
        dispatch(modifySpiderClick(namenow,typenow))
    }
}}

export default withRouter(connect(mapStateToProps, mapDispatchToPros)(ModifySpider));