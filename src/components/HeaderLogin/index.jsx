import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import {reqHomeData} from '../../api';

import '../../components/HeaderLogin/index.styl';
export default class HeaderLogin extends Component {
  static propTypes = {
    navList: PropTypes.array.isRequired,
    setNavList: PropTypes.func.isRequired
  };

  componentWillMount () {
    this.getHomeData();
  };
  getHomeData = async () => {
    const result = await reqHomeData();
    if (result.code === 0) {
      const navList = result.data.kingKongModule.kingKongList;
      this.props.setNavList(navList);
    }
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
          <ul className="header-nav-left">
            {
              navList.map((nav, index) => {
                return (
                  <li key={index}>
                    <NavLink to="/">{nav.text}</NavLink>
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