/**
 * 用于创建action对象的工厂函数
 */
import {
  SET_HOMEDATA,
  SET_CATEGORYLIST
} from './action-types';
export const setHomeData = (homeData) => ({type: SET_HOMEDATA, data: homeData});
export const setCategoryList = (categoryList) => ({type: SET_CATEGORYLIST, data: categoryList});

