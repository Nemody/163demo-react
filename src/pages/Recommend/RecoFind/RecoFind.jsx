import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  reqRecommendData,
  reqAutoRecommendData
} from '../../../api';

export default class RecoFind extends Component {
  static propTypes = {
    recommendData: PropTypes.array.isRequired,
    autoRecommend: PropTypes.array.isRequired,
    setRecoData: PropTypes.func.isRequired,
    setAutoReco: PropTypes.func.isRequired
  };
  state = {
    isSelect: true
  };
  componentWillMount () {
    this.getRecommendTabs();
  };
  getRecommendTabs = async () => {
    console.log(111)
  };
    render(){
        return (
            <div>
                RecoFind
            </div>
        )
    }
}