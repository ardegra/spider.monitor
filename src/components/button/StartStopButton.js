import React, {Component} from "react";

class StartStopButton extends Component{
    render(){
        if(this.props.status === "Start"){
            return(
                <button 
                    ref={i => this.btn = i}
                    className='btn btn-rounded btn-success-outline'
                    disabled={this.props.queueing}
                    onClick={this.props.onClick}
                >
                    Start
                </button>
            )
        }else{
            return(
                <button 
                    ref={i => this.btn = i}
                    className='btn btn-rounded btn-danger-outline'
                    disabled={this.props.queueing}
                    onClick={this.props.onClick}
                >
                    Stop
                </button>
            )
        }
    }
}
export default StartStopButton