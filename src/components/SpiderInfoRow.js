import React, { Component } from "react";

import StartStopButton from "../components/button/StartStopButton";

class SpiderInfoRow extends Component{
    
    constructor(props){
        super(props)
        this.label = null;
        this.handleClick = this.handleClick.bind(this);
        this.statbtnnow = "Start";
        this.statlblnow = "InActive";
    }
    
    componentDidMount(){
        if(this.props.status === true){
            this.statlblnow="Active"
            this.statbtnnow="Stop"
        }
    }
    
    handleClick(e){
        this.props.onClick(this.props.spiderName)
    }
    
    render(){
        let lbl
        console.log(this.props.queueing)
        if(this.props.status === false){
            this.statbtnnow="Start"
            lbl = (
                <span className='label label-pill label-danger'>
                    InActive
                </span>
            )
        }else{
            this.statbtnnow="Stop"
            lbl = (
                <span className='label label-pill label-success' >
                    Active
                </span>
            )
        }
        
        return(
        <tr>
            <th scope="row">{this.props.spiderNum}</th>
            <td>
                {this.props.spiderName}
            </td>
            <td>
               {lbl}
            </td>
            <td>
                <StartStopButton onClick={this.handleClick} status={this.statbtnnow} queueing={this.props.queueing}/>
            </td>
        </tr>
        
    )}
}
export default SpiderInfoRow