/**
 * 首页新品首发组件NewProducts的容器组件
 */
import {connect} from 'react-redux';

import NewProducts from '../../pages/Home/components/NewProducts/NewProducts';
const mapStateToProps = (state) => {
  if (state.homeData) {
    return {
      newItem: state.homeData.newItemList
    }
  } else {
    return {
      newItem: []
    }
  }
};


export default connect(
  mapStateToProps,
  null
)(NewProducts);