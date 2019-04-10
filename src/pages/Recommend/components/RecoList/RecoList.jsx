import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BScroll from 'better-scroll';
import {
  reqRecommendData,
  reqAutoRecommendData
} from '../../../../api';
import './RecoList.styl';
export default class OrderList extends Component {
  static propTypes = {
    recommendData: PropTypes.array,
    setRecoData: PropTypes.func.isRequired
  };
  state = {
    moreDataPage: 1,
    autoRecoData: []
  };
  componentWillMount () {
    this.getRecommendData();
  };
  componentDidMount () {
    // 页面显示完成后设置将要实现scroll滚动效果的元素的父元素的高度，使子元素高度超出父元素才能实现滚动
    const height = document.documentElement.clientHeight;
    const recoPage = document.querySelector('.reco-page');
    recoPage.style.height = height + 'px';
    // 实现滚动
    this.initScroll();
  };
  // 可以上拉刷新的初始化scroll方法
  initScroll () {
    if (this.recoScroll) {
      this.recoScroll.refresh();
    } else {
      this.recoScroll = new BScroll('.reco-page', {
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
      this.recoScroll.on('pullingUp', async () => {
        // alert('已到最底部');
        console.log('加载ajax数据');
        this.getAutoRecommend();
        this.recoScroll.finishPullUp(); // 可以多次执行上拉刷新
      });
    }
  }
  getRecommendData = async () => {
    const result = await reqRecommendData();
    if (result.code === '200') {
      this.props.setRecoData(result.data);
    }
  };
   getAutoRecommend = async () => {
     const result = await reqAutoRecommendData(this.state.moreDataPage, 5);
     if (result.code === '200') {
       const {autoRecoData} = this.state;
       autoRecoData.push(...result.data.result);
       this.setState({
         moreDataPage:this.state.moreDataPage + 1,
         autoRecoData
       });
     }
   };

  render(){
    const {recommendData} = this.props;
    const {autoRecoData} = this.state;
    return (
      <div className="reco-page">
        <div className="reco-goods">
          <div>
            {
              recommendData && recommendData.map((reco, index) => (
                <ul key={index + Date.now()}>
                  {
                    reco.topics.map((item, index) => (
                      <li key={index}>
                        <div className="style-LR" style={{display: item.style === 2 ? 'block': 'none'}}>
                          <div className="style-left">
                          <span className="user-info">
                            <img src={item.avatar} alt="avatar" />
                            <span>{item.nickname}</span>
                           </span>
                            <p className="title">{item.title}</p>
                            <p className="desc">{item.subTitle}</p>
                            <span className="view-count">
                            <i className="iconfont icon-view"></i>
                            <span>{(item.readCount / 1000).toFixed(1)}k人看过</span>
                           </span>
                          </div>
                          <div className="style-right">
                            <img src={item.picUrl} alt="mainImg" />
                          </div>
                        </div>
                        <div className="style-TB" style={{display: item.style === 1 ? 'block': 'none'}}>
                          <div className="user-info">
                            <img src={item.avatar} alt="avatar" />
                            <span>{item.nickname}</span>
                          </div>
                          <p className="title">{item.title}</p>
                          <img className="main-img" src={item.picUrl} alt="mainImg" />
                          <span className="view-count">
                          <i className="iconfont icon-view"></i>
                          <span>{(item.readCount / 1000).toFixed(1)}k人看过</span>
                        </span>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              ))
            }
          </div>
          <div>
            {
              autoRecoData.length && autoRecoData.map((newReco, index) => (
                <ul key={index}>
                  {
                    newReco.topics.map((item, index) => (
                      <li key={index}>
                        <div className="style-LR" style={{display: item.style === 2 ? 'block': 'none'}}>
                          <div className="style-left">
                          <span className="user-info">
                            <img src={item.avatar} alt="avatar" />
                            <span>{item.nickname}</span>
                           </span>
                            <p className="title">{item.title}</p>
                            <p className="desc">{item.subTitle}</p>
                            <span className="view-count">
                            <i className="iconfont icon-view"></i>
                            <span>{(item.readCount / 1000).toFixed(1)}k人看过</span>
                           </span>
                          </div>
                          <div className="style-right">
                            <img src={item.picUrl} alt="mainImg" />
                          </div>
                        </div>
                        <div className="style-TB" style={{display: item.style === 1 ? 'block': 'none'}}>
                          <div className="user-info">
                            <img src={item.avatar} alt="avatar" />
                            <span>{item.nickname}</span>
                          </div>
                          <p className="title">{item.title}</p>
                          <img className="main-img" src={item.picUrl} alt="mainImg" />
                          <span className="view-count">
                          <i className="iconfont icon-view"></i>
                          <span>{(item.readCount / 1000).toFixed(1)}k人看过</span>
                        </span>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              ))
            }
          </div>
        </div>
      </div>
      )
  }
}