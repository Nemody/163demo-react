/**
 * 分类页CategoryList左侧的导航区的容器组件
 */
import {connect} from 'react-redux';
import {setCategoryList} from '../../redux/actions';
import CategoryList from '../../pages/CategoryList';

const mapStateToProps = (state) => {
  if (state.categoryList) {
      return {
        categoryList: state.categoryList
      }
  } else {
    return {
      categoryList: []
    }
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    setCategoryData: (categoryList) => {
      dispatch(setCategoryList(categoryList))
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CategoryList);