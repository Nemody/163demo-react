/**
 * 首页人气推荐组件的容器组件
 */
import {connect} from 'react-redux';

import Recommend from '../../pages/Home/components/Recommend/Recommend';
const mapStateToProps = (state) => {
  if (state.homeData) {
    return {
      popularItem: state.homeData.popularItemList
    }
  } else {
    return {
      popularItem: []
    }
  }
};

export default connect(
  mapStateToProps,
  null
)(Recommend);