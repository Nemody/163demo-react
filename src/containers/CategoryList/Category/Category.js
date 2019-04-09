/**
 * 分类页右侧对应导航的列表Category的容器组件
 */
import {connect} from 'react-redux';
import Category from '../../../pages/CategoryList/Category/Category';

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

export default connect(
  mapStateToProps,
  null
)(Category);