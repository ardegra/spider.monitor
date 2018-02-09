import React, { Component } from 'react';
import HistoryRow from "./HistoryRow";
import Spinner from "react-spinner";

class HistorySpider extends Component {

    constructor(props){
        super(props);
    }
    
    componentDidMount(){
      this.props.fetchHistory()
    }
    
    render() {
    if(this.props.isLoading){
        return <Spinner />
    }else{
        return (
          <section className="page-content">
            <div className="page-content-inner">
                <section className="panel">
                    <div className="panel-heading">
                        <center><h2>History Spider</h2></center>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="margin-bottom-50">
                                    <table id='tbmyspider' className="table table-hover nowrap" width="100%">
                                        <thead className="thead-inverse">
                                        <tr>
                                            <th>Name</th>
                                            <th>Status</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {(this.props.HistorySpider.map((value, index) => {
                                            return (
                                                <HistoryRow
                                                    spiderName={value.spiderName}
                                                    spiderStatus = {value.status}/>
                                            );
                                        }))}
                                        </tbody>
                                    </table>
                                </div>					
                            </div>				
                        </div>            
                    </div>
                </section>
            </div>
            </section>
        );
    }
    }
}

export default HistorySpider;

