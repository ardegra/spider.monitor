import React, { Component } from "react";

class DropdownForm extends Component{
  render(){
    return(
      <div className="form-group row">
        <div className="col-md-3">
          <label className="form-control-label">{this.props.label}</label>
        </div>
        <div className="col-md-9">
          <select className="form-control" value={this.props.value} onChange={this.props.onChange}>
            <option value=""></option>
            {this.props.itemList.map((value, index) => {
              return <option key={index} value={value.value}>{value.label}</option>
            })}
          </select>
        </div>
      </div>
    )
  }
}
export default DropdownForm