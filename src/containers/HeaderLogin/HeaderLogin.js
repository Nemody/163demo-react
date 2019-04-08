/**
 * 首页头部的容器组件
 */
import {connect} from 'react-redux';

import {setNavList} from '../../redux/actions';
import HeaderLogin from '../../components/HeaderLogin';

const mapStateToProps = (state) => {
  if (state.navList) {
    return {
      navList: state.navList
    }
  } else {
    return {
      navList: []
    }
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    setNavList: (navList) => {
      dispatch(setNavList(navList));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderLogin);