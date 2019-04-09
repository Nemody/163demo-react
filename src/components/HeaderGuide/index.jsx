import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BScroll from 'better-scroll';

import './index.styl';
export default class HeaderLogin extends Component {
  static propTypes = {
    navList: PropTypes.array.isRequired
  };
  state = {
    currentIndex: 0
  };
  componentDidMount () {
    /* eslint-disable no-new */
    new BScroll('.header-nav', {
      click: true,
      scrollX: true
    });
  };
  toggleActive (index) {
    this.setState({
      currentIndex: index
    })
  };
  filterNavList = (navList) => {
    const newArr = navList.filter((item, index) => (index + 1) % 5 !== 0);
    return newArr;
  };
  render() {
    const {navList} =this.props;
    const result = this.filterNavList(navList);
    const {currentIndex} = this.state;
    return (
      <header className="header-container">
        <div className="header-search-login">
          <span className="logo"></span>
          <div className="searchInput">
            <i className="iconfont icon-search"></i>
            <span className="placeholder">搜索商品，共xxxxx款好物</span>
          </div>
          <button>登录</button>
        </div>
        <div className="header-nav">
          <ul className="header-nav-left">
            <li
              className={currentIndex === 0 ?'nav-item active' : 'nav-item'}
              onClick={e => this.toggleActive(0)}
            >
              <span>推荐</span>
            </li>
            {
              result.map((nav, index) => {
                return (
                  <li className={currentIndex === index + 1 ? 'nav-item active' : 'nav-item'} key={index} onClick={e => this.toggleActive(index + 1)}>
                    <span>{nav.text}</span>
                  </li>
                )
              })
            }
          </ul>
          <i className="iconfont icon-54 header-nav-arrow"></i>
        </div>
      </header>
    )
  }
}