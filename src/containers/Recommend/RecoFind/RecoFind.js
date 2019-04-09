/**
 * 识物页面Recommend的容器组件
 */
import {connect} from 'react-redux';
import RecoFind from '../../../pages/Recommend/RecoFind/RecoFind';
import {
  setRecommendData,
  setAutoRecommend
} from '../../../redux/actions';
const mapStateToProps = (state) => {
  if (state.recommendData && state.autoRecommend) {
    return {
      recommendData: state.recommendData,
      autoRecommend: state.autoRecommend
    }
  } else {
    return {
      recommendData: [],
      autoRecommend: []
    }
  }

};
const mapDispatchToProps = (dispatch) => {
  return {
    setRecoData: (recommendData) => {
      dispatch(setRecommendData(recommendData))
    },
    setAutoReco: (autoRecommend) => {
      dispatch(setAutoRecommend(autoRecommend))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecoFind);