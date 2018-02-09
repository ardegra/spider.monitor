import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <nav className="top-menu">
          <div className="menu-icon-container hidden-md-up">
              <div className="animate-menu-button left-menu-toggle">
              </div>
          </div>
          <div className="menu">
              <div className="menu-user-block">
                  <div className="dropdown dropdown-avatar">
                      <a href="javascript: void(0);" className="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                          <span className="avatar" href="javascript:void(0);">
                              <img src="/assets/common/img/temp/avatars/1.jpg" alt="Alternative text to the image"/>
                          </span>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-right" aria-labelledby="" role="menu">
                          <a className="dropdown-item" href="javascript:void(0)"><i className="dropdown-icon icmn-user"></i> Profile</a>
                          <a className="dropdown-item" href="javascript:void(0)"><i className="dropdown-icon icmn-exit"></i> Logout</a>
                      </ul>
                  </div>
              </div>
          </div>
      </nav>
    );
  }
}


export default Header;