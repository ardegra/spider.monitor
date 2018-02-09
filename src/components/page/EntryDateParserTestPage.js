import React, { Component } from "react";

import DropdownForm from "../form/DropdownForm";
import TextForm from "../form/TextForm";

class EntryDateParserTestPage extends Component{
  render(){
    return (
      <section className="page-content">
        <div className="page-content-inner">
          <div className="col-lg-7" onSubmit={this.props.onSubmit}>
            <form className="panel panel-with-borders">
              <div className="panel-heading">
                <h3>Entry Date Testing</h3>
              </div>
              <div className="panel-body">
                <DropdownForm
                  label="Parser Name"
                  value={this.props.parserName}
                  onChange={this.props.onParserNameChange}
                  itemList={this.props.parserList}
                />
                <TextForm 
                  label="Entry Date String"
                  value={this.props.entryDate}
                  onChange={this.props.onEntryDateChange}
                />
              </div>
              <div className="panel-footer">
                <button className="btn btn-primary">Test Parser</button>
              </div>
            </form>
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
export default EntryDateParserTestPage