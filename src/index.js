/**
 * react项目入口文件
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import 'lib-flexible/flexible';
import './mock/mock-server';
import App from './containers/App';
import store from './redux/store';

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));

/*
store.subscribe(() => {
  ReactDOM.render(<App  store={store}/>, document.getElementById('root'));
});
*/
