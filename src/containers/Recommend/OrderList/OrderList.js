/**
 * 识物--晒单页面OrderList的容器组件
 */
import {connect} from 'react-redux';
import OrderList from '../../../pages/Recommend/components/OrderList/OrderList';
import {
  setOrdershowTop
} from '../../../redux/actions';
const mapStateToProps = (state) => {
  if (state.ordershowTop) {
      return {
        ordershowTop: state.ordershowTop
      }
  } else {
    return {
      ordershowTop: {}
    }
  }
};
const mapDispatchToProps = (dispatch) => {
 return {
   setOrdershowTop: (ordershowTop) => {
     dispatch(setOrdershowTop(ordershowTop))
   }
 }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OrderList);