/**
 * 识物页面Recommend的容器组件
 */
import {connect} from 'react-redux';
import Recommend from '../../pages/Recommend';
import {
  setRecommendTabs,
  setRecoIndex
} from '../../redux/actions';
const mapStateToProps = (state) => {
  if (state.recommendTabs) {
    return {
      recommendTabs: state.recommendTabs,
      recoIndex: state.recoIndex
    }
  } else {
    return {
      recommendTabs: [],
      recoIndex: 0
    }
  }

};
const mapDispatchToProps = (dispatch) => {
  return {
    setRecoTabs: (recommendTabs) => {
      dispatch(setRecommendTabs(recommendTabs))
    },
    setRecoIndex: (recoIndex) => {
      dispatch(setRecoIndex(recoIndex))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recommend);