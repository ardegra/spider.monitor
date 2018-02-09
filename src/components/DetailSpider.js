import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import RowAttribute from "./RowAttribute";
import RowXpathF from "./RowXpathF";
import Spinner from "react-spinner";
import * as moment from "moment";

class DetailSpider extends Component {
    
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
    	//this.props.fetchDetail(this.props.match.params.name)
    }
    componentDidMount(){
        /*window.$('.select2-tags').select2({
    		placeholder: "Type tag and press Enter",
    		tags: true,
    		allowClear: true,
    		tokenSeparators: [',', ' ']
    	});*/
    	this.props.fetchDetail(this.namenow) // ==> bisa dipindah ke willmount(cara lain)
    }
    
    componentWillUnmount(){
        this.props.refresh()
    }
    
    render () {
        console.log(this.props)
        console.log(this.typenow)
        if(this.props.isLoading){
            return <Spinner />
        }else{
            let startDate = moment(this.props.spiderDetail.indexStartDate).format("DD MMMM YYYY")
            let endDate = moment(this.props.spiderDetail.indexEndDate).format("DD MMMM YYYY")
            return(
                <section className="page-content">
                    <div className="page-content-inner">
                        <section className="panel">
                            <div className="panel-heading">
                                <h2>Specific Spider</h2>
                    			<br />
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-lg-6">
                    					<h3>Attribute</h3>
                                        <div className="margin-bottom-50">
                                            <form>
                                            	<RowAttribute label="Spider Type" value={this.props.match.params.type} disabled={true}/>
                                        		<RowAttribute label="Spider Name" value={this.props.match.params.name} disabled={true}/>
                    							<RowAttribute label="Spider Category" value={this.props.spiderDetail.category} disabled={true}/>
                    							<RowAttribute label="Country" value={this.props.spiderDetail.country} disabled={true}/>
                                                <RowAttribute label="Index Url" value={this.props.spiderDetail.indexUrl} disabled={true}/>
                                                <RowAttribute label="Entry Date Parser" value={this.props.spiderDetail.entryDateParser} disabled={true}/>
                                                <RowAttribute label="Index Max Page Number" value={this.props.spiderDetail.indexMaxPageNumber} disabled={true}/>
                                                <RowAttribute label="Index Start Date" value={startDate} disabled={true}/>
                                                <RowAttribute label="Index End Date" value={endDate} disabled={true}/>
                                                <RowAttribute label="Index Offset Increment" value={this.props.spiderDetail.indexOffsetIncrement} disabled={true}/>
                    							<div className="form-group row">
                                                    <div className="col-md-3">
                                                        <label className="form-control-label">Category List</label>
                                                    </div>
                                                    <div className="col-md-9">
                                                        <textarea id='listcat' className="form-control" placeholder='Split by ","' value={this.props.spiderDetail.categoryList} readOnly/>
                                                    </div>
                                                </div>
                    							<div className="form-group row">
                    								<div className="col-md-3">
                                                        <label className="form-control-label">Ignore Domain List</label>
                                                    </div>
                                                    <div className="col-md-9">
                                                        <textarea id='listcat' className="form-control" placeholder='Split by ","' value={this.props.spiderDetail.ignoreDomainList} readOnly/>
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
                        						    <RowXpathF label="Thread Url" value={this.props.spiderDetail.xpath.thread.url} disabled={true}/>
                            						<RowXpathF label="Thread Last Page" value={this.props.spiderDetail.xpath.thread.lastPage} disabled={true}/>
                            						<RowXpathF label="Thread Prev Page" value={this.props.spiderDetail.xpath.thread.prevPage} disabled={true}/>
                            						<RowXpathF label="Thread Next Page" value={this.props.spiderDetail.xpath.thread.nextPage}disabled={true} />
                            						<RowXpathF label="Thread Title" value={this.props.spiderDetail.xpath.thread.title} disabled={true}/>
                            						<RowXpathF label="Category Last Page" value={this.props.spiderDetail.xpath.category.lastPage} disabled={true}/>
                            						<RowXpathF label="Category Prev Page" value={this.props.spiderDetail.xpath.category.prevPage} disabled={true}/>
                            						<RowXpathF label="Post First Post Id" value={this.props.spiderDetail.xpath.post.firstPostId}disabled={true} />
                            						<RowXpathF label="Post Item" value={this.props.spiderDetail.xpath.post.item} disabled={true}/>
                            						<RowXpathF label="Post Id" placeholder="Post Id" value={this.props.spiderDetail.xpath.post.id} disabled={true}/>
                            						<RowXpathF label="Post Permalink" placeholder="Post Permalink" value={this.props.spiderDetail.xpath.post.permalink} disabled={true}/>
                            						<RowXpathF label="Post Entry Date" placeholder="Post Entry Date" value={this.props.spiderDetail.xpath.post.entryDate} disabled={true}/>
                            						<RowXpathF label="Post Content" placeholder="Post Content" value={this.props.spiderDetail.xpath.post.content} disabled={true}/>
                            						<RowXpathF label="Post Authorld" placeholder="Post Authorld" value={this.props.spiderDetail.xpath.post.authorId} disabled={true}/>
                            						<RowXpathF label="Post Authorld Name" placeholder="Post Authorld Name" value={this.props.spiderDetail.xpath.post.authorName} disabled={true}/>
                            						<RowXpathF label="Post Authorld Url" placeholder="Post Authorld Url" value={this.props.spiderDetail.xpath.post.authorUrl} disabled={true}/>
                        						</form>
                        					</div>
                        				</div>
                        				:
                        				<div className='col-lg-6' id='xpathn' style={{display: this.displayn}}>
                        					<h3>XPath</h3>
                        					<div className="margin-bottom-50">
                        						<form>
                            						<RowXpathF label="Article Url" value={this.props.spiderDetail.xpath.article.url} disabled={true}/>
                            						<RowXpathF label="Article Title" value={this.props.spiderDetail.xpath.article.title} disabled={true}/>
                            						<RowXpathF label="Article Content" value={this.props.spiderDetail.xpath.article.content} disabled={true}/>
                            						<RowXpathF label="Article Entry Date" value={this.props.spiderDetail.xpath.article.entryDate} disabled={true}/>				
                        						</form>
                        					</div>
                        				</div>	
                                    }
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            )
        }
    }
}

export default DetailSpider;