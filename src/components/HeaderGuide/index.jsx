import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BScroll from 'better-scroll';

import './index.styl';
export default class HeaderLogin extends Component {
  static propTypes = {
    navList: PropTypes.array.isRequired
  };

  componentDidMount () {
    /* eslint-disable no-new */
    new BScroll('.header-nav', {
      click: true,
      scrollX: true
    })
  };

  toggleActive (e) {
    console.log('点击了。。。');
    /*
    const navItems = document.querySelectorAll('.nav-item');
    Array.prototype.slice.call(navItems).forEach(item => item.className = 'nav-item');
    e.target.parentNode.className = 'nav-item active';
    */
  };

  render() {
    const {navList} =this.props;
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
          <div className="header-nav-left">
            {
              navList.map((nav, index) => {
                return (
                  <div className="nav-item" key={index} onClick={this.toggleActive}>
                    <span>{nav.text}</span>
                  </div>
                )
              })
            }
          </div>
          <i className="iconfont icon-54 header-nav-arrow"></i>
        </div>
      </header>
    )
  }
}