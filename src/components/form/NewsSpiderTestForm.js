import React, { Component } from "react";

import TextForm from "./TextForm";

class NewsSpiderTestForm extends Component{
  render(){
    return (
      <div>
        <b>Article</b>
        <TextForm label="url" value={this.props.article.url} onChange={this.props.onUrlChange}/>
        <TextForm label="title" value={this.props.article.title} onChange={this.props.onTitleChange}/>
        <TextForm label="content" value={this.props.article.content} onChange={this.props.onContentChange}/>
        <TextForm label="entryDate" value={this.props.article.entryDate} onChange={this.props.onEntryDateChange}/>
      </div>
    )
  }
}
export default NewsSpiderTestForm;