import React, { Component } from "react";

class RowAttribute extends Component {
    constructor(props){
        super(props);
    }
    
    render (){
        return (
            <div className="form-group row">
				<div className="col-md-3">
					<label className="form-control-label">{`${this.props.label}`}</label>
				</div>
				<div className="col-md-9">
					<input 
                        ref={input => {this.input = input}} 
                        type="text"
                        className="form-control"
                        value={this.props.value}
                        disabled={this.props.disabled}
                        onChange={this.props.onChange}
                    />
            	</div>
			</div>
        )
    }
} 

export default RowAttribute