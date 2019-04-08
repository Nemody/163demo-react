/**
 * 专用于管理状态数据的模块
 */
import {createStore} from 'redux';
import reducers from './reducers';

export default createStore(reducers);