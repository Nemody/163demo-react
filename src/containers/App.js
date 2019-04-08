/**
 * 容器组建App
 */
import {connect} from 'react-redux';

import {
  setNavList
} from '../redux/actions';
import App from '../App';

const mapStateToProps = (state) => {
  return {
    navList: state.navList
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
)(App);