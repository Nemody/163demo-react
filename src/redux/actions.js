/**
 * 用于创建action对象的工厂函数
 */
import {
  SET_HOMEDATA,
  SET_CATEGORYLIST,
  SET_RECOMMEND_TABS,
  SET_RECOMMEND_DATA,
  SET_AUTO_RECOMMEND,
  SET_ORDERSHOW_TOP,
  SET_ORDERSHOW_RATINGS
} from './action-types';
export const setHomeData = (homeData) => ({type: SET_HOMEDATA, data: homeData});
export const setCategoryList = (categoryList) => ({type: SET_CATEGORYLIST, data: categoryList});
export const setRecommendTabs = (recommendTabs) => ({type: SET_RECOMMEND_TABS, data: recommendTabs});
export const setRecommendData = (recommendData) => ({type: SET_RECOMMEND_DATA, data: recommendData});
export const setAutoRecommend = (autoRecommend) => ({type: SET_AUTO_RECOMMEND, data: autoRecommend});
export const setOrdershowTop = (ordershowTop) => ({type: SET_ORDERSHOW_TOP, data: ordershowTop});
export const setOrdershowRatings = (ordershowRatings) => ({type: SET_ORDERSHOW_RATINGS, data: ordershowRatings});

