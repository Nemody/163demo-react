/*
* 应用主组件
* */

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Home from './pages/Home';
import CategoryList from './pages/CategoryList';
import Recommend from './pages/Recommend';
import ShopCart from './pages/ShopCart';
import Profile from './pages/Profile';

import './assets/css/reset.css';
export default class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/categorylist' component={CategoryList}/>
          <Route path='/recommend' component={Recommend}/>
          <Route path='/shopcart' component={ShopCart}/>
          <Route path='/profile' component={Profile}/>
          <Redirect to='/home' />
        </Switch>
      </Router>
    )
  }
}