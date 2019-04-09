/**
 * 首页限时购组件FlashSale的容器组件
 */
import {connect} from 'react-redux';

import FlashSale from '../../../pages/Home/components/FlashSale/FlashSale';
const mapStateToProps = (state) => {
  if (state.homeData) {
    return {
      flashSale: state.homeData.flashSaleModule
    }
  } else {
    return {
      flashSale: {}
    }
  }
};

export default connect(
  mapStateToProps,
  null
)(FlashSale);