import React, { Component } from 'react';
import './components/App.css';
import { BrowserRouter, Route, Link, Switch} from 'react-router-dom';

import Header from  "./components/Header";
import LeftMenu from  "./components/LeftMenu";

import ListSpider from  "./containers/ListSpider";
import HistorySpider from  "./containers/HistorySpider";
import AddSpider from  "./containers/AddSpider";
import Spiders from  "./containers/Spiders";
import DetailSpider from "./containers/DetailSpider";
import ModifySpider from "./containers/ModifySpider";
import SpiderTestPage from "./containers/page/SpiderTestPage";

import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import logger from "redux-logger";

let store = createStore(reducers, applyMiddleware(thunkMiddleware, logger))

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <LeftMenu />
            <Header />
            <Switch>
              <Route exact path="/" component={ListSpider}/>
              <Route exact path="/historyspider" component={HistorySpider}/>
              <Route exact path="/addspider" component={AddSpider}/>
              <Route exact path="/spiders" component={Spiders}/>
              <Route exact path="/spiders/detail/:name/:type" component={DetailSpider}/>
              <Route exact path="/spiders/modify/:name/:type" component={ModifySpider}/>
              <Route exact path="/spiders/test" component={SpiderTestPage}/>
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;

