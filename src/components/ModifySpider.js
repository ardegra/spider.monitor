import React, {Component} from "react";
import RowAttribute from "./RowAttribute";
import RowXpathF from "./RowXpathF";
import Spinner from "react-spinner";
import * as moment from "moment";
import Notifications, {notify} from 'react-notify-toast';

class ModifySpider extends Component {

    constructor(props){
        super(props)
        this.namenow = this.props.match.params.name
    	this.typenow = this.props.match.params.type
    	if(this.typenow==='Forum Spider 1'){
	        this.displayf = 'block'
	        this.displayn = 'none'
    	}else{
	        this.displayf = 'none'
	        this.displayn = 'block'
    	}
    }
    componentDidMount(){
        /*window.$('.select2-tags').select2({
    		placeholder: "Type tag and press Enter",
    		tags: true,
    		allowClear: true,
    		tokenSeparators: [',', ' ']
    	});*/
    	this.props.handleChange('F1')
    	this.props.fetchModify(this.namenow)
    }
    
    componentWillUnmount(){
        this.props.refresh()
    }
    
    componentDidUpdate(){
      	if(this.props.isSuccess){
          notify.show("Spider berhasil diubah", "success", 5000, "green");
        }
        if(this.props.isError){
          notify.show("Data Tidak Lengkap atau Data Salah", "error", 5000, "red");
        }
    }
    
    render () {
        if(this.props.isLoading){
            return <Spinner />
        }else{
            let startDate = moment(this.props.indexstart).format("DD MMMM YYYY")
            let endDate = moment(this.props.indexend).format("DD MMMM YYYY")
            return (
            <section className="page-content">
                <div className="page-content-inner">
                <Notifications />
                    <section className="panel">
                        <div className="panel-heading">
                            <h2>Modify Spider</h2>
                			<br />
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-lg-6">
                					<h3>Attribute</h3>
                                    <div className="margin-bottom-50">
                                        <form>
                							<RowAttribute label="Spider Type" value={this.props.match.params.type} disabled={true}/>
                                    		<RowAttribute label="Spider Name" value={this.props.spiderModify.name} disabled={true}/>
                                            <RowAttribute label="Spider Category" value={this.props.spidercategory} onChange={this.props.SpiderCategory}/>
                                            <RowAttribute label="Country" value={this.props.country} onChange={this.props.Country}/>
                                            <RowAttribute label="Index Url" value={this.props.indexurl} onChange={this.props.IndexUrl}/>
                                            <RowAttribute label="Entry Date Parser" value={this.props.entrydate} onChange={this.props.EntryDate}/>
                                            <RowAttribute label="Index Max Page Number" value={this.props.indexmax} onChange={this.props.IndexMax}/>
                                            <RowAttribute label="Index Start Date" value={startDate} onChange={this.props.IndexStart}/>
                                            <RowAttribute label="Index End Date" value={endDate} onChange={this.props.IndexEnd}/>
                                            <RowAttribute label="Index Offset Increment" value={this.props.indexoffset} onChange={this.props.IndexOffset}/>
                                             <div className="form-group row">
                                                <div className="col-md-3">
                                                    <label className="form-control-label">Category List</label>
                                                </div>
                                                <div className="col-md-9">
                                                    <textarea id='listcat' className="form-control" placeholder='Split by ","' value={this.props.categorylist} onChange={this.props.CategoryList} />
                                                </div>
                                            </div>
                							<div className="form-group row">
                								<div className="col-md-3">
                                                    <label className="form-control-label">Ignore Domain List</label>
                                                </div>
                                                <div className="col-md-9">
                                                    <textarea id='listcat' className="form-control" placeholder='Split by ","' value={this.props.ignoredomainlist} onChange={this.props.IgnoreDomainList} />
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                				{this.typenow === "Forum Spider 1" ? 
                				<div className='col-lg-6' id='xpathf' style={{display: this.displayf}}>
                					<h3>XPath</h3>
                					<div className="margin-bottom-50">
                						<form>
                						    <RowXpathF label="Thread Url" value={this.props.threadurl} onChange={this.props.onThreadUrlChange}/>
                    						<RowXpathF label="Thread Last Page" value={this.props.threadlastpage} onChange={this.props.onThreadLastPage}/>
                    						<RowXpathF label="Thread Prev Page" value={this.props.threadprevpage} onChange={this.props.onThreadPrevPage}/>
                    						<RowXpathF label="Thread Next Page" value={this.props.threadnextpage} onChange={this.props.onThreadNextPage}/>
                    						<RowXpathF label="Thread Title" value={this.props.threadtitle} onChange={this.props.onThreadTitle}/>
                    						<RowXpathF label="Category Last Page" value={this.props.categorylastpage} onChange={this.props.CategoryLastPage}/>
                    						<RowXpathF label="Category Prev Page" value={this.props.categoryprevpage} onChange={this.props.CategoryPrevPage}/>
                    						<RowXpathF label="Post First Post Id" value={this.props.postfirstpostid} onChange={this.props.PostFirstPostId}/>
                    						<RowXpathF label="Post Item" value={this.props.postitem} onChange={this.props.PostItem}/>
                    						<RowXpathF label="Post Id" placeholder="Post Id" value={this.props.postid} onChange={this.props.PostId}/>
                    						<RowXpathF label="Post Permalink" placeholder="Post Permalink" value={this.props.postpermalink} onChange={this.props.PostPermalink}/>
                    						<RowXpathF label="Post Entry Date" placeholder="Post Entry Date" value={this.props.postentrydate} onChange={this.props.PostEntryDate}/>
                    						<RowXpathF label="Post Content" placeholder="Post Content" value={this.props.postcontent} onChange={this.props.PostContent}/>
                    						<RowXpathF label="Post Authorld" placeholder="Post Authorld" value={this.props.postauthorid} onChange={this.props.PostAuthorld}/>
                    						<RowXpathF label="Post Authorld Name" placeholder="Post Authorld Name" value={this.props.postauthoridname} onChange={this.props.PostAuthorldName}/>
                    						<RowXpathF label="Post Authorld Url" placeholder="Post Authorld Url" value={this.props.postauthoridurl} onChange={this.props.PostAuthorldUrl}/>
                						</form>
                					</div>
                				</div>
                				:
                				<div className='col-lg-6' id='xpathn' style={{display:this.displayn}}>
                					<h3>XPath</h3>
                					<div className="margin-bottom-50">
                						<form>
                						    <RowXpathF label="Article Url" value={this.props.articleurl} onChange={this.props.ArticleUrl}/>
                    						<RowXpathF label="Article Title" value={this.props.articletitle} onChange={this.props.ArticleTitle}/>
                    						<RowXpathF label="Article Content" value={this.props.articlecontent} onChange={this.props.ArticleContent}/>
                    						<RowXpathF label="Article Entry Date" value={this.props.articleentrydate} onChange={this.props.ArticleEntryDate}/>				
                						</form>
                					</div>
                				</div>
                			    }
                				<div className='col-lg-12'>
                					<div className="form-actions">
                						<div className="form-group row">
                							<div className="col-md-9 col-md-offset-3">
                								<button type="button" className="btn width-150 btn-primary" onClick={() => this.props.modifySpiderClick(this.namenow,this.typenow)}>Modify Spider</button> &nbsp;
                								<button type="button" className="btn btn-default">Cancel</button>
                							</div>
                						</div>
                					</div>
                				</div>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        )
    }
}
}

export default ModifySpider;