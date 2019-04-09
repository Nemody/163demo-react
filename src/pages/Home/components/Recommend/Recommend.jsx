import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './Recommend.styl';
export default class Recommend extends Component {
  static propTypes = {
    popularItem: PropTypes.array.isRequired
  };

    render(){
      const {popularItem} =this.props;
      return (
        <section className="reco-container">
          <div className="reco-header">
            <span>人气推荐</span>
            <span>
        更多
        <i className="iconfont icon-52"></i>
      </span>
          </div>
          <div className="reco-list">
            <div className="reco-list-top">
              <img src={popularItem.length && popularItem[0].listPicUrl} alt="好物推荐" />
              <div className="good-info">
                <span v-if="isShow">APP特惠</span>
                <p className="ellipsis">{popularItem.length && popularItem[0].name}</p>
                <p className="ellipsis">{popularItem.length && popularItem[0].simpleDesc}</p>
                <p>￥{popularItem.length && popularItem[0].counterPrice}</p>
              </div>
            </div>
            <ul className="reco-list-bottom">
              {
                popularItem.slice(1, 4).map((item, index) => {
                  return (
                    <li key={index}>
                      <img src={item.listPicUrl} alt="商品图" />
                      <div className="good-name">
                        <span>{item.name}</span>
                        <span className="good-price">￥{item.counterPrice}</span>
                      </div>
                      <div className="good-advantage">
                        <span>爆品</span>
                        <span>限时购</span>
                      </div>
                      <div className="good-full-reduction" style={{display: 'none'}}>
                        <div>
                          <span className="half-circle"></span>
                          <span>每满99减10券</span>
                          <span className="half-circle"></span>
                        </div>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </section>
        )
    }
}