import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';

class LeftMenu extends Component {
  render() {
    return (
      <nav className="left-menu">
        <div className="logo-container">
          <Link className="logo" to="/">
            <img src="/assets/common/img/logo.png" alt="Clean UI Admin Template" />
            <img className="logo-inverse" src="/assets/common/img/logo-inverse.png" alt="Clean UI Admin Template" />
          </Link>
        </div>
        <div className="left-menu-inner scroll-pane">
          <ul className="left-menu-list left-menu-list-root list-unstyled">
            <li className="left-menu-list-submenu">
              <a className="left-menu-link" href="javascript: void(0)">
                <i className="left-menu-link-icon fa fa-folder-open"></i>
                Nest Monitoring
              </a>
              <ul className="left-menu-list list-unstyled">
                <li>
                  <Link className="left-menu-link" to="/">
                    <i className="left-menu-link-icon fa fa-bug"></i>
                    Spider
                  </Link>
                </li>
                <li>
                  <Link className="left-menu-link" to="/historyspider">
                    <i className="left-menu-link-icon fa fa-clock-o"></i>
                    History
                  </Link>
                </li>
              </ul>
            </li>
            <li className="left-menu-list-submenu">
              <a className="left-menu-link" href="javascript: void(0)">
                <i className="left-menu-link-icon fa fa-plug"></i>
                Spider Monitoring
              </a>
              <ul className="left-menu-list list-unstyled">
                <li>
                  <Link className="left-menu-link" to="/addspider">
                    <i className="left-menu-link-icon fa fa-bug"></i>
                    Add Spider
                  </Link>
                </li>
                <li>
                  <Link className="left-menu-link" to="/spiders">
                    <i className="left-menu-link-icon fa fa-folder"></i>
                    List Spider
                  </Link>
                </li>
              </ul>
            </li>
            <li className="left-menu-list-submenu">
              <a className="left-menu-link" href="javascript: void(0)">
                <i className="left-menu-link-icon fa fa-bug"></i>
                Spider Test
              </a>
              <ul className="left-menu-list list-unstyled">
                <li>
                  <Link className="left-menu-link" to="/spiders/test">
                    <i className="left-menu-link-icon fa fa-bug"></i>
                    Test
                  </Link>
                </li>
                <li>
                  <Link className="left-menu-link" to="/parser/entryDate/test">
                    <i className="left-menu-link-icon fa fa-folder"></i>
                    Entry Date Parser Test
                  </Link>
                </li>
                <li>
                  <Link className="left-menu-link" to="/spiders/entryDateParser/make">
                    <i className="left-menu-link-icon fa fa-folder"></i>
                    Entry Date Parser Make
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default LeftMenu;