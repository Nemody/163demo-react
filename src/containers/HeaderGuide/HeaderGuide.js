/**
 * 首页头部的容器组件
 */
import {connect} from 'react-redux';

import HeaderGuide from '../../components/HeaderGuide';

const mapStateToProps = (state) => {
  if (state.homeData) {
    return {
      navList: state.homeData.kingKongModule.kingKongList
    }
  } else {
    return {
      navList: []
    }
  }
};

export default connect(
  mapStateToProps,
  null
)(HeaderGuide);