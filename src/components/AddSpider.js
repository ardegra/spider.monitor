import React, {Component} from "react";
import RowXpathF from "./RowXpathF";
import RowAttribute from "./RowAttribute";
import Spinner from "react-spinner";
import Notifications, {notify} from 'react-notify-toast';

class AddSpider extends Component {
  constructor(props){
    super(props);
  }
    
  componentDidMount(){
    /*window.$('.select2-tags').select2({
  		placeholder: "Type tag and press Enter",
  		tags: true,
	  	allowClear: true,
	  	tokenSeparators: [',', ' ']
  	});*/
  	this.props.handleChange('F1')
  	this.props.refresh()
  }
  
  componentDidUpdate(){
  	if(this.props.isSuccess){
      notify.show("Spider berhasil ditambahkan", "success", 5000, "green");
    }
    if(this.props.isError){
      notify.show("Data Tidak Lengkap atau Data Kembar", "error", 5000, "red");
    }
  }
  
    
  render () {
  	if(this.props.value==='F1'){
      this.displayf = 'block'
      this.displayn = 'none'
  	}else{
      this.displayf = 'none'
      this.displayn = 'block'
  	}
      
    return this.props.isLoading?<Spinner/>:(
      <section className="page-content">
        <div className="page-content-inner">
          <Notifications />
          <section className="panel">
            <div className="panel-heading">
              <h2>Add Spider</h2>
        			<br />
            </div>
            <div className="panel-body">
              <div className="row">
                <div className="col-lg-6">
        					<h3>Attribute</h3>
                  <div className="margin-bottom-50">
                    <form>
        							<div className="form-group row">
                        <div className="col-md-3">
                          <label>Spider Type</label>
                        </div>
                        <div className="col-md-9">
                          <select className="form-control" id="cbspider" value={this.props.value} onChange={(e) => this.props.handleChange(e.target.value)}>
                            <option value='F1'>Forum Spider 1</option>
                            <option value='N1'>News Spider 1</option>
                            <option value='N2'>News Spider 2</option>
                            <option value='N3'>News Spider 3</option>
                            <option value='N4'>News Spider 4</option>
                          </select>
                        </div>
                      </div>
                      <RowAttribute label="Spider Name" value={this.props.spidername} onChange={this.props.SpiderName} disabled={this.props.isspidername}/>
                      <RowAttribute label="Spider Category" value={this.props.spidercategory} onChange={this.props.SpiderCategory} disabled={this.props.isspidercategory}/>
                      <RowAttribute label="Country" value={this.props.country} onChange={this.props.Country} disabled={this.props.iscountry}/>
                      <RowAttribute label="Index Url" value={this.props.indexurl} onChange={this.props.IndexUrl} disabled={this.props.isindexurl}/>
                      <RowAttribute label="Entry Date Parser" value={this.props.entrydate} onChange={this.props.EntryDate} disabled={this.props.isentrydate}/>
                      <RowAttribute label="Index Max Page Number" value={this.props.indexmax} onChange={this.props.IndexMax} disabled={this.props.isindexmax}/>
                      <RowAttribute label="Index Start Date" value={this.props.indexstart} onChange={this.props.IndexStart} disabled={this.props.isindexstart}/>
                      <RowAttribute label="Index End Date" value={this.props.indexend} onChange={this.props.IndexEnd} disabled={this.props.isindexend}/>
                      <RowAttribute label="Index Offset Increment" value={this.props.indexoffset} onChange={this.props.IndexOffset} disabled={this.props.isindexoffset}/>
                      <div className="form-group row">
                        <div className="col-md-3">
                          <label className="form-control-label">Category List</label>
                        </div>
                        <div className="col-md-9">
                          <textarea id='listcat' className="form-control" placeholder='Split by ","' value={this.props.categorylist} onChange={this.props.CategoryList } disabled={this.props.iscategorylist}/>
                        </div>
                      </div>
      							  <div className="form-group row">
        								<div className="col-md-3">
                          <label className="form-control-label">Ignore Domain List</label>
                        </div>
                        <div className="col-md-9">
                          <textarea id='listcat' className="form-control" placeholder='Split by ","' value={this.props.ignoredomainlist} onChange={this.props.IgnoreDomainList} disabled={this.props.isignoredomainlist}/>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
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
        				<div className='col-lg-6' id='xpathn' style={{display: this.displayn}}>
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
        				<div className='col-lg-12'>
        					<div className="form-actions">
        						<div className="form-group row">
        							<div className="col-md-9 col-md-offset-3">
        								<button type="button" className="btn width-150 btn-primary" onClick={this.props.addSpiderClick}>Add Spider</button> &nbsp;
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

export default AddSpider