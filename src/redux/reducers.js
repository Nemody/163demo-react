/**
 * 根据preState和action生成新的state
 */
import {
  SET_HOMEDATA,
  SET_NAVLIST,
  SET_FLASHSALE,
  SET_NEWITEM,
  SET_POPULARITEM,
  SET_CLASSIFYLIST
} from './action-types';
function updateHomeData(preState = {}, action) {
  switch (action.type) {
    case SET_HOMEDATA :
      return Object.assign({}, preState, {homeData: action.data});
    case SET_NAVLIST :
      return Object.assign({}, preState, {navList: action.data});
    case SET_FLASHSALE :
      return Object.assign({}, preState, {flashSale: action.data});
    case SET_NEWITEM :
      return Object.assign({}, preState, {newItem: action.data});
    case SET_POPULARITEM :
      return Object.assign({}, preState, {popularItem: action.data});
    case SET_CLASSIFYLIST :
      return Object.assign({}, preState, {classifyList: action.data});
    default:
      return preState;
  }
}
export default updateHomeData;