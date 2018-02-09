import React, { Component } from "react";

class TextForm extends Component{
  render(){
    return(
      <div className="form-group row">
        <div className="col-md-3">
          <label className="form-control-label">{this.props.label}</label>
        </div>
        <div className="col-md-9">
          <input type="text" 
            className="form-control"
            value={this.props.value}
            onChange={this.props.onChange}
            placeholder={this.props.placeholder}/>
        </div>
      </div>
    )
  }
}
export default TextForm;