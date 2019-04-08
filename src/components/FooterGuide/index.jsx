import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';

import './index.styl';
export default class FooterGuide extends Component {
  render() {
      return (
        <ul className="footer-guide">
          <li>
            <NavLink to="/home">
              <div className="footer-icon">
                <img
                  src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png"
                  alt="icon" />
              </div>
              <span>首页</span>
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/categorylist">
              <div className="footer-icon">
                <img
                  src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png"
                  alt="icon" />
              </div>
              <span>分类</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/recommend">
              <div className="footer-icon">
                <img
                  src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png"
                  alt="icon" />
              </div>
              <span>识物</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/shopcart">
              <div className="footer-icon">
                <img
                  src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png"
                  alt="icon" />
              </div>
              <span>购物车</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/profile">
              <div className="footer-icon">
                <img
                  src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png"
                  alt="icon" />
              </div>
              <span>个人</span>
            </NavLink>
          </li>
        </ul>
      )
    }
  }