import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import BScroll from 'better-scroll';

import {reqRecommendTabs} from '../../api';
import RecoFind from '../../containers/Recommend/RecoFind/RecoFind';
import RecoSelect from './RecoSelect/RecoSelect';

import './index.styl';
export default class Recommend extends Component {
  static propTypes = {
    recommendTabs: PropTypes.array.isRequired,
    recoIndex: PropTypes.number,
    setRecoTabs: PropTypes.func.isRequired,
    setRecoIndex: PropTypes.func.isRequired
  };
  state = {
    isSelect: true
  };
  componentWillMount () {
    this.getRecommendTabs();
  };
  componentDidUpdate () {
    this.setUlWidth();
    this.initScroll();
  };
  getRecommendTabs = async () => {
    const result = await reqRecommendTabs();
    if (result.code === '200') {
        const recommendTabs = result.data;
        this.props.setRecoTabs(recommendTabs);
    }
  };
  toggleShow = (isSelect, path) => {
    this.setState({
      isSelect
    });
    this.props.history.replace(path);
  };
  // 实现导航区域的水平滑动
  setUlWidth () {
    const ul = document.querySelector('.ul-node');
    let ulWidth;
    const lis = ul.querySelectorAll('li');
    Array.from(lis).forEach(li => {
      const width = li.clientWidth * lis.length + 50 * (lis.length - 1);
      ulWidth = width;
    });
    ul.style.width = ulWidth + 'px';
  };
  initScroll () {
    /* eslint-disable no-new */
    new BScroll('.reco-nav', {
      click: true,
      scrollX: true
    })
  };
  isActive = (index) => {
    this.props.setRecoIndex(index);
  };
    render(){
      let {recommendTabs,recoIndex} = this.props;
      recoIndex = (recoIndex >= 0 ? recoIndex: 0);
      const {isSelect} = this.state;
        return (
            <div>
              <div className="slot-container">
                <header className="header-slot">
                  <span className="home-icon"></span>
                  <div className="header-title">
                    <span className={isSelect ? 'on' : ''} onClick={e => this.toggleShow(true, '/recommend/recofind')}>发现</span>
                    <span className={!isSelect ? 'on' : ''} onClick={e => this.toggleShow(false, '/recommend/recoselect')}>甄选家</span>
                  </div>
                  <div className="search-cart-icon">
                    <span></span>
                    <span></span>
                  </div>
                </header>
              </div>
              <div className="reco-nav">
                <ul className="ul-node">
                  {
                    recommendTabs.length && recommendTabs.map((tab, index) => (
                      <li className={recoIndex === index ? 'active' : ''} key={tab.tabId} onClick={e => this.isActive(index)}>
                        <span>{tab.tabName}</span>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <Switch>
                <Route path='/recommend/recofind' component={RecoFind}/>
                <Route path='/recommend/recoselect' component={RecoSelect}/>
                <Redirect to="/recommend/recofind"/>
              </Switch>
            </div>
        )
    }
}