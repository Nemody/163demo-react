import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import './Category.styl';
class Category extends Component {
  static propTypes = {
    categoryList: PropTypes.array.isRequired
  };

  filterCategory = (categoryList) => {
  const id = this.props.location.query ? this.props.location.query.id : 1022001;
  return (categoryList.find(item => item.id === id));
};
  render(){
    const {categoryList} = this.props;
    const categories = this.filterCategory(categoryList);
    return (
      <div className="category-container">
        <div className="category-main" style={{display: categories ? 'block' : 'none'}}>
          {
            <div>
              <img className="category-bigImg" src={categories ? categories.bannerUrl : ''} alt="居家生活大图" />
              <ul>
                {
                  categories && categories.subCateList.map((category, index) => (
                    <li key = {index}>
                      <img src={category.bannerUrl} alt={category.name} />
                      <span>{category.name}</span>
                    </li>
                  ))
                }
              </ul>
            </div>
          }
        </div>
      </div>
    )
  }
}
export default withRouter(Category);