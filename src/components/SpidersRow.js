import React, { Component } from "react";
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
class SpidersRow extends Component{
    
    constructor(props){
        super(props)
    }
    
    render(){
        return(
            <tr>
                <th scope="row">{this.props.spiderNum}</th>
                <td>{this.props.spiderName}</td>
                <td>{this.props.spiderTipe}</td>
                <td>{this.props.spiderUrl}</td>
                <td>
                    <Link to={"/spiders/detail/"+this.props.spiderName+"/"+this.props.spiderType}><button className='btn btn-rounded btn-info-outline'>Detail</button></Link>
                </td>
                <td>
                    <Link to={"/spiders/modify/"+this.props.spiderName+"/"+this.props.spiderType}><button className='btn btn-rounded btn-secondary-outline'>Modify</button></Link>
                </td>
            </tr>
    )}
}
export default SpidersRow