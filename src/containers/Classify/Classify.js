/**
 * 首页下方分类列表区Classify的容器组件
 */
/**
 * 首页新品首发组件NewProducts的容器组件
 */
import {connect} from 'react-redux';

import Classify from '../../pages/Home/components/Classify/Classify';
const mapStateToProps = (state) => {
  if (state.homeData) {
    return {
      classifyList: state.homeData.categoryModule
    }
  } else {
    return {
      classifyList: []
    }
  }
};

export default connect(
  mapStateToProps,
  null
)(Classify);