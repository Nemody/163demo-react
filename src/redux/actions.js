/**
 * 用于创建action对象的工厂函数
 */
import {
  SET_HOMEDATA,
  SET_NAVLIST,
  SET_FLASHSALE,
  SET_NEWITEM,
  SET_POPULARITEM,
  SET_CLASSIFYLIST
} from './action-types';
export const setHomeData = (homeData) => ({type: SET_HOMEDATA, data: homeData});

export const setNavList = (navList) => ({type: SET_NAVLIST, data: navList});
export const setNewItem = (newItem) => ({type: SET_NEWITEM, data: newItem});
export const setFlashSale = (flashSale) => ({type: SET_FLASHSALE, data: flashSale});
export const setPopularItem= (popularItem) => ({type: SET_POPULARITEM, data: popularItem});
export const setClassifyList = (classifyList) => ({type: SET_CLASSIFYLIST, data: classifyList});
