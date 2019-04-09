import React, {Component} from 'react';
import PropTypes from 'prop-types';

import './FlashSale.styl';
export default class FlashSale extends Component {
  static propTypes = {
    flashSale: PropTypes.object.isRequired
  };
  state = {
    hour: 2,
    minute: 59,
    second: 59
  };

  componentWillMount() {
    this.timeDown();
  };
  componentWillUnmount () {
    clearInterval(this.intervalId);
  };
  timeDown() {
    let newState = {};
    this.intervalId = setInterval(() => {
      // 当秒数减至小于0时，重新置为59 同时分钟数减1
      if (this.state.second > 0) {
        // 秒数大于0时，秒数减1
        newState = {
          second: this.state.second - 1
        }
      } else {
        // 秒数小于0或者等于0时
        if (this.state.minute) {
          // 如果分钟数有值，则重置秒数，同时分钟数减1
          newState = {
            minute: this.state.minute - 1,
            second: 59
          };
          // 如果小时数为0 则当分钟数减至0时，直接设为0
          if (this.state.minute <= 0 && this.state.hour === 0) {
            newState = {
              minute: 0
            };
          }
        } else if (this.state.hour) {
          // 如果分钟数为0而小时数不为0  即 x:0:xx 则秒数和分钟数均置为初始值 同时小时数减1
          newState = {
            second: 59,
            minute: 59,
            hour: this.state.hour - 1
          };
          if (this.state.hour <= 0) {
            // 小时数减至0时，直接设为0
            newState = {
              hour: 0
            };
          }
        }
      }
      this.setState(newState);
      if (!this.state.hour && !this.state.minute && !this.state.second) {
        // 秒数/分钟数/小时数全都不大于0时，停止计时器
        clearInterval(this.intervalId);
      }
      // 当分钟数减至小于0时，重置为59 同时小时数减1
    }, 1000);
  };

  render() {
    const {hour, minute, second} = this.state;
    const {flashSale} = this.props;
    return (
      <section className="time-container">
        <div className="time-header">
          <div className="header-top">
            <span>限时购</span>
            <div className="time-down">
              <span ref="timeHour">{hour < 10 ? '0' + hour : hour}</span>
              <span>:</span>
              <span ref="timeMinute">{minute < 10 ? '0' + minute : minute}</span>
              <span>:</span>
              <span ref="timeSecond">{second < 10 ? '0' + second : second}</span>
            </div>
          </div>
          <span className="header-bottom">
        更多
        <i className="iconfont icon-52"></i>
      </span>
        </div>
        <ul className="time-list">
          {
            flashSale.itemList && flashSale.itemList.map((item, index) => (
              <li  key={index}>
                <img src={item.picUrl} alt="限时购" />
                <div className="good-price">
                  <span className="new-price">￥{item.activityPrice}</span>
                  <span className="old-price">￥{item.originPrice}</span>
                </div>
              </li>
            ))
          }
        </ul>
      </section>
    )
  }
}