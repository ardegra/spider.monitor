import React, { Component } from 'react';
import Spinner from "react-spinner";

import SpiderInfoRow from "./SpiderInfoRow";

class ListSpider extends Component {
    constructor(props){
        super(props);
        this.startStopClick = this.startStopClick.bind(this);
    }
    
    startStopClick(spiderName){
        // Rubah state dari spider
        console.log(spiderName);
        // Rubah State spider yang dipilih
    }
    
    componentDidMount(){
      if(this.props.isLoading){
        window.$('#tbmyspider').DataTable({
          responsive: true
        });
      }
      this.props.fetchSpider()
    }
    
  render() {
    return this.props.isLoaded? <Spinner />: (
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
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(this.props.spiderList.map((value, index) => {
                          return (
                            <SpiderInfoRow
                              spiderName={value.name}
                              spiderNum={index + 1}
                              status={value.status}
                              queueing={value.isQueueing}
                              onClick={() => this.props.startStopClick(value.name)}/>
                          );
                        }))}
                      </tbody>
                    </table>
                    <center><input type='button' id='btnstartall' className='btn btn-rounded btn-success-outline' value='Start All Spider' onClick={this.props.startAllClick}/></center>
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


   
export default ListSpider;