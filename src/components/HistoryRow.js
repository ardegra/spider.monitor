import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
class HistoryRow extends Component{
    
    constructor(props){
        super(props)
    }
    
    render(){
        let span 
        if(this.props.spiderStatus==='stopped'){
            span = <span className='label label-pill label-danger'>{this.props.spiderStatus}</span>
        }else if(this.props.spiderStatus==='working'){
            span = <span className='label label-pill label-success'>{this.props.spiderStatus}</span>
        }else{
            span = <span className='label label-pill label-warning'>{this.props.spiderStatus}</span>
        }
        return(
            <tr>
                <td>{this.props.spiderName}</td>
                <td>
                    {span}
                </td>
            </tr>
    )}
}
export default HistoryRow