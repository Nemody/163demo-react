/**
 * 首页导航区的容器组件
 */
import {connect} from 'react-redux';

import HomeNav from '../../pages/Home/components/HomeNav/HomeNav';
const mapStateToProps = (state) => {
  if (state.navList) {
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
)(HomeNav);