import React, {Component} from 'react';

import './index.styl';
export default class FooterGuide extends Component {
  render() {
      return (
        <ul>
          <li>
            <div className="footer-icon">
              <img
                src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png"
                alt="icon" />
            </div>
            <span>首页</span>
          </li>
          <li>
            <div className="footer-icon">
              <img
                src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png"
                alt="icon" />
            </div>
            <span>分类</span>
          </li>
          <li>
            <div className="footer-icon">
              <img
                src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png"
                alt="icon" />
            </div>
            <span>识物</span>
          </li>
          <li>
            <div className="footer-icon">
              <img
                src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png"
                alt="icon" />
            </div>
            <span>购物车</span>
          </li>
          <li>
            <div className="footer-icon">
              <img
                src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/tabBar-s43a0dc8a7d-de25ef8e19.png"
                alt="icon" />
            </div>
            <span>个人</span>
          </li>
        </ul>
      )
    }
  }