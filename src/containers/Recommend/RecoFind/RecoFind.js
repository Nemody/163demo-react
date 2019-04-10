/**
 * 识物页面推荐项RecoFind的容器组件
 */
import {connect} from 'react-redux';
import RecoFind from '../../../pages/Recommend/RecoFind/RecoFind';
const mapStateToProps = (state) => {
  if (state.recoIndex) {
    return {
      recoIndex: state.recoIndex
    }
  } else {
    return {
      recoIndex: 0
    }
  }
};


export default connect(
  mapStateToProps,
  null
)(RecoFind);