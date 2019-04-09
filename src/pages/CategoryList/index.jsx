import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {reqCategoryList} from '../../api';
import Category from '../../containers/CategoryList/Category/Category';
import './index.styl';
export default class CategoryList extends Component {
  static propTypes = {
    categoryList: PropTypes.array.isRequired,
    setCategoryData: PropTypes.func.isRequired
  };
 state = {
   currentId: 1022001
 };
  componentWillMount() {
    this.getCategoryList();
  };

  getCategoryList = async () => {
    const result = await reqCategoryList();
    if (result.code === 0) {
      const categoryList = result.data.categoryL1List;
      this.props.setCategoryData(categoryList);
    }
  };
  handleClick = (id) => {
    this.props.history.replace({
      pathname: '/categorylist/category',
      query: {
        id
      }
    });
    this.setState({
      currentId: id
    });
  };
  render() {
    const {categoryList} = this.props;
    const {currentId} = this.state;
    return (
      <div className="categoryList-container">
        <div className="searchInput">
          <i className="iconfont icon-search"></i>
          <span className="placeholder">搜索商品，共xxxxx款好物</span>
        </div>
        <section className="categoryList-main">
          <div className="line"></div>
          <div className="categoryList-left">
            <ul>
              {
                categoryList.length && categoryList.map((category, index) => (
                  <li key={index} onClick={e => this.handleClick(category.id)} className={currentId === category.id ? 'active' : ''}>
                    <span>{category.name}</span>
                  </li>
                ))
              }
            </ul>
          </div>
          <Category/>
        </section>
      </div>
    )
  }
}