/**
 * 识物页面推荐页RecoList的容器组件
 */
import {connect} from 'react-redux';
import RecoList from '../../../pages/Recommend/components/RecoList/RecoList';
import {setRecommendData} from '../../../redux/actions';
const mapStateToProps = (state) => {
  if (state.recommendData) {
    return {
      recommendData: state.recommendData
    }
  } else {
    return {
      recommendData: []
    }
  }


};
const mapDispatchToProps = (dispatch) => {
  return {
    setRecoData: (recommendData) => {
      dispatch(setRecommendData(recommendData))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RecoList);