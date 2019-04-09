/*
 * 应用主组件
 * */

import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import {reqHomeData} from './api';

import Home from './pages/Home';
import CategoryList from './containers/CategoryList/CategoryList';
import Recommend from './containers/Recommend/Recommend';
import ShopCart from './pages/ShopCart';
import Profile from './pages/Profile';
import FooterGuide from './components/FooterGuide';
import Category from './pages/CategoryList/Category/Category';

import './assets/css/reset.css';
export default class App extends Component {
  static propTypes = {
    homeData: PropTypes.object.isRequired,
    setHomeData: PropTypes.func.isRequired
  };
  componentWillMount() {
    this.getHomeData();
  };

  getHomeData = async () => {
    const result = await reqHomeData();
    if (result.code === 0) {
      const homeData = result.data;
      this.props.setHomeData(homeData);
    }
  };

  render () {
    return (
      <Router>
        <Switch>
          <Route path='/home' component={Home}/>
          <Route path='/categorylist' component={CategoryList}/>
          <Route path='/recommend' component={Recommend}/>
          <Route path='/shopcart' component={ShopCart}/>
          <Route path='/profile' component={Profile}/>
          <Route path='/categorylist/category' component={Category}/>
          <Redirect to='/home' />
        </Switch>
        <FooterGuide/>
      </Router>
    )
  }
}