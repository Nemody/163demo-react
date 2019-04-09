/**
 * 应用主组件的容器组件
 */
import {connect} from 'react-redux';

import App from '../App';
import {setHomeData} from '../redux/actions';
const mapStateToProps = (state) => {
  if (state.homeData) {
    return {
      homeData: state.homeData
    }
  } else {
    return {
      homeData: {}
    }
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    setHomeData: (homeData) => {
      dispatch(setHomeData(homeData));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);