import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BScroll from 'better-scroll';

import './Classify.styl';
export default class Classify extends Component {
  static propTypes = {
    classifyList: PropTypes.array.isRequired
  };
  componentDidUpdate () {
    this.setUlWidth();
    this.initScroll();
  };

  setUlWidth () {
    const uls = document.querySelectorAll('.ul-node');
    let ulWidth;
    Array.from(uls).forEach((ul, index) => {
      const lis = ul.querySelectorAll('li');
      Array.from(lis).forEach((li, index) => {
        const width = li.clientWidth * lis.length + 20 * (lis.length - 1);
        ulWidth = width;
      });
      ul.style.width = ulWidth + 'px';
    });
  };
  initScroll () {
    /* eslint-disable no-new */
    const classifyList = document.querySelectorAll('.classify-list');
    Array.from(classifyList).forEach((classify, index) => {
      new BScroll(classify, {
        click: true,
        scrollX: true
      })
    })
  };

  render() {
    const {classifyList} = this.props;
    return (
      <section>
        {
          classifyList.length && classifyList.map((classify, index) => (
            <div className="classify-container" key={index}>
              <img src={classify.titlePicUrl} alt="标题图片"/>
              <div className="classify-list">
                <ul className="ul-node">
                  {
                    classify.itemList.length && classify.itemList.map((item, index) => (
                      <li key={index}>
                        <img src={item.listPicUrl} alt="商品图片" />
                        <div className="good-info">
                          <span className="good-name">100%山羊绒纯色围巾</span>
                          <span className="good-price">￥289</span>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          ))
        }
      </section>
    )
  }
}