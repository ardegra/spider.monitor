import React, { Component } from "react";

import DropdownForm from "../form/DropdownForm";
import TextForm from "../form/TextForm";
import ForumSpiderTestForm from "../../containers/form/ForumSpiderTestForm";
import NewsSpiderTestForm from "../../containers/form/NewsSpiderTestForm";
import { PropagateLoader } from "react-spinners";

class SpiderTestPage extends Component{
  render(){
    let xpathComponent;
    let actionButton;

    if(this.props.category === "F"){
      xpathComponent = <ForumSpiderTestForm/>
      actionButton = (
        <div>
          <button className="btn btn-default" style={{marginRight: 10}} onClick={this.props.onTestThreadClick}>Test Thread</button>
          <button className="btn btn-default" onClick={this.props.onTestPostClick}>Test Post</button>
        </div>
      )
    }else if(this.props.category.charAt(0) === "N"){
      xpathComponent = <NewsSpiderTestForm/>
      actionButton = (
        <div>
          <button className="btn btn-default" style={{marginRight: 10}} onClick={this.props.onTestArticleClick}>Test Article</button>
          <button className="btn btn-default" onClick={this.props.onTestArticleUrlClick}>Test Article URL</button>
        </div>
      )
    }
    
    if(this.props.isTesting){
      return (
        <section className="page-content">
          <div className="page-content-inner" style={{paddingLeft: "50%"}}>
            <PropagateLoader loading={true} color="#36D7B7"/>
          </div>
        </section>
      )
    }else{
      return(
        <section className="page-content">
          <div className="page-content-inner">
            <div className="col-lg-7">
              <div className="panel panel-with-borders">
                <div className="panel-heading">
                  <h3>Spider Testing</h3>
                </div>
                <div className="panel-body">
                  <DropdownForm 
                    label="Category"
                    value={this.props.category}
                    onChange={this.props.onCategoryChange}
                    itemList={[
                      {value: "F", label: "Forum Spider"},
                      {value: "N", label: "News Spider"}
                    ]}/>
                  <TextForm 
                    label="Test URL"
                    value={this.props.testUrl}
                    onChange={this.props.onTestUrlChange}/>
                  <hr/>
                  {xpathComponent}
                </div>
                <div className="panel-footer">
                  {actionButton}
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="panel panel-with-borders">
                <div className="panel-heading">
                  <h3>Test Result</h3>
                </div>
                <div className="panel-body">
                  <pre>{JSON.stringify(this.props.result, null, 2)}</pre>
                </div>
              </div>
            </div>
          </div>
        </section>
      )
    }
  }
}
export default SpiderTestPage;