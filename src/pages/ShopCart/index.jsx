import React, {Component} from 'react';

import './index.styl';
export default class ShopCart extends Component {
    render(){
        return (
          <section className="cart-container">
              <header className="cart-header">
                  <span className="cart-text">购物车</span>
                  <span className="coupon-text">领券</span>
              </header>
              <div className="cart-main">
                  <div className="cart-list">
                      <div className="cart-item">
                          <i className="iconfont icon-circle"></i>
                          <span>30天无忧退货</span>
                      </div>
                      <div className="cart-item">
                          <i className="iconfont icon-circle"></i>
                          <span>48小时无忧退款</span>
                      </div>
                      <div className="cart-item">
                          <i className="iconfont icon-circle"></i>
                          <span>满88元免邮费</span>
                      </div>
                  </div>
                  <img className="cart-img" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png" alt="cartImg" />
                  <div className="add-loginBtn">
                      <span className="goto-add">去添加点什么吧</span>
                      <div className="login-btn">
                        <span>登录</span>
                      </div>
                  </div>
              </div>
          </section>
        )
    }
}