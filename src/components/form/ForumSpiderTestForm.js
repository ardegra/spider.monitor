import React, { Component } from "react";

import TextForm from "./TextForm";

class ForumSpiderTestForm extends Component{
  render(){
    return (
      <div>
        <b>Thread</b>
        <TextForm label="url" value={this.props.thread.url} onChange={this.props.onUrlChange}/>
        <TextForm label="lastPage" value={this.props.thread.lastPage} onChange={this.props.onLastPageChange}/>
        <TextForm label="prevPage" value={this.props.thread.prevPage} onChange={this.props.onPrevPageChange}/>
        <TextForm label="nextPage" value={this.props.thread.nextPage} onChange={this.props.onNextPageChange}/>
        <TextForm label="title" value={this.props.thread.title} onChange={this.props.onTitleChange}/>
        
        <b>Post</b>
        <TextForm label="firstPostId" value={this.props.post.firstPostId} onChange={this.props.onFirstPostIdChange}/>
        <TextForm label="item" value={this.props.post.item} onChange={this.props.onItemChange}/>
        <TextForm label="id" value={this.props.post.id} onChange={this.props.onIdChange}/>
        <TextForm label="permalink" value={this.props.post.permalink} onChange={this.props.onPermalinkChange}/>
        <TextForm label="entryDate" value={this.props.post.entryDate} onChange={this.props.onEntryDateChange}/>
        <TextForm label="content" value={this.props.post.content} onChange={this.props.onContentChange}/>
        <TextForm label="authorId" value={this.props.post.authorId} onChange={this.props.onAuthorIdChange}/>
        <TextForm label="authorName" value={this.props.post.authorName} onChange={this.props.onAuthorNameChange}/>
        <TextForm label="authorUrl" value={this.props.post.authorUrl} onChange={this.props.onAuthorUrlChange}/>
        
        <b>Category</b>
        <TextForm label="lastPage" value={this.props.category.lastPage} onChange={this.props.onCategoryLastPageChange}/>
        <TextForm label="prevPage" value={this.props.category.prevPage} onChange={this.props.onCategoryPrevPageChange}/>
      </div>
    )
  }
}
export default ForumSpiderTestForm;