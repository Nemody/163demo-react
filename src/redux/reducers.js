/**
 * 根据preState和action生成新的state
 */
import {
  SET_HOMEDATA,
  SET_CATEGORYLIST,
  SET_RECOMMEND_TABS,
  SET_RECOMMEND_DATA,
  SET_ORDERSHOW_TOP,
  SET_RECOINDEX
} from './action-types';
function updateState(preState = {}, action) {
  switch (action.type) {
    case SET_HOMEDATA :
      return Object.assign({}, preState, {homeData: action.data});
    case SET_CATEGORYLIST :
      return Object.assign({}, preState, {categoryList: action.data});
    case SET_RECOMMEND_TABS :
      return Object.assign({}, preState, {recommendTabs: action.data});
    case SET_RECOMMEND_DATA :
      return Object.assign({}, preState, {recommendData: action.data});
    case SET_ORDERSHOW_TOP :
      return Object.assign({}, preState, {ordershowTop: action.data});
    case SET_RECOINDEX :
      return Object.assign({}, preState, {recoIndex: action.data});
    default:
      return preState;
  }
}
export default updateState;

