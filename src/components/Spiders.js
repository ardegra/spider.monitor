import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import SpidersRow from "./SpidersRow";
import Spinner from "react-spinner";

class Spiders extends Component {
    
    constructor(props){
        super(props);
        //this.props.loadAllSpiders();
    }
    
    componentDidMount(){
      if(this.props.isLoading){
        window.$('#tbmyspider').DataTable({
          responsive: true
        });
      }
      this.props.fetchSpider()
    }
    
    //kalau mau pake spinner mesti ada proptypes(dari inet)
    render() {
    if(this.props.isLoading){
        return <Spinner />
    }else{
        return (
        <section className="page-content">
            <div className="page-content-inner">
                <section className="panel">
                    <div className="panel-heading">
                        <center><h2>My Spider</h2></center>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="margin-bottom-50">
                                    <table id='tbmyspider' className="table table-hover nowrap" width="100%">
                                        <thead className="thead-inverse">
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Type</th>
            								<th>Index Url</th>
                                            <th>Detail</th>
            								<th>Modify</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {(this.props.spiderList.map((value, index) => {
                                        return (
                                            <SpidersRow
                                                spiderName={value.name}
                                                spiderNum={index + 1}
                                                spiderTipe={value.type.name}
                                                spiderUrl={value.indexUrl}
                                                spiderType = {value.type.name}/>
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

export default Spiders;