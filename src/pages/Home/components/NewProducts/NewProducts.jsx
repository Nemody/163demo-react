import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './NewProducts.styl';
export default class NewProducts extends Component {

  static propTypes = {
    newItem: PropTypes.array.isRequired
  };

  render(){
      const {newItem} = this.props;
      return (
        <section className="products-container">
          <div className="products-header">
            <div className="header-top">
              <span>新品首发</span>
            </div>
            <span className="header-bottom">
        更多
        <i className="iconfont icon-52"></i>
      </span>
          </div>
          <ul className="products-list">
            {
              newItem.length && newItem.map((item, index) => (
                <li key={index}>
                  <img src={item.listPicUrl} alt="新品首发" />
                  <div className="good-name">
                    <span>{item.name}</span>
                    <span className="good-price">￥{item.counterPrice}</span>
                  </div>
                </li>
              ))
            }
        </ul>
    </section>
        )
    }
}