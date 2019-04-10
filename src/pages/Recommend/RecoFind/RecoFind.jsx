import React, {Component} from 'react';
import PropTypes from 'prop-types';
import RecoList from '../../../containers/Recommend/RecoList/RecoList';
import OrderList from '../../../containers/Recommend/OrderList/OrderList';

export default class RecoFind extends Component {
  static propTypes = {
    recoIndex: PropTypes.number.isRequired
  };
  state = {
    isSelect: true,
    isShow: true
  };

    render(){
      const {recoIndex} = this.props;
      return (
        <section className="recoFind-container">
          {
            recoIndex === 4 ? null : <RecoList/>
          }
          {
            recoIndex === 4 ? <OrderList /> : null
          }
        </section>
        )
    }
}