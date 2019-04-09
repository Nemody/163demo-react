/**
 * 根据preState和action生成新的state
 */
import {
  SET_HOMEDATA,
  SET_CATEGORYLIST
} from './action-types';
function updateState(preState = {}, action) {
  switch (action.type) {
    case SET_HOMEDATA :
      return Object.assign({}, preState, {homeData: action.data});
    case SET_CATEGORYLIST :
      return Object.assign({}, preState, {categoryList: action.data});
    default:
      return preState;
  }
}
export default updateState;