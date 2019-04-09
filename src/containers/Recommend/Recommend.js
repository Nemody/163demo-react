/**
 * 识物页面Recommend的容器组件
 */
import {connect} from 'react-redux';
import Recommend from '../../pages/Recommend';
import {setRecommendTabs} from '../../redux/actions';
const mapStateToProps = (state) => {
  if (state.recommendTabs) {
    return {
      recommendTabs: state.recommendTabs
    }
  } else {
    return {
      recommendTabs: []
    }
  }

};
const mapDispatchToProps = (dispatch) => {
  return {
    setRecoTabs: (recommendTabs) => {
      dispatch(setRecommendTabs(recommendTabs))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recommend);