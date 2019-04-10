import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BScroll from 'better-scroll';
import {
  reqOrderShowTop,
  reqOrderShowRatings
} from '../../../../api';

import './OrderList.styl';
export default class OrderList extends Component {
  static propTypes = {
    ordershowTop: PropTypes.object.isRequired,
    setOrdershowTop: PropTypes.func.isRequired
  };
  state = {
    morePage: 1,
    type: 1,
    ratingsData: []
  };

  componentWillMount() {
    this.getOrderShowTop();
    this.getOrderShowRatings();
  };

  componentDidUpdate() {
    // 设置order-page的高度并创建对应的scroll对象
    const height = document.documentElement.clientHeight;
    const orderPage = document.querySelector('.order-page');
    orderPage.style.height = height + 'px';
    this.initScroll();
    // 实现种草菜单项的scroll
    this.setUlWidth();
    /* eslint-disable no-new */
    new BScroll('.order-goods', {
      click: true,
      scrollX: true
    });
  };

  getOrderShowTop = async () => {
    const result = await reqOrderShowTop(6);
    if (result.code === '200') {
      this.props.setOrdershowTop(result.data);
    }
  };

  getOrderShowRatings = async () => {
    let {morePage, type, ratingsData} = this.state;
    morePage++;
    const result = await reqOrderShowRatings(morePage, 10, type);
    if (result.code === '200') {
      ratingsData.push(...result.data.topicList);
    }
    this.setState({
      morePage,
      ratingsData
    })
  };
  setUlWidth() {
    let width;
    const ulNode = document.querySelector('.order-ulNode');
    const lis = ulNode.querySelectorAll('li');
    Array.from(lis).forEach((li) => {
      width = li.clientWidth * lis.length + 20 * (lis.length - 1);
    });
    ulNode.style.width = width + 'px';
  };

  // 初始化评论区域的scroll对象，并且配置上拉加载更多。。。
  initScroll() {
    if (this.orderScroll) {
      this.orderScroll.refresh();
    } else {
      this.orderScroll = new BScroll('.order-page', {
        probeType: 2,
        // 上拉刷新：可以配置顶部下拉的距离（threshold） 来决定刷新时机以及回弹停留的距离（stop）
        // 这个配置用于做上拉加载功能，默认为 false。当设置为 true 或者是一个 Object 的时候，可以开启上拉加载
        pullUpLoad: {
          threshold: 50
        },
        /* mouseWheel: { // pc端同样能滑动
         speed: 20,
         invert: false
         }, */
        useTransition: false // 防止iphone微信滑动卡顿
      });
      this.orderScroll.on('pullingUp', async () => {
        this.morePage++;
        // alert('已到最底部');
        console.log('加载ajax数据');
        this.getOrderShowRatings();
        this.orderScroll.finishPullUp(); // 可以多次执行上拉刷新
      });
    }
  }

  render() {
    const {ordershowTop} = this.props;
    const {ratingsData} = this.state;
    return (
      <div className="order-page">
        <div className="show-orders">
          <img className="main-img" src="https://yanxuan.nosdn.127.net/0d2b1667aec92cb6b552e4316b602ca3.jpg"
               alt="mainImg"/>
          <div className="order-top">
            <p className="order-title">让生活更好的N种方法</p>
            <div className="order-desc">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAASCAYAAAC0EpUuAAAAAXNSR0IArs4c6QAAAa5JREFUOBHtU79Lw0AUbtKLydgKuungkqZLUXSWgGsFF90UnOvuJFIoIqij4N8gguIiOGsVpLUJLf0BOhachSppWr8LvuMSa6a6eRDer+99793LOyURc1qt1pLv+6lsNnsbAwtCjuOkGWN5z/MuWBQ8HA4ZyPZUVd2CPgt5CsyvpM1mcxHxErA2sBpIb0KklUplqtPpnCuKsgxQtN4Pu9FobILoDFgDOSIuSGu12rRhGE8AzIhojILiu4PB4GBUcZXydF0vQReEqPyJpBNcp0gYkpjfHMj2yf6Wz8Cv5nK5t6DTer0+j2tsU1UQ+gBsWJZ1FUkMTDRwBKxOMeh33W53xbbtD+4LOk0mkwUERNcgvM5kMiMJXdflt1kjQi6xIQUi5DYRWdyQzr2kh1SsTQiLZt6xcq4MIlJTdmqaVpbtiB7CIvbIxyVjWLVaTcE5KTv7/f56u93Ocx86KZumeUlxjIr/JDIT+BdpYA/J0ev1igwAjRyS3KFESL78ghTznkATAor4Agz+0Tmm65NjLPKfdCxjDJH8yUwZ1sPD9xAqJRmIvUomf5IveBxxeO8LApO5RtUTsYIAAAAASUVORK5CYII="
                alt="quotes"/>
              <p>开春必备春鞋种草单</p>
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAASCAYAAAC0EpUuAAAAAXNSR0IArs4c6QAAAbpJREFUOBHtVD1Lw1AUbZLXWklBnBx0aulXFgcnRXDwByj6B3QRdFEXxcVBl+Lk2D8guFT9AQpCFZxEQgoxySiOjkJjmnhe7A0vz3armw/CPefck3vfF0/pdDoFVVVPMsPHY71eb1HacZy1Xq+3SFyOYRges263O67r+r6cJB5F0RhwUhQ/LWMSO5SXo+/7DVUWR8H/i45iF9M1/mRPmaIoX+jTFnoVgaeJa5oWEuYR3MO1iv2IGq7XgpjP5/OhIgoc27Z9jUarpOOeHtZqtTPiYrQsazabzb6QBu9ntVot/Fo+Os+TqR9fJZ5QxljKi8k4+KJUUdM0i+g2lfz1A2yJJxRbkSqKf+MJsMQBkMvljkSOrs+VSsUVNcJ4MwwUWSHOI/yXPMZFXdedwaafgm9wkQZmsgtj6qBQSPE8bx3+c+AJ8gLfYe9vOGdY8iQED5g/HMmAdlEqlR4SoQ8wgQZyB6IO7qPJHmlqEAQMolywiVPcJJMY8ezpIkexd6xoyTAMi/TUQaH4B0xbWMY2ls3v79CBfITkLfxz5XL5STTGlx/Fmki28BjfwxyIhgHYhIfv9RUO8W1APvMNUkiynjpNcYQAAAAASUVORK5CYII="
                alt="quotes"/>
            </div>
            <div className="order-goods">
              <ul className="order-ulNode">
                {
                  ordershowTop.lookList && ordershowTop.lookList.map((item, index) => (
                    <li key={index}>
                      <img src={item.banner.picUrl} alt="goodsImg"/>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
          <div className="user-ratings">
            <h1>TA们的严选生活</h1>
            <div className="rating-switch">
              <div className="switch-btn">
                <span>最新</span>
              </div>
              <div className="switch-btn">
                <span>本月最热</span>
              </div>
              <div className="switch-btn">
                <span>晒单合辑</span>
              </div>
            </div>
            <div className="rating-content">
              <ul className="content-left">
                {
                  ratingsData.length && ratingsData.map((item, index) => {
                    if (index % 2 === 0) {
                      return (
                        <li key={index}>
                          <img
                            className={item.bannerInfo.height >= 1000 && item.bannerInfo.width !== item.bannerInfo.height ? 'big-size': (item.bannerInfo.width === item.bannerInfo.height ? 'middle-size' : 'small-size')} src={item.bannerInfo.picUrl}
                            alt="userImg" />
                          <div>
                            <p className="ellipsis rate-content">{item.content}</p>
                            <div className="user-info">
                              <div className="avatar-name">
                                <img className="user-avatar" src={item.avatar} alt="userAvatar" />
                                <span className="username">{item.nickName}</span>
                              </div>
                              <span className="like-count">
                                0
                                <img className="give-like" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAAAAACpleexAAABNUlEQVQ4y73UwUsCQRQG8P1rP9fVSImWwA1CqQgPURDkTWITqkNbXfRQhwiKDl0EwSSKDksRYmiFtbtOzrYrsuW+h4e+w3ww8zsNb0YRzChTwsF5PqlXejTchYzRpWAT6auvxwJ2KGjCGq7PyFBwFS1ZKlwC6ujImkebgLP4kLWGBgEzeJd1hAoBDdiy7ESqHQ83cON3CZteLLRw4PdrFmU3Dt5iMbj5NIp2FDrVfAqj3P/st3So29e2OwadIsazFxz0TC3c0iwf1qDX++KPdM5yofRhAXUxKcBoVUQWbzy4hDseNFHjwUts8eAL5gYsOBzCJx4s4YIHT1HmwQcYPOjNoMuCYj0YVxKeYJ8HG1jhwb6a/GRBsTxp0qKwioWmx4GR1/ArWgiFc5xLxLhDMf3X/J/wG8ARlk4IVyR9AAAAAElFTkSuQmCC" alt="giveLike" />
                              </span>
                            </div>
                          </div>
                        </li>
                      )
                    }
                  })
                }
              </ul>
              <ul className="content-right">
                {
                  ratingsData.length && ratingsData.map((item, index) => {
                    if (index % 2 === 1) {
                      return (
                        <li key={index}>
                          <img
                            className={item.bannerInfo.height >= 1000 && item.bannerInfo.width !== item.bannerInfo.height ? 'big-size': (item.bannerInfo.width === item.bannerInfo.height ? 'middle-size' : 'small-size')} src={item.bannerInfo.picUrl}
                            alt="userImg" />
                          <div>
                            <p className="ellipsis rate-content">{item.content}</p>
                            <div className="user-info">
                              <div className="avatar-name">
                                <img className="user-avatar" src={item.avatar} alt="userAvatar" />
                                <span className="username">{item.nickName}</span>
                              </div>
                              <span className="like-count">
                                0
                                <img className="give-like" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAAAAACpleexAAABNUlEQVQ4y73UwUsCQRQG8P1rP9fVSImWwA1CqQgPURDkTWITqkNbXfRQhwiKDl0EwSSKDksRYmiFtbtOzrYrsuW+h4e+w3ww8zsNb0YRzChTwsF5PqlXejTchYzRpWAT6auvxwJ2KGjCGq7PyFBwFS1ZKlwC6ujImkebgLP4kLWGBgEzeJd1hAoBDdiy7ESqHQ83cON3CZteLLRw4PdrFmU3Dt5iMbj5NIp2FDrVfAqj3P/st3So29e2OwadIsazFxz0TC3c0iwf1qDX++KPdM5yofRhAXUxKcBoVUQWbzy4hDseNFHjwUts8eAL5gYsOBzCJx4s4YIHT1HmwQcYPOjNoMuCYj0YVxKeYJ8HG1jhwb6a/GRBsTxp0qKwioWmx4GR1/ArWgiFc5xLxLhDMf3X/J/wG8ARlk4IVyR9AAAAAElFTkSuQmCC" alt="giveLike" />
                              </span>
                            </div>
                          </div>
                        </li>
                      )
                    }
                  })
                }
              </ul>
            </div>
          </div>
      </div>
  </div>
  )
  }
  }